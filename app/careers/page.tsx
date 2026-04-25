"use client";

import CareersHero from "@/shared/components/careers/CareersHero";
import CareersImage from "@/shared/components/careers/CareersImage";
import JobOpenings from "@/shared/components/careers/JobOpenings";
import CTA from "@/shared/components/home/CTA";

export default function CareersPage() {
    return (
        <main className="min-h-screen">
            <CareersHero />
            <CareersImage />
            <JobOpenings />
            <CTA />
        </main>
    );
}
