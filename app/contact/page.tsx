import ContactHero from "@/shared/components/contact/ContactHero";
import ContactContent from "@/shared/components/contact/ContactContent";
import CTA from "@/shared/components/home/CTA";

export const metadata = {
    title: "Contact Us | Takeout Media",
    description: "Get in touch with Takeout Media for your next creative project. We're always open to new ideas and collaborations.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <ContactHero />
            <ContactContent />
            <CTA />
        </main>
    );
}
