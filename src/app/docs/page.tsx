'use client';

import { useState, useEffect } from 'react';

export default function DocsPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState(0);
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

    const docSections = [
        {
            title: "Getting Started",
            icon: "🚀",
            content: "Quick setup guide to get your project running in minutes with our modern tech stack."
        },
        {
            title: "Components",
            icon: "🧩",
            content: "Explore our comprehensive library of reusable components built with React and TypeScript."
        },
        {
            title: "API Reference",
            icon: "📚",
            content: "Complete API documentation with examples and best practices for integration."
        },
        {
            title: "Deployment",
            icon: "🌐",
            content: "Step-by-step deployment guides for various platforms and environments."
        }
    ];

    return (
        <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900/20 to-slate-900 mt-10">
            {/* Dynamic background gradient */}
            <div
                className="absolute inset-0 opacity-30 transition-all duration-500 ease-out"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                        rgba(16, 185, 129, 0.3) 0%, 
                        rgba(6, 182, 212, 0.2) 25%, 
                        rgba(139, 92, 246, 0.1) 50%, 
                        transparent 70%)`
                }}
            />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 grid-bg opacity-10" />

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 border border-emerald-400/20 rounded-lg animate-spin-slow" />
                <div className="absolute bottom-32 right-16 w-24 h-24 border-2 border-cyan-400/30 rounded-full animate-pulse-slow" />
                <div className="absolute top-1/2 right-8 w-16 h-16 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 transform rotate-45 animate-float" />
                <div className="absolute top-40 left-20 w-12 h-12 bg-purple-400/20 rounded-full animate-bounce-slow" />

                {/* Code-like floating elements */}
                {['</', '/>', '{}', '[]', '()'].map((symbol, i) => (
                    <div
                        key={symbol}
                        className="absolute text-emerald-400/30 text-2xl font-mono animate-float"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${20 + (i * 10) % 60}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${4 + Math.random() * 2}s`
                        }}
                    >
                        {symbol}
                    </div>
                ))}
            </div>

            <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header section */}
                    <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>
                        <div className="inline-flex items-center px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-xl mb-8 animate-pulse-slow">
                            <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-ping" />
                            <span className="text-sm font-semibold text-emerald-200 uppercase tracking-wide">
                                Documentation
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x leading-tight">
                            DOCS
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                            Comprehensive documentation to help you build amazing applications
                            with our modern development stack.
                        </p>
                    </div>

                    {/* Navigation tabs */}
                    <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>
                        {docSections.map((section, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveSection(index)}
                                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeSection === index
                                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/25'
                                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                <span className="mr-2 text-xl">{section.icon}</span>
                                {section.title}
                            </button>
                        ))}
                    </div>

                    {/* Content section */}
                    <div className={`glass rounded-3xl p-8 md:p-12 transform transition-all duration-1000 ease-out delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center mb-6">
                                    <span className="text-5xl mr-4">{docSections[activeSection].icon}</span>
                                    <h2 className="text-4xl font-bold text-gradient-animated">
                                        {docSections[activeSection].title}
                                    </h2>
                                </div>

                                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                    {docSections[activeSection].content}
                                </p>

                                <div className="space-y-4">
                                    {['Quick Start Guide', 'Advanced Configuration', 'Best Practices', 'Troubleshooting'].map((item, index) => (
                                        <div
                                            key={item}
                                            className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-emerald-400/30 transition-all duration-300 hover:bg-white/10 cursor-pointer group"
                                            style={{ animationDelay: `${700 + index * 100}ms` }}
                                        >
                                            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300" />
                                            <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                                                {item}
                                            </span>
                                            <span className="ml-auto text-emerald-400 group-hover:translate-x-1 transition-transform duration-300">
                                                →
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                {/* Code preview mockup */}
                                <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                                    <div className="flex items-center px-4 py-3 bg-gray-800/50 border-b border-white/10">
                                        <div className="flex space-x-2">
                                            <div className="w-3 h-3 bg-red-400 rounded-full" />
                                            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                                            <div className="w-3 h-3 bg-green-400 rounded-full" />
                                        </div>
                                        <div className="ml-4 text-sm text-gray-400 font-mono">
                                            example.tsx
                                        </div>
                                    </div>
                                    <div className="p-6 font-mono text-sm leading-relaxed">
                                        <div className="text-purple-400">import</div>
                                        <div className="text-cyan-400 ml-4">React from 'react';</div>
                                        <div className="text-gray-500 mt-4">// Example component</div>
                                        <div className="text-emerald-400 mt-2">function</div>
                                        <div className="text-yellow-400 ml-4">MyComponent() {`{`}</div>
                                        <div className="text-blue-400 ml-8">return (</div>
                                        <div className="text-gray-300 ml-12">&lt;div&gt;Hello World&lt;/div&gt;</div>
                                        <div className="text-blue-400 ml-8">);</div>
                                        <div className="text-yellow-400 ml-4">{`}`}</div>
                                    </div>
                                </div>

                                {/* Floating code elements */}
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-400/20 rounded-lg animate-float" />
                                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-400/20 rounded-full animate-bounce-slow" />
                            </div>
                        </div>
                    </div>

                    {/* Quick links section */}
                    <div className={`grid md:grid-cols-3 gap-6 mt-12 transform transition-all duration-1000 ease-out delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>
                        {[
                            {
                                title: "API Playground",
                                icon: "🎮",
                                description: "Interactive testing environment",
                                color: "from-purple-600 to-pink-600"
                            },
                            {
                                title: "Code Examples",
                                icon: "📖",
                                description: "Ready-to-use code snippets",
                                color: "from-emerald-600 to-cyan-600"
                            },
                            {
                                title: "Video Tutorials",
                                icon: "📹",
                                description: "Step-by-step video guides",
                                color: "from-blue-600 to-indigo-600"
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="group p-6 glass rounded-2xl border border-white/10 hover:border-emerald-400/30 transition-all duration-300 hover:-translate-y-2 card-hover cursor-pointer"
                                style={{ animationDelay: `${900 + index * 200}ms` }}
                            >
                                <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <span className="text-2xl">{item.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                                <div className="mt-4 flex items-center text-emerald-400 group-hover:translate-x-2 transition-transform duration-300">
                                    <span className="text-sm font-medium">Explore</span>
                                    <span className="ml-2">→</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA section */}
                    <div className={`text-center mt-16 transform transition-all duration-1000 ease-out delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>
                        <h3 className="text-3xl font-bold mb-6 text-gradient-animated">
                            Ready to Start Building?
                        </h3>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 btn-glow">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-cyan-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                                <span className="relative z-10 flex items-center">
                                    Get Started Now
                                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">🚀</span>
                                </span>
                            </button>

                            <button className="group px-8 py-4 border-2 border-emerald-400/50 rounded-full font-semibold text-emerald-200 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-400/10 hover:scale-105">
                                <span className="group-hover:text-white transition-colors duration-300 flex items-center">
                                    Download PDF
                                    <span className="ml-2 group-hover:rotate-12 transition-transform duration-300">📄</span>
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