"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function AboutBrainstormingImage() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".brainstorm-img-reveal", {
            scale: 1.05,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full bg-brand-black-950 overflow-hidden">
            <div className="relative w-full aspect-[21/9] md:aspect-[3/1] lg:aspect-[4/1]">
                <Image
                    src="/Images/Staff brainstorming together.jpg"
                    alt="Takeout Media Team Brainstorming"
                    fill
                    className="brainstorm-img-reveal object-cover object-center brightness-90"
                />

                {/* Overlay for cinematic depth to match the other team image */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-orange-500/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black-950/40 to-transparent"></div>
            </div>
        </section>
    );
}
