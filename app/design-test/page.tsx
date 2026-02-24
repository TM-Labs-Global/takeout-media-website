export default function DesignSystemTest() {
    return (
        <main className="min-h-screen p-24 bg-[var(--bg-page)] text-[var(--text-base)] font-sans">
            <div className="space-y-12 max-w-4xl mx-auto">

                {/* Header */}
                <section className="space-y-4">
                    <h1 className="text-5xl font-bold">Takeout Media Design System</h1>
                    <p className="text-xl text-[var(--text-secondary)]">Verification of Colors, Typography, and Buttons.</p>
                </section>

                {/* Colors */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-bold border-b border-[var(--border-default)] pb-2">1. Brand Colors</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="space-y-2">
                            <div className="h-24 rounded-lg bg-[var(--color-brand-orange-500)] shadow-lg flex items-center justify-center font-bold">#F7922A</div>
                            <p className="font-mono text-sm">Brand Orange</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-24 rounded-lg bg-[var(--color-brand-pink-500)] shadow-lg flex items-center justify-center font-bold">#E91A86</div>
                            <p className="font-mono text-sm">Brand Pink</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-24 rounded-lg bg-[var(--color-brand-cream)] border border-[var(--border-subtle)] text-black flex items-center justify-center font-bold">#FEF6ED</div>
                            <p className="font-mono text-sm">Brand Cream</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-24 rounded-lg bg-[var(--color-brand-peach)] border border-[var(--border-subtle)] text-black flex items-center justify-center font-bold">#FFE0BF</div>
                            <p className="font-mono text-sm">Brand Peach</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-24 rounded-lg bg-[var(--color-brand-black-950)] border border-[var(--border-subtle)] shadow-lg flex items-center justify-center font-bold">#111013</div>
                            <p className="font-mono text-sm">Brand Black (Bg)</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-24 rounded-lg bg-[var(--color-brand-black-900)] border border-[var(--border-subtle)] shadow-lg flex items-center justify-center font-bold">#3D3D3D</div>
                            <p className="font-mono text-sm">Brand Black 900</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-24 rounded-lg bg-[var(--color-white)] border border-[var(--border-subtle)] text-black flex items-center justify-center font-bold">#FFFFFF</div>
                            <p className="font-mono text-sm">Brand White</p>
                        </div>
                    </div>
                </section>

                {/* Typography */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold border-b border-[var(--border-default)] pb-2">2. Typography (Graphit)</h2>
                    <div className="space-y-4">
                        <h1 className="text-6xl font-black">Display Heading 1 (Black)</h1>
                        <h2 className="text-5xl font-bold">Heading 2 (Bold)</h2>
                        <h3 className="text-4xl font-semibold">Heading 3 (Semibold)</h3>
                        <h4 className="text-3xl font-medium">Heading 4 (Medium)</h4>
                        <p className="text-lg leading-relaxed max-w-2xl text-[var(--text-secondary)]">
                            Body text using Graphit Regular or Manrope fallback. This text should be legible, with good contrast against the dark background.
                            Efficiency and creativity are at the core of Takeout Media.
                        </p>
                        <p className="text-base font-mono text-[var(--text-tertiary)]">
                            Monospace text for code or technical details using JetBrains Mono.
                        </p>
                    </div>
                </section>

                {/* Buttons */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold border-b border-[var(--border-default)] pb-2">3. Buttons</h2>
                    <div className="flex flex-wrap gap-4 items-center">
                        <button className="btn btn-primary btn-lg">Primary Action (Large)</button>
                        <button className="btn btn-primary">Primary Action</button>
                        <button className="btn btn-secondary">Secondary Outline</button>
                        <button className="btn btn-tertiary">Tertiary / Ghost</button>
                        <button className="btn btn-link">Link Style</button>
                    </div>
                </section>

            </div>
        </main>
    );
}
