"use client";

import ContactHero from "@/shared/components/contact/ContactHero";
import ContactContent from "@/shared/components/contact/ContactContent";
import CTA from "@/shared/components/home/CTA";

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <ContactHero />
            <ContactContent />
            <CTA />
        </main>
    );
}
