"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NAV_LINKS } from "@/shared/constants/nav-links";
import { Menu, X, ChevronDown } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Navbar() {
    const headerRef = useRef<HTMLElement>(null);
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    useGSAP(
        () => {
            // Navbar Show/Hide on Scroll
            const showAnim = gsap.from(headerRef.current, {
                yPercent: -100,
                paused: true,
                duration: 0.4,
                ease: "power2.out",
            }).progress(1);

            ScrollTrigger.create({
                start: "top top",
                end: "max",
                onUpdate: (self) => {
                    if (isMobileMenuOpen) return;
                    if (self.direction === -1) {
                        showAnim.play();
                    } else {
                        showAnim.reverse();
                    }
                },
            });

            // Desktop Links Hover
            const links = gsap.utils.toArray<HTMLElement>(".nav-link-item");
            links.forEach((link) => {
                const number = link.querySelector(".nav-number");
                const text = link.querySelector(".nav-text");

                link.addEventListener("mouseenter", () => {
                    gsap.to(number, { y: -2, color: "#F7922A", duration: 0.3, ease: "power2.out" });
                    gsap.to(text, { color: "#ffffff", duration: 0.3 });
                });

                link.addEventListener("mouseleave", () => {
                    const isActive = link.getAttribute("data-active") === "true";
                    if (!isActive) {
                        gsap.to(number, { y: 0, color: "#F7922A", duration: 0.3, ease: "power2.out" });
                        gsap.to(text, { color: "#9ca3af", duration: 0.3 });
                    } else {
                        gsap.to(number, { y: 0, duration: 0.3 });
                    }
                });
            });
        },
        { scope: headerRef, dependencies: [isMobileMenuOpen] }
    );

    return (
        <>
            <header
                ref={headerRef}
                className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-500 h-24 ${isMobileMenuOpen ? "bg-black" : "bg-black/80 backdrop-blur-md border-b border-white/5"
                    }`}
            >
                <div className="relative w-full h-full px-6 md:px-12 flex items-center justify-between z-[110]">
                    {/* Left: Button & Logo */}
                    <div className="flex items-center gap-6">
                        <button
                            className="w-10 h-10 rounded-full border border-white/20 flex flex-col items-center justify-center gap-1.5 hover:bg-white/10 transition-colors group z-[120]"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <X size={20} className="text-white" />
                            ) : (
                                <>
                                    <span className="w-5 h-[1.5px] bg-white group-hover:bg-brand-orange-500 transition-colors"></span>
                                    <span className="w-3 h-[1.5px] bg-white group-hover:bg-brand-orange-500 transition-colors self-start ml-2.5"></span>
                                </>
                            )}
                        </button>

                        <Link href="/" className="relative w-40 h-10 md:w-48 md:h-12 block group z-[120]" onClick={() => setIsMobileMenuOpen(false)}>
                            <Image
                                src="/Images/TM_Logo-5.png"
                                alt="Takeout Media"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Center/Right Nav */}
                    <nav className="hidden lg:flex items-center gap-10">
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href;
                            const hasSublinks = link.sublinks && link.sublinks.length > 0;

                            return (
                                <div
                                    key={link.name}
                                    className="relative group/nav-item"
                                    onMouseEnter={() => hasSublinks && setActiveDropdown(link.name)}
                                    onMouseLeave={() => hasSublinks && setActiveDropdown(null)}
                                >
                                    <Link
                                        href={link.href}
                                        className="nav-link-item group relative flex flex-col items-start"
                                        data-active={isActive}
                                    >
                                        <span className="nav-number text-xs font-mono text-brand-orange-500 mb-0.5 tracking-widest block transition-transform">
                                            {link.number}
                                        </span>
                                        <span className={`nav-text text-base font-medium tracking-wider transition-colors duration-300 flex items-center gap-1 ${isActive ? "text-white" : "text-neutral-400"}`}>
                                            {link.name}
                                            {hasSublinks && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                                        </span>
                                    </Link>

                                    {/* Desktop Dropdown */}
                                    {hasSublinks && (
                                        <div className={`absolute top-full left-0 pt-4 transition-all duration-300 ${activeDropdown === link.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                                            <div className="bg-brand-black-900 border border-white/10 rounded-xl overflow-hidden min-w-[200px] shadow-2xl backdrop-blur-xl">
                                                {link.sublinks?.map((sub) => (
                                                    <Link
                                                        key={sub.name}
                                                        href={sub.href}
                                                        className="block px-6 py-4 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-all"
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </nav>

                    <div className="lg:hidden w-10" />
                </div>
            </header>

            {/* FULL SCREEN OVERLAY */}
            <div
                className={`fixed inset-0 bg-black z-[95] flex flex-col pt-32 px-6 md:px-12 transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-10"
                    }`}
            >
                <div className="flex flex-col gap-2 md:gap-4 max-w-2xl w-full py-6">
                    {NAV_LINKS.map((link) => {
                        const hasSublinks = link.sublinks && link.sublinks.length > 0;
                        return (
                            <div key={link.name} className="flex flex-col">
                                <Link
                                    href={link.href}
                                    onClick={() => !hasSublinks && setIsMobileMenuOpen(false)}
                                    className="group flex items-start gap-4 py-3 border-b border-white/5"
                                >
                                    <span className="text-brand-orange-500 font-mono text-[10px] md:text-xs tracking-tighter pt-1.5 opacity-80">
                                        {link.number}
                                    </span>
                                    <span className="text-3xl md:text-6xl font-black text-white group-hover:text-brand-orange-500 transition-colors tracking-tighter uppercase leading-[0.9]">
                                        {link.name}
                                    </span>
                                </Link>

                                {hasSublinks && (
                                    <div className="flex flex-col pl-8 mt-2 mb-4 gap-4">
                                        {link.sublinks?.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="text-lg font-bold text-neutral-500 hover:text-brand-orange-500 transition-colors"
                                            >
                                                — {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Secondary Info/Socials in Menu */}
                <div className={`mt-auto pb-12 transition-all delay-300 duration-700 ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <p className="text-neutral-500 font-mono text-xs uppercase tracking-[0.3em] mb-4">Socials</p>
                    <div className="flex gap-6 text-white text-sm font-medium">
                        <a href="#" className="hover:text-brand-orange-500 transition-colors">Instagram</a>
                        <a href="#" className="hover:text-brand-orange-500 transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-brand-orange-500 transition-colors">Twitter</a>
                    </div>
                </div>
            </div>
        </>
    );
}
