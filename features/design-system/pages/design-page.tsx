import { Actions, DesignShowcase, Hero } from "../components";

export function HomePage() {
    return (
        <div className="flex flex-col min-h-screen bg-[var(--color-bg-page)] font-sans">
            {/* Hero Section */}
            <section className="w-full bg-[var(--color-bg-elevated)] border-b border-[var(--color-border-subtle)]">
                <div className="w-full max-w-7xl mx-auto py-24 px-6 md:px-12 lg:px-24">
                    <Hero />
                    <Actions />
                </div>
            </section>

            {/* Design Showcase Section */}
            <section className="w-full flex-1 bg-[var(--color-bg-page)]">
                <div className="w-full max-w-7xl mx-auto py-24 px-6 md:px-12 lg:px-24">
                    <DesignShowcase />
                </div>
            </section>

            {/* Footer Placeholder for visual completion */}
            <footer className="w-full py-12 border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-muted)]">
                <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center text-caption text-[var(--color-text-tertiary)]">
                    © 2024 Juyonna Travels Design System. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
