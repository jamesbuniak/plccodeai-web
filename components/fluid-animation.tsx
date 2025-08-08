"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const FluidAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const materialRef = useRef<THREE.ShaderMaterial | null>(null);
    const animationIdRef = useRef<number | null>(null);
    const clockRef = useRef<THREE.Clock>(new THREE.Clock());

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        renderer.setSize(rect.width, rect.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        sceneRef.current = scene;
        rendererRef.current = renderer;

        // Water simulation buffers
        const resolution = 128; // Reduced for better performance
        const waterBuffers = {
            current: new Float32Array(resolution * resolution),
            previous: new Float32Array(resolution * resolution),
            velocity: new Float32Array(resolution * resolution * 2),
        };

        // Initialize buffers
        for (let i = 0; i < resolution * resolution; i++) {
            waterBuffers.current[i] = 0.0;
            waterBuffers.previous[i] = 0.0;
            waterBuffers.velocity[i * 2] = 0.0;
            waterBuffers.velocity[i * 2 + 1] = 0.0;
        }

        // Create water texture
        const waterTexture = new THREE.DataTexture(
            waterBuffers.current,
            resolution,
            resolution,
            THREE.RedFormat,
            THREE.FloatType
        );
        waterTexture.minFilter = THREE.LinearFilter;
        waterTexture.magFilter = THREE.LinearFilter;
        waterTexture.needsUpdate = true;

        // Shader material
        const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

        const fragmentShader = `
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec3 u_color1;
      uniform vec3 u_color2;
      uniform vec3 u_color3;
      uniform vec3 u_background;
      uniform float u_speed;
      uniform sampler2D u_waterTexture;
      uniform float u_waterStrength;
      uniform float u_ripple_time;
      uniform vec2 u_ripple_position;
      uniform float u_ripple_strength;
      
      varying vec2 vUv;

      void main() {
        vec2 r = u_resolution;
        vec2 FC = gl_FragCoord.xy;
        vec2 uv = vec2(FC.x / r.x, 1.0 - FC.y / r.y);
        vec2 screenP = (FC.xy * 2.0 - r) / r.y;
        
        vec2 wCoord = vec2(FC.x / r.x, FC.y / r.y);
        float waterHeight = texture2D(u_waterTexture, wCoord).r;
        float waterInfluence = clamp(waterHeight * u_waterStrength, -0.5, 0.5);
        
        float baseRadius = 0.9;
        float waterPulse = waterInfluence * 0.9;
        float circleRadius = baseRadius + waterPulse;
        
        float distFromCenter = length(screenP);
        float inCircle = smoothstep(circleRadius + 0.1, circleRadius - 0.1, distFromCenter);
        
        vec4 o = vec4(0.0);
        
        if (inCircle > 0.0) {
          vec2 p = screenP * 1.1;
          
          float rippleTime = u_time - u_ripple_time;
          vec2 ripplePos = u_ripple_position * r;
          float rippleDist = distance(FC.xy, ripplePos);
          
          float clickRipple = 0.0;
          if (rippleTime < 3.0 && rippleTime > 0.0) {
            float rippleRadius = rippleTime * 150.0;
            float rippleWidth = 30.0;
            float rippleDecay = 1.0 - rippleTime / 3.0;
            clickRipple = exp(-abs(rippleDist - rippleRadius) / rippleWidth) * rippleDecay * u_ripple_strength;
          }
          
          float totalWaterInfluence = clamp((waterInfluence + clickRipple * 0.1) * u_waterStrength, -0.8, 0.8);
          
          float angle = length(p) * 4.0;
          mat2 R = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
          p *= R;
          
          float l = length(p) - 0.7 + totalWaterInfluence * 0.5;
          float t = u_time * u_speed + totalWaterInfluence * 2.0;
          float enhancedY = p.y + totalWaterInfluence * 0.3;
          
          float pattern1 = 0.5 + 0.5 * tanh(0.1 / max(l / 0.1, -l) - sin(l + enhancedY * max(1.0, -l / 0.1) + t));
          float pattern2 = 0.5 + 0.5 * tanh(0.1 / max(l / 0.1, -l) - sin(l + enhancedY * max(1.0, -l / 0.1) + t + 1.0));
          float pattern3 = 0.5 + 0.5 * tanh(0.1 / max(l / 0.1, -l) - sin(l + enhancedY * max(1.0, -l / 0.1) + t + 2.0));
          
          float intensity = 1.0 + totalWaterInfluence * 0.5;
          
          o.r = pattern1 * u_color1.r * intensity;
          o.g = pattern2 * u_color2.g * intensity;
          o.b = pattern3 * u_color3.b * intensity;
          o.a = inCircle;
        }
        
        vec3 finalColor = mix(u_background, o.rgb, o.a);
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

        // Function to get the current background color from CSS custom properties
        const getBackgroundColor = () => {
            if (typeof window === 'undefined') return [0.039, 0.039, 0.039]; // dark theme fallback

            const computedStyle = getComputedStyle(document.documentElement);
            const bgColor = computedStyle.getPropertyValue('--background').trim();

            // Parse HSL color (format: "h s% l%")
            const hslMatch = bgColor.match(/(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)%\s+(\d+(?:\.\d+)?)%/);
            if (hslMatch) {
                const [, h, s, l] = hslMatch;
                const lightness = parseFloat(l) / 100;

                // Convert HSL lightness to RGB (simplified for grayscale themes)
                // Since saturation is 0 for both light and dark themes, it's grayscale
                return [lightness, lightness, lightness];
            }

            // Fallback to dark theme color if parsing fails
            return [0.039, 0.039, 0.039];
        };

        const backgroundColor = getBackgroundColor();

        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                u_time: { value: 0.0 },
                u_resolution: { value: new THREE.Vector2(rect.width, rect.height) },
                u_speed: { value: 1.3 },
                u_color1: { value: new THREE.Vector3(0.2, 0.6, 1.0) }, // Bright blue
                u_color2: { value: new THREE.Vector3(0.1, 0.4, 0.9) }, // Medium blue
                u_color3: { value: new THREE.Vector3(0.0, 0.3, 0.8) }, // Deep blue
                u_background: { value: new THREE.Vector3(backgroundColor[0], backgroundColor[1], backgroundColor[2]) },
                u_waterTexture: { value: waterTexture },
                u_waterStrength: { value: 0.55 },
                u_ripple_time: { value: -10.0 },
                u_ripple_position: { value: new THREE.Vector2(0.5, 0.5) },
                u_ripple_strength: { value: 0.5 }
            }
        });

        materialRef.current = material;

        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        camera.position.z = 1;

        // Water simulation functions
        const addRipple = (x: number, y: number, strength = 1.0) => {
            const normalizedX = x / rect.width;
            const normalizedY = 1.0 - y / rect.height;
            const texX = Math.floor(normalizedX * resolution);
            const texY = Math.floor(normalizedY * resolution);
            const radius = 8;
            const rippleStrength = strength * 0.5;

            for (let i = -radius; i <= radius; i++) {
                for (let j = -radius; j <= radius; j++) {
                    const distanceSquared = i * i + j * j;
                    if (distanceSquared <= radius * radius) {
                        const posX = texX + i;
                        const posY = texY + j;
                        if (posX >= 0 && posX < resolution && posY >= 0 && posY < resolution) {
                            const index = posY * resolution + posX;
                            const distance = Math.sqrt(distanceSquared);
                            const falloff = 1.0 - distance / radius;
                            const rippleValue = Math.cos((distance / radius) * Math.PI * 0.5) * rippleStrength * falloff;
                            waterBuffers.previous[index] += rippleValue;
                        }
                    }
                }
            }
        };

        const updateWaterSimulation = () => {
            const damping = 0.913;
            const tension = 0.02;

            // Water wave simulation
            for (let i = 1; i < resolution - 1; i++) {
                for (let j = 1; j < resolution - 1; j++) {
                    const index = i * resolution + j;
                    const top = waterBuffers.previous[index - resolution];
                    const bottom = waterBuffers.previous[index + resolution];
                    const left = waterBuffers.previous[index - 1];
                    const right = waterBuffers.previous[index + 1];

                    waterBuffers.current[index] = (top + bottom + left + right) / 2 - waterBuffers.current[index];
                    waterBuffers.current[index] = waterBuffers.current[index] * damping + waterBuffers.previous[index] * (1 - damping);
                    waterBuffers.current[index] += (0 - waterBuffers.previous[index]) * tension;
                    waterBuffers.current[index] = Math.max(-2.0, Math.min(2.0, waterBuffers.current[index]));
                }
            }

            // Apply zero boundary conditions
            for (let i = 0; i < resolution; i++) {
                waterBuffers.current[i] = 0;
                waterBuffers.current[(resolution - 1) * resolution + i] = 0;
                waterBuffers.current[i * resolution] = 0;
                waterBuffers.current[i * resolution + (resolution - 1)] = 0;
            }

            [waterBuffers.current, waterBuffers.previous] = [waterBuffers.previous, waterBuffers.current];
            waterTexture.image.data = waterBuffers.current;
            waterTexture.needsUpdate = true;
        };

        // Mouse interaction
    const lastMousePosition = { x: 0, y: 0 };
        let mouseThrottleTime = 0;

        const onMouseMove = (event: MouseEvent) => {
            const containerRect = container.getBoundingClientRect();
            const x = event.clientX - containerRect.left;
            const y = event.clientY - containerRect.top;

            // Only process if mouse is within the container
            if (x < 0 || x > containerRect.width || y < 0 || y > containerRect.height) return;

            const now = performance.now();
            if (now - mouseThrottleTime < 16) return; // 60fps throttle
            mouseThrottleTime = now;

            const dx = x - lastMousePosition.x;
            const dy = y - lastMousePosition.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > 1) {
                const velocity = distance / 8;
                const velocityInfluence = Math.min(velocity / 10, 2.0);
                const baseIntensity = Math.min(distance / 20, 1.0);
                const fluidIntensity = baseIntensity * velocityInfluence * 1.2;

                addRipple(x, y, fluidIntensity);
                lastMousePosition.x = x;
                lastMousePosition.y = y;
            }
        };

        const onMouseClick = (event: MouseEvent) => {
            const containerRect = container.getBoundingClientRect();
            const x = event.clientX - containerRect.left;
            const y = event.clientY - containerRect.top;

            if (x < 0 || x > containerRect.width || y < 0 || y > containerRect.height) return;

            addRipple(x, y, 3.0);
            const clickX = x / containerRect.width;
            const clickY = 1.0 - y / containerRect.height;
            material.uniforms.u_ripple_position.value.set(clickX, clickY);
            material.uniforms.u_ripple_time.value = clockRef.current.getElapsedTime();
        };

        // Add event listeners
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("click", onMouseClick);

        // Animation loop
        const animate = () => {
            animationIdRef.current = requestAnimationFrame(animate);
            const elapsed = clockRef.current.getElapsedTime();
            material.uniforms.u_time.value = elapsed;
            updateWaterSimulation();
            renderer.render(scene, camera);
        };

        // Handle resize
        const handleResize = () => {
            if (!container) return;
            const newRect = container.getBoundingClientRect();
            renderer.setSize(newRect.width, newRect.height);
            material.uniforms.u_resolution.value.set(newRect.width, newRect.height);
        };

        // Handle theme changes
        const handleThemeChange = () => {
            const newBackgroundColor = getBackgroundColor();
            material.uniforms.u_background.value.set(
                newBackgroundColor[0],
                newBackgroundColor[1],
                newBackgroundColor[2]
            );
        };

        // Observer for theme changes
        const themeObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    handleThemeChange();
                }
            });
        });

        // Start observing theme changes on the document element
        themeObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        window.addEventListener("resize", handleResize);

        // Start animation
        animate();

        // Add initial ripple
        setTimeout(() => {
            addRipple(rect.width / 2, rect.height / 2, 1.5);
        }, 500);

        // Cleanup
        return () => {
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("click", onMouseClick);
            window.removeEventListener("resize", handleResize);
            themeObserver.disconnect();

            if (container && renderer.domElement) {
                container.removeChild(renderer.domElement);
            }
            renderer.dispose();
            geometry.dispose();
            material.dispose();
            waterTexture.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full h-full rounded-xl overflow-hidden bg-background"
            style={{ minHeight: "400px" }}
        />
    );
};

export default FluidAnimation;
