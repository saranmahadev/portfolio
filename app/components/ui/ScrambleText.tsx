"use client";

import { useEffect, useState } from "react";

const SCRAMBLE_CHARS = "!<>-_\\/[]{}=+*^?#░▒▓";

/* Text that decrypts into place, scramble style */
export default function ScrambleText({
    text,
    delay = 0,
    enabled = true,
    className = "",
}: {
    text: string;
    delay?: number;
    enabled?: boolean;
    className?: string;
}) {
    const [display, setDisplay] = useState(enabled ? "" : text);

    useEffect(() => {
        if (!enabled) {
            setDisplay(text);
            return;
        }
        let interval: ReturnType<typeof setInterval> | undefined;
        let frame = 0;
        const start = setTimeout(() => {
            interval = setInterval(() => {
                frame++;
                const revealed = frame * 0.9;
                setDisplay(
                    text
                        .split("")
                        .map((char, i) => {
                            if (char === " " || i < revealed) return char;
                            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
                        })
                        .join("")
                );
                if (revealed >= text.length) clearInterval(interval);
            }, 30);
        }, delay);
        return () => {
            clearTimeout(start);
            if (interval) clearInterval(interval);
        };
    }, [text, delay, enabled]);

    return <span className={className}>{display || " "}</span>;
}
