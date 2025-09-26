"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const BackgroundLines = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950/20 to-slate-950 w-full min-h-screen">

            {/* Dynamic gradient overlay that follows mouse */}
            <div
                className="absolute inset-0 opacity-30 transition-all duration-500 ease-out"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                        rgba(16, 185, 129, 0.2) 0%, 
                        rgba(6, 182, 212, 0.1) 25%, 
                        rgba(59, 130, 246, 0.05) 50%, 
                        transparent 70%)`
                }}
            />

            {/* Main animated lines - vertical */}
            <div className="absolute inset-0">
                {[...Array(25)].map((_, i) => (
                    <motion.div
                        key={`vertical-${i}`}
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                            duration: 12 + (i * 0.3),
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.1,
                        }}
                        className="absolute top-0 w-[1px] h-full opacity-60"
                        style={{
                            left: `${i * 4}%`,
                            background: `linear-gradient(to bottom, 
                                transparent 0%, 
                                rgba(16, 185, 129, ${0.1 + (i % 3) * 0.1}) 20%, 
                                rgba(6, 182, 212, ${0.2 + (i % 4) * 0.1}) 50%, 
                                rgba(59, 130, 246, ${0.1 + (i % 2) * 0.1}) 80%, 
                                transparent 100%)`
                        }}
                    />
                ))}
            </div>

            {/* Horizontal accent lines */}
            <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={`horizontal-${i}`}
                        initial={{ y: "-100%" }}
                        animate={{ y: "100%" }}
                        transition={{
                            duration: 20 + (i * 0.5),
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.3,
                        }}
                        className="absolute left-0 h-[1px] w-full opacity-30"
                        style={{
                            top: `${i * 12.5}%`,
                            background: `linear-gradient(to right, 
                                transparent 0%, 
                                rgba(16, 185, 129, 0.2) 30%, 
                                rgba(6, 182, 212, 0.3) 50%, 
                                rgba(59, 130, 246, 0.2) 70%, 
                                transparent 100%)`
                        }}
                    />
                ))}
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={`particle-${i}`}
                        className="absolute w-2 h-2 rounded-full opacity-40"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            background: i % 3 === 0
                                ? 'rgba(16, 185, 129, 0.6)'
                                : i % 3 === 1
                                    ? 'rgba(6, 182, 212, 0.6)'
                                    : 'rgba(59, 130, 246, 0.6)'
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.4, 0.8, 0.4],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Radial gradient spots */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
                <div className="absolute top-2/3 left-2/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
            </div>

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Animated border glow */}
            <div className="absolute inset-0 border border-emerald-500/10 rounded-lg">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent animate-pulse-slow" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse-slow" style={{ animationDelay: '1s' }} />
                <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-blue-400/50 to-transparent animate-pulse-slow" style={{ animationDelay: '2s' }} />
                <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-emerald-400/50 to-transparent animate-pulse-slow" style={{ animationDelay: '3s' }} />
            </div>

            {/* Content with backdrop blur */}
            <div className="relative z-10 backdrop-blur-[1px]">
                {children}
            </div>

            {/* Bottom fade overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-10" />
        </div>
    );
};