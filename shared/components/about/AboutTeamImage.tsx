"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function AboutTeamImage() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".team-img-reveal", {
            scale: 1.1,
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
                    src="/Images/team memeber brainstorming.jpg"
                    alt="Takeout Media Team"
                    fill
                    className="team-img-reveal object-cover object-center brightness-90"
                    priority
                />

                {/* Overlay for cinematic depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black-950/40 to-transparent"></div>
            </div>
        </section>
    );
}
