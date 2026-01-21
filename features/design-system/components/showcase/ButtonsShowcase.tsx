"use client";

import { Plane, ChevronRight, Search, Bell } from "lucide-react";

export function ButtonsShowcase() {
    return (
        <section className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Buttons</h2>
                <p className="text-gray-600">
                    Interactive button components with multiple variants and states.
                </p>
            </div>

            {/* Primary Buttons */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Primary Buttons
                </h3>
                <div className="flex flex-wrap items-center gap-4">
                    <button className="px-6 py-3 bg-[var(--color-action-primary)] text-[var(--color-text-primary)] font-semibold rounded-lg hover:bg-[var(--color-action-primary-hover)] transition-colors">
                        Book Now
                    </button>
                    <button className="px-6 py-3 bg-[var(--color-action-secondary)] text-[var(--color-text-inverse)] font-semibold rounded-lg hover:bg-[var(--color-action-secondary-hover)] transition-colors">
                        Search Flights
                    </button>
                    <button className="px-6 py-3 bg-[var(--color-action-tertiary)] text-[var(--color-text-inverse)] font-semibold rounded-lg hover:bg-[var(--color-ocean-600)] transition-colors">
                        View Details
                    </button>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                    Yellow for primary CTA, Navy for secondary actions, Ocean Blue for
                    tertiary
                </p>
            </div>

            {/* Button Sizes */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Button Sizes
                </h3>
                <div className="flex flex-wrap items-center gap-4">
                    <button className="px-3 py-1.5 bg-[var(--color-action-primary)] text-[var(--color-text-primary)] text-xs font-semibold rounded-md hover:bg-[var(--color-action-primary-hover)] transition-colors">
                        Small
                    </button>
                    <button className="px-4 py-2 bg-[var(--color-action-primary)] text-[var(--color-text-primary)] text-sm font-semibold rounded-lg hover:bg-[var(--color-action-primary-hover)] transition-colors">
                        Medium
                    </button>
                    <button className="px-6 py-3 bg-[var(--color-action-primary)] text-[var(--color-text-primary)] font-semibold rounded-lg hover:bg-[var(--color-action-primary-hover)] transition-colors">
                        Large
                    </button>
                    <button className="px-8 py-4 bg-[var(--color-action-primary)] text-[var(--color-text-primary)] text-lg font-semibold rounded-xl hover:bg-[var(--color-action-primary-hover)] transition-colors">
                        Extra Large
                    </button>
                </div>
            </div>

            {/* Outline & Ghost */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Outline & Ghost Variants
                </h3>
                <div className="flex flex-wrap items-center gap-4">
                    <button className="px-6 py-3 border-2 border-[var(--color-action-secondary)] text-[var(--color-action-secondary)] font-semibold rounded-lg hover:bg-[var(--color-action-secondary)] hover:text-[var(--color-text-inverse)] transition-colors">
                        Outline Navy
                    </button>
                    <button className="px-6 py-3 border-2 border-[var(--color-action-tertiary)] text-[var(--color-action-tertiary)] font-semibold rounded-lg hover:bg-[var(--color-action-tertiary)] hover:text-[var(--color-text-inverse)] transition-colors">
                        Outline Blue
                    </button>
                    <button className="px-6 py-3 text-[var(--color-action-secondary)] font-semibold rounded-lg hover:bg-[var(--color-bg-muted)] transition-colors">
                        Ghost Button
                    </button>
                </div>
            </div>

            {/* Button States */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Button States
                </h3>
                <div className="flex flex-wrap items-center gap-4">
                    <button className="px-6 py-3 bg-[var(--color-action-primary)] text-[var(--color-text-primary)] font-semibold rounded-lg">
                        Default
                    </button>
                    <button className="px-6 py-3 bg-[var(--color-action-primary-hover)] text-[var(--color-text-primary)] font-semibold rounded-lg">
                        Hover
                    </button>
                    <button className="px-6 py-3 bg-[var(--color-yellow-600)] text-[var(--color-text-primary)] font-semibold rounded-lg ring-2 ring-[var(--color-action-primary)] ring-offset-2">
                        Focus
                    </button>
                    <button className="px-6 py-3 bg-[var(--color-action-disabled)] text-[var(--color-text-disabled)] font-semibold rounded-lg cursor-not-allowed">
                        Disabled
                    </button>
                    <button className="px-6 py-3 bg-[var(--color-action-primary)] text-[var(--color-text-primary)] font-semibold rounded-lg flex items-center gap-2">
                        <svg
                            className="w-4 h-4 animate-spin"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                        </svg>
                        Loading
                    </button>
                </div>
            </div>

            {/* Icon Buttons */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Icon Buttons
                </h3>
                <div className="flex flex-wrap items-center gap-4">
                    <button className="px-6 py-3 bg-[var(--color-action-primary)] text-[var(--color-text-primary)] font-semibold rounded-lg flex items-center gap-2 hover:bg-[var(--color-action-primary-hover)] transition-colors">
                        <Plane className="w-5 h-5" />
                        Book Flight
                    </button>
                    <button className="px-6 py-3 bg-[var(--color-action-secondary)] text-[var(--color-text-inverse)] font-semibold rounded-lg flex items-center gap-2 hover:bg-[var(--color-action-secondary-hover)] transition-colors">
                        Continue
                        <ChevronRight className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 bg-[var(--color-action-secondary)] text-[var(--color-text-inverse)] rounded-full flex items-center justify-center hover:bg-[var(--color-action-secondary-hover)] transition-colors">
                        <Search className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 border border-[var(--color-border-default)] text-[var(--color-text-secondary)] rounded-lg flex items-center justify-center hover:bg-[var(--color-bg-muted)] transition-colors">
                        <Bell className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
