"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const SUBSIDIARIES = [
    {
        name: "TM Labs",
        logo: "/client-logos/Product-TM-Labs-Logo-05.png"
    },
    {
        name: "TM Africa",
        logo: "/client-logos/TM-Africa-Orange-01.png"
    },
    {
        name: "Ingene Studios",
        logo: "/client-logos/ingene-Full-Colour-Png.png"
    }
];

export default function Subsidiaries() {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                    onEnter: () => ScrollTrigger.refresh(),
                },
            });

            // Set initial states to prevent flash
            gsap.set(textRef.current, { x: -50, opacity: 0 });
            gsap.set(".subsidiary-logo", { y: 30, opacity: 0 });

            tl.to(textRef.current, {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
            })
                .to(".subsidiary-logo", {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                }, "-=0.6");

            // Force a refresh after component mounts
            const timer = setTimeout(() => {
                ScrollTrigger.refresh();
            }, 1000);

            return () => clearTimeout(timer);
        },
        { scope: sectionRef }
    );

    return (
        <section
            ref={sectionRef}
            className="w-full py-20 md:py-32 bg-brand-cream text-brand-black-950 overflow-hidden"
        >
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left side: Text */}
                    <div ref={textRef} className="max-w-xl">
                        <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 mb-6 block">
                            Our Subsidiaries
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-8 text-[#111013]">
                            We have built some credible organizations along the way.
                        </h2>
                    </div>

                    {/* Right side: Logos (Simplified) */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 items-center">
                        {SUBSIDIARIES.map((item, index) => (
                            <div
                                key={index}
                                className="subsidiary-logo relative w-full aspect-[3/2]"
                            >
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 20vw, 15vw"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
