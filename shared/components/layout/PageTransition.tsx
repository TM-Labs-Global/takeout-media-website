"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const columnsRef = useRef<(HTMLDivElement | null)[]>([]);
    const pathname = usePathname();

    useEffect(() => {
        // 1. Ensure the overlay is visible before starting
        if (containerRef.current) {
            containerRef.current.style.display = "flex";
        }

        // 2. Reset columns to be covering the screen (yPercent: 0)
        gsap.set(columnsRef.current, {
            yPercent: 0,
        });

        // 3. The GSAP Animation: Slide the columns UP out of the screen
        const tl = gsap.timeline({
            onComplete: () => {
                // Hide the container after animation so it doesn't block clicks
                if (containerRef.current) {
                    containerRef.current.style.display = "none";
                }
            },
        });

        tl.to(columnsRef.current, {
            yPercent: -100,      // Move them 100% up out of the screen
            stagger: 0.1,        // The "wave" delay between each column
            duration: 1.2,       // How long the animation takes
            ease: "power4.inOut", // The smooth, premium curve
            delay: 0.1,          // A tiny pause after the new page "loads"
        });

        return () => {
            tl.kill();
        };
    }, [pathname]);

    return (
        <>
            {/* FULL SCREEN OVERLAY CONTAINER */}
            <div
                ref={containerRef}
                className="fixed inset-0 z-[9999] pointer-events-none flex"
            >
                {/* 5 COLUMNS - exactly 20% width each */}
                {[...Array(5)].map((_, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            if (el) columnsRef.current[index] = el;
                        }}
                        className="w-1/5 h-full"
                        style={{
                            // Using Brand Black for a cinematic feel
                            backgroundColor: '#111013',
                            // Subtle brightness variation so the wave effect is slightly visible
                            filter: `brightness(${1 + (index * 0.03)})`,
                            // Micro-border for a high-tech "laboratory" look
                            borderRight: '1px solid rgba(255,255,255,0.02)'
                        }}
                    />
                ))}
            </div>

            {/* PAGE CONTENT */}
            {children}
        </>
    );
};

export default PageTransition;
