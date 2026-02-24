"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Instagram, Linkedin, Twitter, Youtube, Facebook } from "lucide-react";

export default function ContactHero() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".hero-tag", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" })
            .from(".hero-title", { y: 30, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.5")
            .from(".hero-desc", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.7");
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-[70vh] flex items-center overflow-hidden"
        >
            {/* Background Grid Pattern with Gradient (Matching Screenshot) */}
            <div className="absolute inset-0 z-0 flex">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="flex-1 border-r border-black/5 h-full bg-gradient-to-b from-[#E91A86] via-[#f88147] to-[#F7932B]"
                    />
                ))}
            </div>

            <div className="container relative z-10 mx-auto px-6 max-w-7xl pt-32 pb-20 flex justify-between items-end">
                <div className="max-w-4xl text-white">
                    <span className="hero-tag text-[10px] font-mono uppercase tracking-[0.4em] mb-6 block" style={{ color: '#ffffff' }}>
                        REACH OUT TO US
                    </span>
                    <h1 className="hero-title text-7xl md:text-9xl font-black tracking-tight leading-[1] mb-8">
                        Contact Us
                    </h1>
                    <p
                        className="hero-desc text-lg md:text-xl font-medium"
                        style={{ color: '#ffffff' }}
                    >
                        Schedule a visit with us or make inquiries.
                    </p>
                </div>

            </div>
        </section>
    );
}
