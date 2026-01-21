"use client";

import { Search } from "lucide-react";

export function BrandVoiceShowcase() {
    return (
        <section className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Brand Voice</h2>
                <p className="text-gray-600">Representing Juyonna Travels through copy and visual pairing.</p>
            </div>

            <div className="grid grid-cols-2 gap-8">
                {/* Pairing Example */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&fit=crop"
                            className="w-full h-full object-cover"
                            alt="Beach"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-8 text-center">
                            <div>
                                <p className="text-white text-4xl mb-2" style={{ fontFamily: '"Brush Script MT", cursive' }}>
                                    Your Summer Escape
                                </p>
                                <p className="text-[var(--color-sky-300)] text-sm font-semibold tracking-widest uppercase">
                                    UNFORGETTABLE MEMORIES
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Typography Pairing</h4>
                        <p className="text-sm text-gray-600">
                            Combine TAHU (Display) for emotion with Poppins (Utility) for clarity.
                            Always maintain a 1:3 ratio of decorative to clean text.
                        </p>
                    </div>
                </div>

                {/* Success Copy */}
                <div className="bg-[var(--color-info-bg)] border border-[var(--color-info-300)] rounded-xl p-8 flex flex-col justify-center">
                    <p className="text-[var(--color-info-800)] text-sm font-bold uppercase tracking-widest mb-4">
                        TONE OF VOICE
                    </p>
                    <p className="text-3xl font-bold text-[var(--color-navy-900)] mb-4">
                        "Your journey starts here, and we're with you every mile."
                    </p>
                    <p className="text-[var(--color-navy-700)] opacity-80 italic">
                        Keywords: Trustworthy, Adventurous, Seamless, Premium.
                    </p>
                </div>
            </div>

            {/* Empty States */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-10 h-10 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No bookings found</h3>
                <p className="text-gray-600 max-w-sm mx-auto mb-8">
                    Adventure is calling! You haven't made any bookings yet. Start exploring our top destinations.
                </p>
                <button className="px-6 py-3 bg-[var(--color-action-primary)] text-[var(--color-text-primary)] font-semibold rounded-lg hover:shadow-lg transition-all">
                    Explore Destinations
                </button>
            </div>
        </section>
    );
}
