"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const ACCORDION_ITEMS = [
    {
        title: "Website & Mobile App Design",
        content: "We create intuitive, user-centric digital experiences that drive engagement and conversion."
    },
    {
        title: "Motion Graphics & Animation",
        content: "Bringing brands to life through dynamic motion storytelling and visual effects."
    },
    {
        title: "User Experience",
        content: "Research-backed design decisions that ensure your product is not just usable, but delightful."
    }
];

export default function Approach() {
    const containerRef = useRef<HTMLElement>(null);
    const [openIndex, setOpenIndex] = useState<number | null>(0);

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

            tl.from(".approach-left", {
                x: -50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            })
                .from(".approach-right", {
                    x: 50,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                }, "-=0.8");
        },
        { scope: containerRef }
    );

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section ref={containerRef} className="w-full py-24 lg:py-32 bg-white text-brand-black-950 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column */}
                    <div className="approach-left flex flex-col gap-12">
                        <div>
                            <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 mb-6 block">
                                Our Approach
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
                                We have developed data-driven systems & strategies.
                            </h2>
                            <div className="relative inline-block">
                                <span className="absolute -top-3 -left-3 bg-brand-black-950 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                                    0%
                                </span>
                                <span className="font-bold text-lg">Media & Advertising</span>
                            </div>
                        </div>

                        <div className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-lg overflow-hidden">
                            <Image
                                src="/Images/Founder.jpg"
                                alt="Founder"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="approach-right flex flex-col gap-16 lg:pt-24">
                        {/* Accordion */}
                        <div className="flex flex-col border-t border-neutral-200">
                            {ACCORDION_ITEMS.map((item, index) => (
                                <div key={index} className="border-b border-neutral-200">
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full py-6 flex items-center justify-between text-left group"
                                    >
                                        <span className="text-xl font-bold group-hover:text-brand-orange-500 transition-colors">
                                            {item.title}
                                        </span>
                                        <span className="text-brand-orange-500 transition-transform duration-300">
                                            {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                        </span>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-40 opacity-100 mb-6" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="text-brand-black-900/80 font-medium leading-relaxed max-w-lg">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Team Image */}
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                            <Image
                                src="/Images/Staff designing.jpg"
                                alt="Team Members"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
