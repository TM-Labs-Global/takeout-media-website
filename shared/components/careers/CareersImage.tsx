"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function CareersImage() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".reveal-img", {
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
        <section ref={containerRef} className="w-full bg-[#111013] overflow-hidden">
            <div className="relative w-full aspect-[21/9] md:aspect-[3/1] lg:aspect-[4/1]">
                <Image
                    src="/Images/Staff designing.jpg"
                    alt="Takeout Media Team at work"
                    fill
                    className="reveal-img object-cover object-center brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111013] to-transparent opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-orange-500/10 to-transparent"></div>
            </div>
        </section>
    );
}
