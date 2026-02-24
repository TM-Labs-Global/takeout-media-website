"use client";

import Link from "next/link";
import { SOCIAL_LINKS } from "@/shared/constants/social-links";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: "Facebook", href: SOCIAL_LINKS.facebook },
        { name: "YouTube", href: SOCIAL_LINKS.youtube },
        { name: "Instagram", href: SOCIAL_LINKS.instagram },
        { name: "LinkedIn", href: SOCIAL_LINKS.linkedin }
    ];

    return (
        <footer className="w-full py-12 bg-white text-brand-black-950 border-t border-neutral-100">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Social Links */}
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        {socialLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-bold text-neutral-600 hover:text-brand-orange-500 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="text-sm font-medium text-neutral-500">
                        © {currentYear} Takeout Media A <a href="https://technologymedia.global/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange-500 transition-colors underline underline-offset-4">TM Global</a> Company. All rights reserved.
                    </div>

                </div>
            </div>
        </footer>
    );
}
