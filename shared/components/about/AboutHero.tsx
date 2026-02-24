"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function AboutHero() {
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
            {/* Background Grid Pattern with Gradient (Matching CTA) */}
            <div className="absolute inset-0 z-0 flex">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="flex-1 border-r border-white/10 h-full bg-gradient-to-b from-[#E91A86] via-[#F7932B] to-[#F7932B]"
                    />
                ))}
            </div>

            <div className="container relative z-10 mx-auto px-6 max-w-7xl pt-32 pb-20">
                <div className="max-w-4xl text-white">
                    <span className="hero-tag text-xs font-mono uppercase tracking-[0.4em] mb-6 block text-white">
                        PRODUCTION
                    </span>
                    <h1 className="hero-title text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tight leading-[0.9] mb-12">
                        About Us
                    </h1>
                    <p
                        className="hero-desc text-lg md:text-xl leading-relaxed max-w-2xl font-medium"
                        style={{ color: '#ffffff' }}
                    >
                        Through our vertical knowledge and diverse capabilities, we work with our clients to craft and promote ideas that dare convention…
                    </p>
                </div>
            </div>
        </section>
    );
}
