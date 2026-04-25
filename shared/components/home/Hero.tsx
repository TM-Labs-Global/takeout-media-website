"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            // Intro animation - only runs once on mount
            const tl = gsap.timeline({
                defaults: { ease: "power4.out" },
            });

            tl.to(".hero-bg", {
                scale: 1,
                autoAlpha: 1,
                duration: 2,
                ease: "power2.out",
            })
                .to(".hero-title-line", {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.15,
                }, "-=1.2")
                .to(".hero-sub", {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                }, "-=0.8")
                .to(".hero-btn", {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                }, "-=0.6")
                .to(".scroll-indicator", {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                }, "-=0.4");

            // Subtle floating animation for the scroll indicator
            gsap.to(".scroll-indicator", {
                y: 10,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
                delay: 2.5,
            });

            // Parallax on the background image only
            gsap.to(".hero-bg", {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });
        },
        { scope: containerRef }
    );

    return (
        <section
            ref={containerRef}
            className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-brand-black-950"
        >
            {/* Background Image */}
            <div className="hero-bg absolute inset-0 z-0 opacity-0 scale-110 will-change-transform">
                <Image
                    src="/Images/go-from-mediocre-to-industry-leader.png"
                    alt="Takeout Media Hero Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black-950 via-brand-black-950/20 to-transparent" />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content Container with Controlled Spacing */}
            <div className="relative z-10 container mx-auto px-6 text-center max-w-7xl flex flex-col items-center gap-10 md:gap-12">

                {/* 1. Header */}
                <h1 className="text-6xl md:text-8xl lg:text-[11.5rem] font-black tracking-tighter text-white leading-[0.9] m-0">
                    <div className="overflow-hidden pb-1">
                        <div className="hero-title-line opacity-0 translate-y-8">We craft digital</div>
                    </div>
                    <div className="overflow-hidden pb-1">
                        <div className="hero-title-line opacity-0 translate-y-8">
                            experiences that{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-500 to-brand-orange-400">
                                matter
                            </span>
                        </div>
                    </div>
                </h1>

                {/* 2. Sub-text (Cleared default margins) */}
                <p className="hero-sub text-xl md:text-2xl text-neutral-300 max-w-4xl leading-relaxed m-0 font-medium opacity-0 translate-y-8">
                    Transforming brands through data-driven strategies, innovative design,
                    and compelling storytelling that resonates with your audience.
                </p>

                {/* 3. Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 m-0">
                    <Link
                        href="/contact"
                        className="hero-btn group relative px-10 py-5 rounded-full bg-brand-orange-500 text-white font-bold text-lg hover:bg-brand-orange-600 transition-all transform hover:scale-105 shadow-xl whitespace-nowrap overflow-hidden opacity-0 translate-y-8"
                    >
                        <span className="relative z-10">Get in Touch</span>
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 translate-y-8">
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-mono">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-brand-orange-500 to-transparent"></div>
            </div>
        </section>
    );
}
