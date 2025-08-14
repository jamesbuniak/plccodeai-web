import { motion } from "framer-motion";

export default function ShieldAnimation() {
  return (
    <motion.div
      initial={{ scale: 0.9, rotate: -8, opacity: 0.7 }}
      animate={{ scale: [0.9, 1.05, 1], rotate: [-8, 8, 0], opacity: [0.7, 1, 1] }}
      transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      className="flex items-center justify-center h-full"
    >
      <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="shield-glow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.2" />
          </radialGradient>
        </defs>
        <ellipse cx="90" cy="150" rx="60" ry="18" fill="url(#shield-glow)" />
        <path d="M90 20C120 30 150 40 150 70c0 60-30 80-60 90C60 150 30 130 30 70c0-30 30-40 60-50z" fill="#fff" stroke="#2563eb" strokeWidth="4" />
        <path d="M90 40c18 6 36 12 36 30 0 36-18 48-36 54-18-6-36-18-36-54 0-18 18-24 36-30z" fill="#60a5fa" fillOpacity="0.15" />
        <motion.path
          d="M70 90l15 15 25-25"
          fill="none"
          stroke="#22c55e"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />
      </svg>
    </motion.div>
  );
}
