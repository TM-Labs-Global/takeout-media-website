"use client";

import AboutHero from "@/shared/components/about/AboutHero";
import Capabilities from "@/shared/components/about/Capabilities";
import AboutTeamImage from "@/shared/components/about/AboutTeamImage";
import AboutServices from "@/shared/components/about/AboutServices";
import AboutStats from "@/shared/components/about/AboutStats";
import AboutBrainstormingImage from "@/shared/components/about/AboutBrainstormingImage";
import CTA from "@/shared/components/home/CTA";

export default function AboutPage() {
    return (
        <main className="w-full">
            <AboutHero />
            <Capabilities />
            <AboutTeamImage />
            <AboutServices />
            <AboutStats />
            <AboutBrainstormingImage />
            <CTA />
        </main>
    );
}
