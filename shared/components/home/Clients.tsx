"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const CLIENT_LOGOS = [
    { name: "Dangote", src: "/client-logos/favpng_logo-dangote-refinery-dangote-group-kano-lagos.png" },
    { name: "Uber", src: "/client-logos/Uber.png" },
    { name: "Ecobank", src: "/client-logos/Ecobank_logo.png" },
    { name: "Cosgrove", src: "/client-logos/Cosgrove-New-Logo.png" },
    { name: "TotalEnergies", src: "/client-logos/logo_totalenergies-1.png" },
    { name: "SEC Nigeria", src: "/client-logos/sec-logo-2019.png" },
    { name: "Centenary City", src: "/client-logos/CentenaryCityLogo.png.jpg" },
    { name: "NNPC", src: "/client-logos/nigerian-national-petroleum-corporation-nnpc-vector-logo-1.png" },
    { name: "Hared", src: "/client-logos/Hared.png" },
    { name: "SON", src: "/client-logos/SON-LOGO-2.jpeg" },
    { name: "Affinity", src: "/client-logos/affinity-logo.png" },
    { name: "Ingene", src: "/client-logos/ingene-Full-Colour-Png.png" },
];

export default function Clients() {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // Header animation
            gsap.from(headerRef.current, {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 95%",
                    toggleActions: "play none none none",
                    // Ensure it refreshes if layout shifts
                    invalidateOnRefresh: true,
                }
            });

            // Logos animation
            const logos = gridRef.current?.querySelectorAll(".client-logo");
            if (logos && logos.length > 0) {
                // Set initial state to avoid flash of un-animated content
                gsap.set(logos, { opacity: 0, y: 40, scale: 0.9 });

                gsap.to(logos, {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: {
                        each: 0.05,
                        grid: "auto",
                        from: "start"
                    },
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: gridRef.current,
                        // More permissive start for mobile
                        start: "top 90%",
                        toggleActions: "play none none none",
                        onEnter: () => ScrollTrigger.refresh(),
                    },
                });
            }

            // Force a refresh after component mounts and initial images likely load
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
            id="partners"
            className="w-full py-20 md:py-32 bg-brand-cream text-brand-black-950"
        >
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header Section */}
                <div ref={headerRef} className="text-center mb-16 md:mb-24">
                    <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-neutral-500 mb-4 md:mb-6 block">
                        Our Partners
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 md:mb-8 text-[#111013] leading-tight">
                        Powering Innovation Together.
                    </h2>
                    <div className="w-16 md:w-24 h-1 bg-brand-orange-500 mx-auto rounded-full opacity-80" />
                </div>

                {/* Grid Section */}
                <div
                    ref={gridRef}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 items-stretch"
                >
                    {CLIENT_LOGOS.map((logo, index) => (
                        <div
                            key={index}
                            className="client-logo group relative flex items-center justify-center p-4 md:p-8 bg-white/60 hover:bg-white rounded-2xl md:rounded-3xl border border-white/80 hover:border-brand-orange-300/50 shadow-sm hover:shadow-xl hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-500 ease-out cursor-default overflow-hidden aspect-square"
                        >
                            {/* Card Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out flex items-center justify-center">
                                <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    fill
                                    className="object-contain p-1 md:p-2"
                                    sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 25vw, 15vw"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
