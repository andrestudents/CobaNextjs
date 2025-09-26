'use client';

import { useState, useEffect } from 'react';

export default function AboutPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
        <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 mt-10">
            {/* Dynamic background gradient */}
            <div
                className="absolute inset-0 opacity-30 transition-all duration-500 ease-out"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                        rgba(139, 92, 246, 0.3) 0%, 
                        rgba(6, 182, 212, 0.2) 25%, 
                        rgba(16, 185, 129, 0.1) 50%, 
                        transparent 70%)`
                }}
            />

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 border border-purple-400/20 rounded-full animate-spin-slow" />
                <div className="absolute bottom-32 right-16 w-24 h-24 border-2 border-cyan-400/30 transform rotate-45 animate-pulse-slow" />
                <div className="absolute top-1/2 left-8 w-16 h-16 bg-gradient-to-r from-purple-400/10 to-cyan-400/10 rounded-lg animate-float" />
                <div className="absolute top-40 right-20 w-12 h-12 bg-emerald-400/20 rounded-full animate-bounce-slow" />

                {/* Floating particles */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400/60 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Header section */}
                    <div className={`transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>
                        <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500/10 border border-purple-500/30 backdrop-blur-xl mb-8 animate-pulse-slow">
                            <div className="w-3 h-3 bg-purple-400 rounded-full mr-3 animate-ping" />
                            <span className="text-sm font-semibold text-purple-200 uppercase tracking-wide">
                                About Us
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-gradient-x leading-tight">
                            ABOUT
                        </h1>
                    </div>

                    {/* Content section */}
                    <div className={`transform transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>
                        <div className="glass rounded-3xl p-8 md:p-12 mb-8">
                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 font-light">
                                We are innovators, dreamers, and builders creating the next generation
                                of digital experiences. Our mission is to blend cutting-edge technology
                                with beautiful design to craft solutions that inspire and empower.
                            </p>

                            <div className="grid md:grid-cols-3 gap-8 mt-12">
                                {[
                                    {
                                        icon: "🚀",
                                        title: "Innovation First",
                                        description: "Pushing boundaries with the latest technologies and creative solutions"
                                    },
                                    {
                                        icon: "🎨",
                                        title: "Design Excellence",
                                        description: "Creating beautiful, intuitive experiences that users love"
                                    },
                                    {
                                        icon: "⚡",
                                        title: "Performance Focused",
                                        description: "Building fast, reliable, and scalable applications"
                                    }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:-translate-y-2 card-hover"
                                        style={{ animationDelay: `${500 + index * 200}ms` }}
                                    >
                                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Team section */}
                    <div className={`transform transition-all duration-1000 ease-out delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-animated">
                            Our Vision
                        </h2>
                        <div className="glass rounded-3xl p-8 md:p-12">
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                                To democratize access to premium digital experiences and empower
                                creators worldwide with tools that amplify their potential. We believe
                                technology should be beautiful, accessible, and transformative.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 mt-8">
                                {['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React'].map((tech, index) => (
                                    <div
                                        key={tech}
                                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                                        style={{ animationDelay: `${900 + index * 100}ms` }}
                                    >
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA section */}
                    <div className={`transform transition-all duration-1000 ease-out delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
                            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 btn-glow">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                                <span className="relative z-10 flex items-center">
                                    Join Our Journey
                                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </span>
                            </button>

                            <button className="group px-8 py-4 border-2 border-purple-400/50 rounded-full font-semibold text-purple-200 backdrop-blur-sm transition-all duration-300 hover:border-purple-400 hover:bg-purple-400/10 hover:scale-105">
                                <span className="group-hover:text-white transition-colors duration-300 flex items-center">
                                    Contact Us
                                    <span className="ml-2 group-hover:rotate-12 transition-transform duration-300">✨</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom fade overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
        </main>
    );
}