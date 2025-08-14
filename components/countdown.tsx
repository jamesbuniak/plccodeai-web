"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Countdown to 6 months from now (robust add)
        const nowDate = new Date();
        // Add 6 months robustly
        let targetMonth = nowDate.getMonth() + 6;
    const targetYear = nowDate.getFullYear() + Math.floor(targetMonth / 12);
        targetMonth = targetMonth % 12;
        // Clamp day to last day of target month
        const targetDay = Math.min(
            nowDate.getDate(),
            new Date(targetYear, targetMonth + 1, 0).getDate()
        );
        const targetDate = new Date(targetYear, targetMonth, targetDay, nowDate.getHours(), nowDate.getMinutes(), nowDate.getSeconds());

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance > 0) {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="py-12 xs:py-20 px-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <div className="max-w-screen-xl mx-auto text-center">
                {/* Section Header */}
                <div className="mb-12">
                    <Badge className="rounded-full py-1 px-4 mb-4">
                        🚀 Launch Countdown
                    </Badge>
                    <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        We&apos;re Building the Future
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        PLCcode.ai is in active development. Join our pre-release supporters and be
                        among the first to experience AI-powered PLC programming when we launch.
                    </p>
                </div>

                {/* Countdown Display */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
                    <div className="bg-background/80 backdrop-blur-sm border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                            {timeLeft.days}
                        </div>
                        <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wide">
                            Days
                        </div>
                    </div>

                    <div className="bg-background/80 backdrop-blur-sm border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                            {timeLeft.hours}
                        </div>
                        <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wide">
                            Hours
                        </div>
                    </div>

                    <div className="bg-background/80 backdrop-blur-sm border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                            {timeLeft.minutes}
                        </div>
                        <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wide">
                            Minutes
                        </div>
                    </div>

                    <div className="bg-background/80 backdrop-blur-sm border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                            {timeLeft.seconds}
                        </div>
                        <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wide">
                            Seconds
                        </div>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-12 max-w-3xl mx-auto">
                    <div className="bg-background/60 backdrop-blur-sm border rounded-lg p-6">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            <strong className="text-foreground">Pre-release supporters</strong> help fund our development and infrastructure costs.
                            Your investment ensures we can deliver a robust, scalable AI platform for PLC programming.
                            Thank you for believing in the future of industrial automation! 🙏
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
