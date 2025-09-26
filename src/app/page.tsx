'use client';

import { useEffect, useState } from 'react';
import Hero from "./hero";
import { BackgroundLinesDemo } from "../components/BackgroundLinesDemo";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            background: `
              radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%)
            `
          }}
        />

        {/* Floating geometric shapes with parallax */}
        <div
          className="absolute top-20 left-10 w-32 h-32 border border-purple-400/10 rounded-full animate-spin-very-slow"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div
          className="absolute top-60 right-20 w-24 h-24 border-2 border-blue-400/15 transform rotate-45"
          style={{ transform: `translateY(${scrollY * -0.2}px) rotate(45deg)` }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-purple-400/5 to-blue-400/5 rounded-lg"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        />
      </div>

      {/* Hero Section */}
      {/* <section className="relative z-10">
        <Hero />
      </section> */}

      {/* Transition element */}


      {/* BackgroundLinesDemo Section */}
      <section className="relative z-10 mt-10">
        <BackgroundLinesDemo />
      </section>

      {/* Additional sections for more content */}
      {/* <section className="relative z-10 py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Built for the Future
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Our platform combines cutting-edge technology with beautiful design to deliver
              an unparalleled user experience that adapts to your needs.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  icon: "⚡",
                  title: "Lightning Fast",
                  description: "Optimized performance for the modern web"
                },
                {
                  icon: "🎨",
                  title: "Beautiful Design",
                  description: "Carefully crafted interfaces that users love"
                },
                {
                  icon: "🔒",
                  title: "Secure & Reliable",
                  description: "Enterprise-grade security and reliability"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}