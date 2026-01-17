"use client";

import React, { useRef, useState, useEffect } from "react";

export default function Spotlight({
    className = "",
    fill = "white",
}: {
    className?: string;
    fill?: string;
}) {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden ${className}`}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${fill}15, transparent 40%)`,
                }}
            />
            <div className="relative">{/* Content */}</div>
        </div>
    );
}

// Actually, this simple spotlight is more of a "card spotlight".
// For the HERO background spotlight, we want a big sweeping light.
// Let's create a specialized "HeroSpotlight" instead that is just absolute positioned.

export function HeroSpotlight() {
    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[-50%] left-[-20%] w-[100vw] h-[100vw] bg-[radial-gradient(circle,rgba(253,144,0,0.08)_0%,rgba(0,0,0,0)_60%)] blur-[100px] animate-pulse"></div>
            <div className="absolute top-[-20%] right-[-20%] w-[80vw] h-[80vw] bg-[radial-gradient(circle,rgba(60,20,255,0.05)_0%,rgba(0,0,0,0)_60%)] blur-[120px]"></div>
        </div>
    )
}
