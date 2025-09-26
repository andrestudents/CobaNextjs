"use client";

import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export function BackgroundLinesDemo() {
    return (
        <BackgroundLines>
            <div className="text-center text-white">
                <h1 className="text-5xl font-bold text-white mb-4">
                    Sanjana Airlines ✈️
                </h1>
                <p className="text-gray-300 text-lg">
                    Flowing background lines for a premium look.
                </p>
                <img src="blob_green.gif" alt="" />
                <h1 className="text-4xl font-bold mb-4">Hello Next.js 🚀</h1>
                <p className="text-lg">Belajar Next.js + Tailwind + TypeScript</p>
            </div>
        </BackgroundLines>
    );
}
