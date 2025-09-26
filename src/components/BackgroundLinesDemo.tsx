"use client";

import React, { useState, useEffect } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export function BackgroundLinesDemo() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentText, setCurrentText] = useState("");
    const fullText = "Premium travel experience with cutting-edge technology";

    useEffect(() => {
        setIsVisible(true);

        // Typewriter effect
        let index = 0;
        const timer = setInterval(() => {
            setCurrentText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(timer);
            }
        }, 50);

        return () => clearInterval(timer);
    }, []);

    return (
        <BackgroundLines>
            <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
                {/* Floating badge */}
                <div className={`transform transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                    <div className="inline-flex items-center px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-xl mb-8 animate-pulse-slow">
                        <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-ping" />
                        <span className="text-sm font-semibold text-emerald-200 uppercase tracking-wide">
                            Now Boarding
                        </span>
                    </div>
                </div>

                {/* Main Title with enhanced styling */}
                <div className={`transform transition-all duration-1000 ease-out delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
                            Sanjana Airlines
                        </span>
                        <div className="inline-block ml-4 text-6xl md:text-8xl animate-bounce-slow">✈️</div>
                    </h1>
                </div>

                {/* Typewriter subtitle */}
                <div className={`transform transition-all duration-1000 ease-out delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                    <p className="text-xl md:text-2xl text-gray-300 mb-12 h-8 font-light">
                        {currentText}
                        <span className="animate-pulse">|</span>
                    </p>
                </div>

                {/* Animated Blob */}
                <div className={`transform transition-all duration-1000 ease-out delay-900 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                    }`}>
                    <div className="relative mb-12 flex justify-center">
                        <div className="relative">
                            {/* Glow effect behind image */}
                            <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl scale-150 animate-pulse-slow" />
                            <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-emerald-400/30 backdrop-blur-sm">
                                <img
                                    src="blob_green.gif"
                                    alt="Animated travel visualization"
                                    className="w-full h-full object-cover animate-float"
                                />
                            </div>
                            {/* Floating particles around image */}
                            <div className="absolute top-4 -right-4 w-4 h-4 bg-emerald-400 rounded-full animate-ping opacity-60" />
                            <div className="absolute -bottom-2 -left-6 w-3 h-3 bg-cyan-400 rounded-full animate-bounce opacity-70" />
                            <div className="absolute top-1/2 -left-8 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-50" />
                        </div>
                    </div>
                </div>

                {/* Tech Stack Section */}
                <div className={`transform transition-all duration-1000 ease-out delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                    <div className="bg-black/20 backdrop-blur-xl rounded-3xl p-8 border border-white/10 mb-8">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Hello Next.js 🚀
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 mb-8 font-light">
                            Building the future with Next.js + Tailwind + TypeScript
                        </p>

                        {/* Tech badges */}
                        <div className="flex flex-wrap gap-4 justify-center">
                            {[
                                { name: "Next.js", color: "from-gray-400 to-gray-600", icon: "⚡" },
                                { name: "TypeScript", color: "from-blue-400 to-blue-600", icon: "🔷" },
                                { name: "Tailwind CSS", color: "from-cyan-400 to-cyan-600", icon: "🎨" },
                                { name: "Framer Motion", color: "from-pink-400 to-pink-600", icon: "✨" }
                            ].map((tech, index) => (
                                <div
                                    key={tech.name}
                                    className={`group px-6 py-3 bg-gradient-to-r ${tech.color} rounded-full text-white font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer animate-fade-in-up`}
                                    style={{ animationDelay: `${1200 + index * 100}ms` }}
                                >
                                    <span className="mr-2">{tech.icon}</span>
                                    {tech.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Call to action buttons */}
                <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 ease-out delay-1300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                    <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-cyan-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                        <span className="relative z-10 flex items-center">
                            Book Your Flight
                            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">✈️</span>
                        </span>
                    </button>

                    <button className="group px-8 py-4 border-2 border-emerald-400/50 rounded-full font-semibold text-emerald-200 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-400/10 hover:scale-105">
                        <span className="group-hover:text-white transition-colors duration-300 flex items-center">
                            Explore Destinations
                            <span className="ml-2 group-hover:rotate-12 transition-transform duration-300">🌍</span>
                        </span>
                    </button>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-60">
                    <div className="flex flex-col items-center text-emerald-400">
                        <div className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse" />
                        </div>
                        <span className="text-xs mt-2 uppercase tracking-wide">Scroll</span>
                    </div>
                </div>
            </div>
        </BackgroundLines>
    );
}