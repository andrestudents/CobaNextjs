'use client';

import { useState, useEffect } from 'react';

export default function WhitepaperPage() {
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

    const whitepaperSections = [
        {
            title: "Executive Summary",
            icon: "📋",
            content: "A comprehensive overview of our innovative approach to modern web development and digital transformation."
        },
        {
            title: "Technical Architecture",
            icon: "⚙️",
            content: "Deep dive into our scalable, secure, and performant technology stack and infrastructure design."
        },
        {
            title: "Market Analysis",
            icon: "📊",
            content: "Current market trends, opportunities, and our strategic positioning in the digital landscape."
        },
        {
            title: "Implementation Roadmap",
            icon: "🗺️",
            content: "Detailed timeline and milestones for project delivery and long-term sustainability goals."
        }
    ];

    return (
        <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 mt-10">
            {/* Dynamic background gradient */}
            <div
                className="absolute inset-0 opacity-30 transition-all duration-500 ease-out"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                        rgba(59, 130, 246, 0.3) 0%, 
                        rgba(139, 92, 246, 0.2) 25%, 
                        rgba(6, 182, 212, 0.1) 50%, 
                        transparent 70%)`
                }}
            />

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 border border-blue-400/20 rounded-lg animate-spin-slow" />
                <div className="absolute bottom-32 right-16 w-24 h-24 border-2 border-purple-400/30 transform rotate-45 animate-pulse-slow" />
                <div className="absolute top-1/2 left-8 w-16 h-16 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full animate-float" />
                <div className="absolute top-40 right-20 w-12 h-12 bg-cyan-400/20 rounded-lg animate-bounce-slow" />

                {/* Floating document elements */}
                {['§', '¶', '©', '®', '™'].map((symbol, i) => (
                    <div
                        key={symbol}
                        className="absolute text-blue-400/30 text-3xl font-serif animate-float"
                        style={{
                            left: `${15 + i * 18}%`,
                            top: `${15 + (i * 12) % 70}%`,
                            animationDelay: `${i * 0.7}s`,
                            animationDuration: `${4 + Math.random() * 3}s`
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
                        <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-xl mb-8 animate-pulse-slow">
                            <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-ping" />
                            <span className="text-sm font-semibold text-blue-200 uppercase tracking-wide">
                                Technical Document
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x leading-tight">
                            WHITEPAPER
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                            A comprehensive technical analysis and strategic overview of our innovative
                            digital solutions and future-focused development approach.
                        </p>
                    </div>

                    {/* Stats section */}
                    <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>
                        {[
                            { number: "50+", label: "Pages", icon: "📄" },
                            { number: "15", label: "Sections", icon: "📚" },
                            { number: "100+", label: "References", icon: "🔗" },
                            { number: "2024", label: "Edition", icon: "📅" }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="text-center p-6 glass rounded-2xl border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:-translate-y-2"
                                style={{ animationDelay: `${500 + index * 100}ms` }}
                            >
                                <div className="text-3xl mb-2">{stat.icon}</div>
                                <div className="text-3xl font-bold text-gradient-animated mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-gray-400 uppercase tracking-wide">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation tabs */}
                    <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 ease-out delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>
                        {whitepaperSections.map((section, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveSection(index)}
                                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeSection === index
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                <span className="mr-2 text-xl">{section.icon}</span>
                                {section.title}
                            </button>
                        ))}
                    </div>

                    {/* Content section */}
                    <div className={`glass rounded-3xl p-8 md:p-12 mb-12 transform transition-all duration-1000 ease-out delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>
                        <div className="grid md:grid-cols-3 gap-12">
                            <div className="md:col-span-2">
                                <div className="flex items-center mb-6">
                                    <span className="text-5xl mr-4">{whitepaperSections[activeSection].icon}</span>
                                    <h2 className="text-4xl font-bold text-gradient-animated">
                                        {whitepaperSections[activeSection].title}
                                    </h2>
                                </div>

                                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                    {whitepaperSections[activeSection].content}
                                </p>

                                {/* Content preview */}
                                <div className="space-y-6">
                                    <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                                        <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                                            Key Insights
                                        </h4>
                                        <p className="text-gray-400 leading-relaxed">
                                            Detailed analysis of current market conditions, technological
                                            trends, and strategic opportunities for innovation and growth.
                                        </p>
                                    </div>

                                    <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                                        <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                                            Methodolgy
                                        </h4>
                                        <p className="text-gray-400 leading-relaxed">
                                            Research-backed approach combining quantitative analysis with
                                            qualitative insights from industry experts and stakeholders.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {/* Table of Contents */}
                                <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-white/10">
                                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                                        <span className="text-2xl mr-2">📋</span>
                                        Table of Contents
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            'Introduction & Overview',
                                            'Market Research Findings',
                                            'Technical Specifications',
                                            'Implementation Strategy',
                                            'Risk Assessment',
                                            'Future Projections',
                                            'Conclusion & Next Steps'
                                        ].map((item, index) => (
                                            <div key={item} className="flex items-center text-sm text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer group">
                                                <span className="text-blue-400 mr-3 group-hover:scale-125 transition-transform duration-300">
                                                    {index + 1}.
                                                </span>
                                                <span className="group-hover:translate-x-1 transition-transform duration-300">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Download info */}
                                <div className="p-6 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-xl border border-white/10">
                                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                                        <span className="text-2xl mr-2">📁</span>
                                        Document Info
                                    </h3>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex justify-between text-gray-400">
                                            <span>Version:</span>
                                            <span className="text-white">v2.0</span>
                                        </div>
                                        <div className="flex justify-between text-gray-400">
                                            <span>Size:</span>
                                            <span className="text-white">2.5 MB</span>
                                        </div>
                                        <div className="flex justify-between text-gray-400">
                                            <span>Last Updated:</span>
                                            <span className="text-white">Dec 2024</span>
                                        </div>
                                        <div className="flex justify-between text-gray-400">
                                            <span>Format:</span>
                                            <span className="text-white">PDF</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA section */}
                    <div className={`text-center transform transition-all duration-1000 ease-out delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>
                        <h3 className="text-3xl font-bold mb-6 text-gradient-animated">
                            Download Full Whitepaper
                        </h3>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            Get instant access to the complete technical document with detailed
                            analysis, research findings, and implementation guidelines.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 btn-glow">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                                <span className="relative z-10 flex items-center">
                                    Download PDF
                                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">📄</span>
                                </span>
                            </button>

                            <button className="group px-8 py-4 border-2 border-blue-400/50 rounded-full font-semibold text-blue-200 backdrop-blur-sm transition-all duration-300 hover:border-blue-400 hover:bg-blue-400/10 hover:scale-105">
                                <span className="group-hover:text-white transition-colors duration-300 flex items-center">
                                    Request Summary
                                    <span className="ml-2 group-hover:rotate-12 transition-transform duration-300">📧</span>
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