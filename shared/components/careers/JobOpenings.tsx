"use client";

import { useRef } from "react";
import { ArrowUpRight, MapPin, Clock, Briefcase } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const JOBS = [
    {
        title: "Senior Art Director",
        department: "Creative Production",
        location: "Abuja / Remote",
        type: "Full-time",
        link: "/contact"
    },
    {
        title: "Senior UI/UX Designer",
        department: "Digital Experience",
        location: "Lagos / Remote",
        type: "Full-time",
        link: "/contact"
    },
    {
        title: "Full-Stack Developer (Next.js)",
        department: "Engineering",
        location: "Remote",
        type: "Contract",
        link: "/contact"
    },
    {
        title: "Content Strategist",
        department: "Marketing",
        location: "Lagos",
        type: "Full-time",
        link: "/contact"
    }
];

export default function JobOpenings() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            gsap.from(".job-card", {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });
        },
        { scope: sectionRef }
    );

    return (
        <section ref={sectionRef} className="w-full bg-[#111013] py-20 md:py-24">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12 md:mb-16">
                    <div className="max-w-2xl">
                        <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40 mb-6 block">
                            OPEN OPPORTUNITIES
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
                            Build the future with us
                        </h2>
                    </div>
                    <div className="flex items-center gap-4 text-white/60 font-mono text-xs uppercase tracking-widest">
                        <div className="w-2 h-2 rounded-full bg-brand-orange-500 animate-pulse"></div>
                        Currently Hiring
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {JOBS.map((job, idx) => (
                        <Link
                            key={idx}
                            href={job.link}
                            className="job-card group relative block bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 p-8 md:p-12 rounded-[2rem] transition-all duration-500 overflow-hidden"
                        >
                            {/* Hover Decorative Element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange-500/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <span className="text-[10px] font-mono uppercase tracking-widest text-brand-orange-500 border border-brand-orange-500/20 px-3 py-1 rounded-full">
                                            {job.department}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl md:text-4xl font-black text-white group-hover:text-brand-orange-500 transition-colors">
                                        {job.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-6 text-white/40 text-sm">
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} />
                                            {job.location}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Briefcase size={16} />
                                            {job.type}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6">
                                    <span className="hidden md:block text-xs font-mono uppercase tracking-widest text-white/20 group-hover:text-white/60 transition-colors">
                                        Apply Now
                                    </span>
                                    <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-orange-500 group-hover:border-brand-orange-500 transition-all duration-500 group-hover:rotate-45">
                                        <ArrowUpRight className="text-white" size={24} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-white/40 mb-8 max-w-xl mx-auto">
                        Don't see a role that fits? Send us your portfolio anyway - we're always looking for exceptional talent.
                    </p>
                    <a href="mailto:careers@takeoutmedia.xyz" className="text-brand-orange-500 font-bold hover:underline underline-offset-8">
                        careers@takeoutmedia.xyz
                    </a>
                </div>
            </div>
        </section>
    );
}
