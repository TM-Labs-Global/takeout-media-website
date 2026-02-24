"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Showcase() {
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

            tl.from(".showcase-item", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
            });
        },
        { scope: containerRef }
    );

    return (
        <section ref={containerRef} className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* Item 1: Image (Top-Left) */}
                <div className="showcase-item relative h-[500px] lg:h-[600px] group overflow-hidden">
                    <Image
                        src="/Images/insights-move-the-needle.png"
                        alt="Insights move the needle"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                {/* Item 2: Text (Top-Right) */}
                <div className="showcase-item relative h-[500px] lg:h-[600px] p-12 md:p-16 flex flex-col justify-center items-start text-white overflow-hidden group">
                    <Image
                        src="/Images/pink-and-orange-background.png"
                        alt="Background"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 z-0"
                    />
                    <div className="relative z-10">
                        <span className="text-xs font-mono uppercase tracking-[0.2em] mb-6 block opacity-90 mix-blend-plus-lighter">
                            Capabilities
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 drop-shadow-sm">
                            Insights move the needle.
                        </h2>
                    </div>
                </div>

                {/* Item 3: Text (Bottom-Left) */}
                <div className="showcase-item relative h-[500px] lg:h-[600px] p-12 md:p-16 flex flex-col justify-center items-start text-white overflow-hidden group">
                    <Image
                        src="/Images/pink-and-orange-background.png"
                        alt="Background"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 z-0"
                    />
                    <div className="relative z-10">
                        <span className="text-xs font-mono uppercase tracking-[0.2em] mb-6 block opacity-90 mix-blend-plus-lighter">
                            Showcase
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 drop-shadow-sm">
                            Go from mediocre to industry leader.
                        </h2>
                    </div>
                </div>

                {/* Item 4: Image (Bottom-Right) */}
                <div className="showcase-item relative h-[500px] lg:h-[600px] group overflow-hidden">
                    <Image
                        src="/Images/go-from-mediocre-to-industry-leader.png"
                        alt="Go from mediocre to industry leader"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

            </div>
        </section>
    );
}
