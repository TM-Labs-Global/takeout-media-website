"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scan, MessageSquareText, LayoutGrid, Fingerprint, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const SERVICES = [
    {
        icon: <Scan strokeWidth={1.5} size={32} />,
        title: "Media",
        description: "Telling compelling stories tailored to different media channels that resonate with key stakeholders."
    },
    {
        icon: <MessageSquareText strokeWidth={1.5} size={32} />,
        title: "Digital & Technology",
        description: "Enabling progressive brands achieve success across customer experience, innovation and profitability."
    },
    {
        icon: <LayoutGrid strokeWidth={1.5} size={32} />,
        title: "Capacity & Skill Development",
        description: "We empower private, public and governmental organizations' internal team to build vertical and horizontal developmental skills."
    },
    {
        icon: <Fingerprint strokeWidth={1.5} size={32} />,
        title: "Brand Identity",
        description: "Positioning brands to achieve hallmark recognition and differentiation among competition, and increasing brand equity value."
    }
];

export default function Services() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom center",
                    toggleActions: "play none none reverse",
                },
            });

            tl.from(".service-header", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            })
                .from(".service-item", {
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                }, "-=0.4");

        },
        { scope: containerRef }
    );

    return (
        <section
            ref={containerRef}
            className="relative w-full py-24 lg:py-32 bg-brand-cream text-brand-black-950 overflow-hidden"
        >
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column: Header */}
                    <div className="service-header flex flex-col items-start">
                        <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 mb-6 block">
                            Services
                        </span>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
                            Data. Strategy.<br />Design.
                        </h2>
                    </div>

                    {/* Right Column: Grid */}
                    <div className="flex flex-col gap-12">
                        <p className="service-header text-lg md:text-xl text-brand-black-900 font-medium leading-relaxed max-w-xl">
                            We live by two ideals: data and strategy. We pour countless hours into research and employ innovative technology to develop strategies that produce measurable results for our clients.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-4">
                            {SERVICES.map((service, index) => (
                                <div key={index} className="service-item flex flex-col gap-4 group">
                                    <div className="text-brand-black-400 group-hover:text-brand-orange-500 transition-colors duration-300">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-black-950">
                                        {service.title}
                                    </h3>
                                    <p className="text-brand-black-900/80 font-medium leading-relaxed text-sm md:text-base">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
