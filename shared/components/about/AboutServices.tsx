"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const SERVICES = [
    { label: "STRATEGY", title: "Brand Strategy & Art Direction" },
    { label: "PRODUCTION", title: "Typography & Video Production" },
    { label: "DESIGN", title: "UX/UI Design & Website/App Design" },
    { label: "CAMPAIGNS", title: "Promo Campaigns & Content Creation" }
];

export default function AboutServices() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from(".service-item", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="w-full py-24 md:py-32 bg-brand-black-950 text-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left side headline */}
                    <div className="lg:col-span-5">
                        <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/90 mb-6 block">
                            CAPABILITIES
                        </span>
                        <div className="w-full h-[1px] bg-white/10 mb-8"></div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">
                            We help to create strategies, design & development.
                        </h2>
                    </div>

                    {/* Right side services grid */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-24">
                        {SERVICES.map((service, index) => (
                            <div key={index} className="service-item group">
                                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/90 mb-4 block">
                                    {service.label}
                                </span>
                                <div className="w-full h-[1px] bg-white/10 mb-6 transition-colors group-hover:bg-brand-orange-500/50"></div>
                                <h3 className="text-2xl font-black tracking-tight leading-snug group-hover:text-brand-orange-500 transition-colors">
                                    {service.title}
                                </h3>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
