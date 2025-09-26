"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const linkClass = (path: string) =>
        pathname === path
            ? "relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-cyan-400 after:to-purple-400 after:rounded-full"
            : "relative text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-purple-400 after:rounded-full after:transition-all after:duration-300 hover:after:w-full hover:after:left-0";

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-gray-900/95 backdrop-blur-md shadow-lg shadow-purple-500/10"
                : "bg-gray-900/90 backdrop-blur-sm"
            }`}>
            <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
                {/* Logo */}
                <div className="group cursor-pointer">
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                        🚀 MyProject
                    </div>
                    <div className="h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-300 group-hover:w-full"></div>
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-8 text-lg font-medium">
                    <li>
                        <Link href="/about" className={linkClass("/about")}>
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link href="/whitepaper" className={linkClass("/whitepaper")}>
                            WHITEPAPER
                        </Link>
                    </li>
                    <li>
                        <Link href="/docs" className={linkClass("/docs")}>
                            DOCS
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Bottom border gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        </nav>
    );
}