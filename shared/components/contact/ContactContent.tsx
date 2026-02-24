"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const OFFICE_LOCATIONS = [
    {
        city: "Abuja",
        address: "36, Sokode Crescent, Hatlab Place, Wuse Zone 5, Abuja",
        phone: "+234 818 432 4791",
        hours: "Monday – Friday\n9 am to 6 pm GMT+1"
    },
    {
        city: "Lagos",
        address: "44, Ogunlana drive, Surulere, Lagos.",
        phone: "+234 818 432 4791",
        hours: "Monday – Friday\n9 am to 6 pm GMT+1"
    },
    {
        city: "London",
        address: "71-75 Shelton Street, Covent Garden, London, WC2H 9JQ",
    }
];

export default function ContactContent() {
    const sectionRef = useRef<HTMLElement>(null);
    const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

    useGSAP(
        () => {
            gsap.from(".fade-up", {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
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
        <section ref={sectionRef} className="w-full bg-[#111013] text-white">

            {/* Top Layout: Map + Offices (Home Page Layout Style) */}
            <div className="flex flex-col lg:flex-row border-b border-white/5">
                <div className="w-full lg:w-1/2 h-[400px] lg:h-auto overflow-hidden border-r border-white/5">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8273673756854!2d7.464676475681754!3d9.079450388277258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0af9383637e1%3A0xc47e33f3c9e69123!2sHatlab%20Place!5e0!3m2!1sen!2sng!4v1714150000000!5m2!1sen!2sng"
                        className="w-full h-full border-0 grayscale invert opacity-70 contrast-125"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>

                <div className="w-full lg:w-1/2 px-8 lg:px-16 py-20 bg-black/20">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
                        <div className="fade-up">
                            <h2 className="text-4xl md:text-5xl font-black mb-4">Our offices</h2>
                            <p className="text-white/50 font-medium mb-12">Schedule your visit with us.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {OFFICE_LOCATIONS.map((office, idx) => (
                                    <div key={idx} className="space-y-4">
                                        <h4 className="text-xl font-black">{office.city}</h4>
                                        <p className="text-white/60 text-sm leading-relaxed max-w-[240px]">
                                            {office.address}
                                        </p>
                                        {office.phone && (
                                            <p className="text-sm font-bold">Call us: {office.phone}</p>
                                        )}
                                        {office.hours && (
                                            <div className="pt-2">
                                                <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Assistance hours</p>
                                                <p className="text-xs text-white/50 whitespace-pre-line">{office.hours}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Form (Screenshot Style) */}
            <div className="container mx-auto px-6 py-32 max-w-7xl relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* Left Side: Header */}
                    <div className="lg:col-span-4 fade-up">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
                            Work inquiries
                        </h2>
                        <p className="text-white/60 text-lg leading-relaxed">
                            Fill in this form with your inquiry and we will be in touch.
                        </p>
                    </div>

                    {/* Right Side: Form */}
                    <div className="lg:col-span-8 fade-up">
                        <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); setFormStatus('success'); }}>
                            <div className="space-y-4">
                                <label className="text-xs font-medium text-white/60 block px-1">Your name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-white/5 border-none rounded-md p-6 focus:ring-1 focus:ring-white/20 outline-none transition-all placeholder:text-white/10"
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-xs font-medium text-white/60 block px-1">Your email</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-white/5 border-none rounded-md p-6 focus:ring-1 focus:ring-white/20 outline-none transition-all placeholder:text-white/10"
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-xs font-medium text-white/60 block px-1">Subject</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border-none rounded-md p-6 focus:ring-1 focus:ring-white/20 outline-none transition-all placeholder:text-white/10"
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-xs font-medium text-white/60 block px-1">Your message (optional)</label>
                                <textarea
                                    rows={8}
                                    className="w-full bg-white/5 border-none rounded-md p-6 focus:ring-1 focus:ring-white/20 outline-none transition-all resize-none placeholder:text-white/10"
                                ></textarea>
                            </div>

                            <div className="flex items-center gap-8">
                                <button
                                    type="submit"
                                    className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-12 rounded-lg transition-all transform active:scale-95"
                                >
                                    {formStatus === 'success' ? 'Message Sent' : 'Submit'}
                                </button>

                                {formStatus === 'success' && (
                                    <p className="text-brand-orange-500 font-mono text-xs uppercase tracking-widest animate-pulse">
                                        Thank you! We'll reply soon.
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
