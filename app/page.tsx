import Hero from "@/shared/components/home/Hero";
import Services from "@/shared/components/home/Services";
import Showcase from "@/shared/components/home/Showcase";
import Approach from "@/shared/components/home/Approach";
import Subsidiaries from "@/shared/components/home/Subsidiaries";
import Clients from "@/shared/components/home/Clients";
import Contact from "@/shared/components/home/Contact";
import CTA from "@/shared/components/home/CTA";

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Showcase />
            <Approach />
            <Clients />
            <Subsidiaries />
            <Contact />
            <CTA />
        </>
    );
}