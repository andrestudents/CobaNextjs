'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

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
        <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
            {/* Dynamic gradient background that follows mouse */}
            <div
                className="absolute inset-0 opacity-50 transition-all duration-300 ease-out"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(139, 69, 19, 0.3) 0%, 
            rgba(75, 0, 130, 0.2) 25%, 
            rgba(25, 25, 112, 0.1) 50%, 
            transparent 70%)`
                }}
            />

            {/* Animated geometric shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-20 h-20 border border-purple-400/20 rounded-full animate-spin-slow" />
                <div className="absolute bottom-32 right-16 w-16 h-16 border-2 border-blue-400/30 transform rotate-45 animate-pulse" />
                <div className="absolute top-1/2 left-8 w-12 h-12 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-lg animate-float" />
                <div className="absolute top-40 right-20 w-8 h-8 bg-indigo-400/20 rounded-full animate-bounce-slow" />
            </div>

            {/* Main content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <div className={`transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                    {/* Glowing badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm mb-8 animate-fade-in-up">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                        <span className="text-sm font-medium text-purple-200">Welcome to the Future</span>
                    </div>

                    {/* Main heading with gradient text */}
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent animate-gradient-x leading-tight">
                        Welcome to
                    </h1>

                    {/* Hyperliquid Animation */}
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


                    {/* Subtitle with typewriter effect */}
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-300 leading-relaxed font-light">
                        Experience the next generation of web development with stunning visuals,
                        smooth animations, and cutting-edge technology.
                    </p>

                    {/* CTA buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                            <span className="relative z-10">Get Started</span>
                        </button>

                        <button className="group px-8 py-4 border-2 border-purple-400/50 rounded-full font-semibold text-purple-200 backdrop-blur-sm transition-all duration-300 hover:border-purple-400 hover:bg-purple-400/10 hover:scale-105">
                            <span className="group-hover:text-white transition-colors duration-300">Learn More</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom fade overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />

            {/* Floating elements */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse" />
                </div>
            </div>
        </section>
    );
}