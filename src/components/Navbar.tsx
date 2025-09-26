"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const linkClass = (path: string) =>
        pathname === path
            ? "text-blue-400 font-semibold"
            : "hover:text-blue-400";

    return (
        <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-gray-800">
            <div className="text-2xl font-bold">🚀 MyProject</div>

            <ul className="flex space-x-8 text-lg">
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
        </nav>
    );
}
