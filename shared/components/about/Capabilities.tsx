"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const CAPABILITIES = [
    {
        id: "01",
        title: "Research & Measurement",
        desc: "Leveraging data and analytical tools to optimize the brand’s marketing campaigns and improve the quality of operations for ground-breaking growth."
    },
    {
        id: "02",
        title: "Brand Identity",
        desc: "Positioning brands to achieve hallmark recognition and differentiation among competition, and increasing brand equity value."
    },
    {
        id: "03",
        title: "Brand Strategy",
        desc: "Developing a cohesive strategy that defines and refines the essence of your brand through data-driven driven frameworks and airtight communication pillars."
    },
    {
        id: "04",
        title: "Content Marketing",
        desc: "Amplifying brand visibility and increasing conversion through content tailored to provide effective and efficient solutions."
    }
];

export default function Capabilities() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from(".capability-card", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
                    <div>
                        <span className="text-xs font-mono uppercase tracking-[0.4em] mb-6 block" style={{ color: '#ffffff' }}>
                            Capabilities
                        </span>
                        <div className="w-full h-[1px] bg-white/10 mb-8"></div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-8">
                            We help to create strategies, design & development.
                        </h2>
                        <p className="text-lg text-white leading-relaxed max-w-xl">
                            Through our vertical knowledge and diverse capabilities, we work with our clients to craft and promote ideas that dare convention, author transformations pivotal to the growth of clients, and shape societal perceptions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-16 lg:gap-y-20">
                        {CAPABILITIES.map((cap) => (
                            <div key={cap.id} className="capability-card group pt-0">
                                <span className="font-mono text-xs mb-8 block uppercase tracking-widest" style={{ color: '#ffffff' }}>
                                    {cap.id}
                                </span>
                                <div className="w-full h-[1px] bg-white/10 mb-8"></div>
                                <h3 className="text-2xl font-black mb-6 group-hover:text-brand-orange-500 transition-colors">
                                    {cap.title}
                                </h3>
                                <p className="text-white leading-relaxed text-sm">
                                    {cap.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
