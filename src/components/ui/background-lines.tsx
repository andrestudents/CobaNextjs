"use client";

import React from "react";
import { motion } from "framer-motion";

export const BackgroundLines = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="relative flex flex-col items-center justify-center overflow-hidden bg-neutral-950 w-full h-screen">
            {/* Animated Lines */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                            duration: 8 + i * 0.2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"
                        style={{ left: `${i * 5}%` }}
                    />
                ))}
            </div>

            {/* Konten di atas background */}
            <div className="relative z-10">{children}</div>
        </div>
    );
};
