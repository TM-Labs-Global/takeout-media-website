"use client";

import { useRef } from "react";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            gsap.from(".contact-fade-up", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        },
        { scope: sectionRef }
    );

    return (
        <section
            ref={sectionRef}
            className="w-full bg-brand-cream text-brand-black-950"
        >
            {/* Top Section: Map and Info Boxes */}
            <div className="flex flex-col lg:flex-row min-h-[500px]">
                {/* Embedded Map */}
                <div className="w-full lg:w-1/2 h-[400px] lg:h-auto bg-neutral-200">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8273673756854!2d7.464676475681754!3d9.079450388277258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0af9383637e1%3A0xc47e33f3c9e69123!2sHatlab%20Place!5e0!3m2!1sen!2sng!4v1714150000000!5m2!1sen!2sng"
                        className="w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* Info Column 1: Get in Touch */}
                <div className="w-full lg:w-1/4 p-12 lg:p-16 flex flex-col justify-center bg-white border-b lg:border-b-0 lg:border-r border-neutral-100">
                    <div className="mb-8 p-3 bg-neutral-50 rounded-full w-fit">
                        <MessageSquare className="text-brand-orange-500" size={24} />
                    </div>
                    <h3 className="text-2xl font-black mb-6">Get in touch</h3>
                    <div className="space-y-6">
                        <div>
                            <p className="text-neutral-500 text-sm mb-1">Work and general inquiries</p>
                            <p className="text-xl font-bold">+234 818 432 4791</p>
                        </div>
                        <div>
                            <p className="text-neutral-500 text-sm mb-1">Assistance hours:</p>
                            <p className="text-sm">Monday – Friday</p>
                            <p className="text-sm">10 am to 5 pm GMT+1</p>
                        </div>
                    </div>
                </div>

                {/* Info Column 2: Post Address */}
                <div className="w-full lg:w-1/4 p-12 lg:p-16 flex flex-col justify-center bg-[#FDF1E5]">
                    <div className="mb-8 p-3 bg-white/50 rounded-full w-fit">
                        <Mail className="text-brand-orange-500" size={24} />
                    </div>
                    <h3 className="text-2xl font-black mb-6">Post address</h3>
                    <address className="not-italic text-lg leading-relaxed flex flex-col gap-1">
                        <span>36 Sokode Crescent,</span>
                        <span>Hatlab Place,</span>
                        <span>Wuse Zone 5,</span>
                        <span>Abuja</span>
                    </address>
                </div>
            </div>

            {/* Bottom Section: Form and Email */}
            <div className="container mx-auto px-6 py-24 md:py-32 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

                    {/* Contact Form */}
                    <div className="contact-fade-up">
                        <span className="text-xs font-mono uppercase tracking-[0.4em] text-neutral-500 mb-6 block">
                            Say Hello
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12 text-[#111013]">
                            Request a free quote
                        </h2>

                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-4">
                                <label className="text-sm font-bold block">Your name</label>
                                <input
                                    type="text"
                                    className="w-full bg-[#E8D9C5]/30 border-none rounded-xl p-5 focus:ring-2 focus:ring-brand-orange-500 outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-sm font-bold block">Your email</label>
                                <input
                                    type="email"
                                    className="w-full bg-[#E8D9C5]/30 border-none rounded-xl p-5 focus:ring-2 focus:ring-brand-orange-500 outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-sm font-bold block">Subject</label>
                                <input
                                    type="text"
                                    className="w-full bg-[#E8D9C5]/30 border-none rounded-xl p-5 focus:ring-2 focus:ring-brand-orange-500 outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-sm font-bold block">Your message (optional)</label>
                                <textarea
                                    rows={6}
                                    className="w-full bg-[#E8D9C5]/30 border-none rounded-xl p-5 focus:ring-2 focus:ring-brand-orange-500 outline-none transition-all resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-brand-orange-500 text-white font-bold py-4 px-12 rounded-xl hover:bg-brand-orange-600 transition-all transform hover:scale-105"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Email and Sidebar Info */}
                    <div className="lg:pt-24 contact-fade-up">
                        <div className="mb-16">
                            <span className="text-xs font-mono uppercase tracking-[0.4em] text-neutral-500 mb-6 block">
                                Get in Touch
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 text-[#111013]">
                                Email us
                            </h2>
                            <p className="text-neutral-500 mb-4 font-medium">For project inquiries only:</p>
                            <a
                                href="mailto:info@takeoutmedia.xyz"
                                className="text-2xl md:text-3xl font-black text-[#111013] hover:text-brand-orange-500 transition-colors"
                            >
                                info@takeoutmedia.xyz
                            </a>
                        </div>

                        {/* Social Links / Side Info would go here if needed, 
                            as per reference image's 'Follow Us' vertical text layout style elsewhere */}
                    </div>

                </div>
            </div>
        </section>
    );
}
