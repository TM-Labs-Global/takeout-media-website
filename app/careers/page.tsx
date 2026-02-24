import CareersHero from "@/shared/components/careers/CareersHero";
import CareersImage from "@/shared/components/careers/CareersImage";
import JobOpenings from "@/shared/components/careers/JobOpenings";
import CTA from "@/shared/components/home/CTA";

export const metadata = {
    title: "Careers | Join Takeout Media",
    description: "Join a team of thinkers, makers, and innovators at Takeout Media. Explore our current job openings and help us redefine digital boundaries.",
};

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
