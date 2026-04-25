"use client";

import { useRef, useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function CTA() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            gsap.to(".cta-content", {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });
        },
        { scope: sectionRef }
    );

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('idle');

        const formData = new FormData(e.currentTarget);
        const data = { email: formData.get('email') };

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            ref={sectionRef}
            className="relative w-full py-24 lg:py-32 overflow-hidden bg-brand-orange-500"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 flex">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="flex-1 border-r border-white/10 h-full bg-gradient-to-b from-[#E91A86] via-[#F7932B] to-[#F7932B]"
                    />
                ))}
            </div>

            <div className="container relative z-10 mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
                    <div className="cta-content flex flex-col items-start text-white opacity-0 translate-y-8">
                        <span className="text-xs font-mono uppercase tracking-[0.4em] mb-8 block opacity-90">
                            Newsletter
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">
                            Be a part of our<br />success story.
                        </h2>
                    </div>

                    <div className="cta-content w-full md:w-auto opacity-0 translate-y-8">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col sm:flex-row gap-4 w-full md:min-w-[400px] lg:min-w-[500px]"
                        >
                            <input
                                name="email"
                                type="email"
                                required
                                placeholder="Email address"
                                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-white text-brand-orange-500 font-bold px-8 py-4 rounded-xl hover:bg-neutral-100 transition-all transform active:scale-95 disabled:opacity-50"
                            >
                                {isSubmitting ? '...' : 'Subscribe'}
                            </button>
                        </form>
                        {status === 'success' && (
                            <p className="text-white font-bold mt-4">Subscribed successfully!</p>
                        )}
                        {status === 'error' && (
                            <p className="text-white/80 font-bold mt-4 text-sm">Failed to subscribe. Please try again.</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
