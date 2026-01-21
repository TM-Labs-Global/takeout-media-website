"use client";

export function ImageryShowcase() {
    return (
        <section className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Imagery & Styles</h2>
                <p className="text-gray-600">Visual treatments and assets used across the platform.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Gradients</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-24 bg-gradient-to-br from-[var(--color-navy-700)] to-[var(--color-navy-900)] rounded-xl flex items-end p-3">
                                <span className="text-white text-xs font-medium">Navy Deep</span>
                            </div>
                            <div className="h-24 bg-gradient-to-br from-[var(--color-sky-400)] to-[var(--color-ocean-600)] rounded-xl flex items-end p-3">
                                <span className="text-white text-xs font-medium">Sky to Ocean</span>
                            </div>
                            <div className="h-24 bg-gradient-to-br from-[var(--color-yellow-400)] to-[var(--color-orange-500)] rounded-xl flex items-end p-3">
                                <span className="text-[var(--color-text-primary)] text-xs font-medium">Sunset Glow</span>
                            </div>
                            <div className="h-24 bg-gradient-to-br from-[var(--color-ocean-400)] via-[var(--color-sky-300)] to-[var(--color-yellow-200)] rounded-xl flex items-end p-3">
                                <span className="text-[var(--color-navy-900)] text-xs font-medium">Horizon</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Overlay Patterns</h3>
                        <div className="space-y-4">
                            <div className="h-24 relative rounded-xl overflow-hidden group">
                                <img
                                    src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&fit=crop"
                                    className="w-full h-full object-cover"
                                    alt="Pattern"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy-900)] to-transparent" />
                                <div className="absolute inset-0 flex items-center px-6">
                                    <p className="text-white font-bold">Linear Fade</p>
                                </div>
                            </div>
                            <div className="h-24 relative rounded-xl overflow-hidden group">
                                <img
                                    src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?w=400&fit=crop"
                                    className="w-full h-full object-cover"
                                    alt="Pattern"
                                />
                                <div className="absolute inset-0 bg-[var(--color-navy-900)]/40 backdrop-blur-[2px]" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <p className="text-white font-bold">Glass & Blur</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
