"use client";

import { useRef } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function CTA() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            gsap.from(".cta-content", {
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        },
        { scope: sectionRef }
    );

    return (
        <section
            ref={sectionRef}
            className="relative w-full py-24 md:py-32 overflow-hidden"
        >
            {/* Background Grid Pattern with Gradient */}
            <div className="absolute inset-0 z-0 flex">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="flex-1 border-r border-white/10 h-full bg-gradient-to-b from-[#E91A86] via-[#F7932B] to-[#F7932B]"
                    />
                ))}
            </div>

            <div className="container relative z-10 mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
                    <div className="cta-content flex flex-col items-start text-white">
                        <span className="text-xs font-mono uppercase tracking-[0.4em] mb-8 block opacity-90">
                            Newsletter
                        </span>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] max-w-4xl">
                            Get actionable<br className="hidden md:block" />
                            marketing insights<br className="hidden md:block" />
                            for your business & career
                        </h2>
                    </div>

                    <div className="cta-content w-full md:w-auto">
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex flex-col sm:flex-row gap-4 w-full md:min-w-[400px] lg:min-w-[500px]"
                        >
                            <div className="relative flex-1">
                                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/50">
                                    <Mail size={20} />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-white/10 border border-white/20 rounded-2xl py-5 pl-14 pr-6 text-white placeholder:text-white/40 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                                    required
                                />
                            </div>
                            <button className="group relative flex items-center justify-center gap-3 bg-[#E91A86] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-pink-600 transition-all transform hover:scale-105 shadow-xl whitespace-nowrap">
                                Subscribe
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
