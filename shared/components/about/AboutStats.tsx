"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Target, Zap, Infinity, Sparkles } from "lucide-react";

const STATS = [
    { value: "40+", label: "Creatives, Designers and Developers" },
    { value: "20+", label: "Award Nominations" }
];

const VALUES = [
    {
        title: "LOVE",
        desc: "We have love for the work that we do and also for the wonderful team that we work with.",
        icon: <Heart size={24} className="text-white" />
    },
    {
        title: "IMPACT",
        desc: "No project is incidental. We believe every project that we work on is meant to make a positive impact.",
        icon: <Target size={24} className="text-white" />
    },
    {
        title: "HUNGER",
        desc: "RELENTLESS PURSUIT FOR KNOWLEDGE. Learning never ends. Especially not for us. Our hunger for knowledge is constant and relentless.",
        icon: <Zap size={24} className="text-white" />
    },
    {
        title: "IMPOSSIBILITY MENTALITY",
        desc: "Impossible does not exist. When we set a goal, we set our minds to see it actualized.",
        icon: <Infinity size={24} className="text-white" />
    },
    {
        title: "SPIRITUALITY",
        desc: "We do extraordinary work because we live by extraordinary ideals.",
        icon: <Sparkles size={24} className="text-white" />
    }
];

export default function AboutStats() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        // Stats reveal
        gsap.from(".stat-item", {
            scale: 0.9,
            opacity: 0,
            duration: 1,
            stagger: 0.3,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            }
        });

        // Values reveal
        gsap.from(".value-item", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".values-grid",
                start: "top 85%",
            }
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="team" className="w-full py-32 bg-brand-orange-500 text-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 mb-40">
                    {STATS.map((stat, index) => (
                        <div key={index} className="stat-item flex flex-col gap-6">
                            <span className="text-7xl md:text-9xl font-black tracking-tighter">
                                {stat.value}
                            </span>
                            <p
                                className="text-xl md:text-3xl font-bold leading-tight max-w-xs uppercase tracking-wider"
                                style={{ color: '#ffffff' }}
                            >
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Values Header */}
                <div className="border-t border-white/20 pt-20 mb-20">
                    <span
                        className="text-xs font-mono uppercase tracking-[0.4em] mb-6 block text-center md:text-left"
                        style={{ color: '#ffffff' }}
                    >
                        Our Values
                    </span>
                    <h2
                        className="text-5xl md:text-8xl font-black tracking-tight text-center md:text-left"
                        style={{ color: '#ffffff' }}
                    >
                        Rules that we play by
                    </h2>
                </div>

                {/* Values Grid */}
                <div className="values-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {VALUES.map((value, idx) => (
                        <div key={idx} className="value-item group">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                                    {value.icon}
                                </div>
                                <div className="h-[1px] flex-1 bg-white/20 group-hover:bg-white transition-colors duration-300"></div>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tighter">
                                {value.title}
                            </h3>
                            <p
                                className="leading-relaxed font-medium"
                                style={{ color: '#ffffff' }}
                            >
                                {value.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
