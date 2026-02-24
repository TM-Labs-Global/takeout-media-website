"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SOCIAL_LINKS } from "@/shared/constants/social-links";

export default function SocialSidebar() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".social-item", {
            x: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            delay: 1,
        });
    }, { scope: containerRef });

    return (
        <div
            ref={containerRef}
            className="fixed right-6 top-0 bottom-0 hidden lg:flex flex-col justify-center items-center z-40"
        >
            <div className="flex flex-col items-center gap-6">
                {/* Icons - New Top Position */}
                <div className="flex flex-col gap-6 social-item">
                    <Link
                        href={SOCIAL_LINKS.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-brand-orange-500 transition-colors duration-300"
                    >
                        <Youtube size={18} />
                    </Link>
                    <Link
                        href={SOCIAL_LINKS.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-brand-orange-500 transition-colors duration-300"
                    >
                        <Instagram size={18} />
                    </Link>
                    <Link
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-brand-orange-500 transition-colors duration-300"
                    >
                        <Linkedin size={18} />
                    </Link>
                    <Link
                        href={SOCIAL_LINKS.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-brand-orange-500 transition-colors duration-300"
                    >
                        <Facebook size={18} />
                    </Link>
                </div>

                {/* Line decoration */}
                <div className="w-[1px] h-12 bg-white/20 social-item"></div>

                {/* Text rotated vertical - New Bottom Position */}
                <div className="[writing-mode:vertical-rl] text-[10px] font-mono tracking-[0.3em] text-white/50 uppercase social-item whitespace-nowrap rotate-180">
                    Follow Us
                </div>
            </div>
        </div>
    );
}
