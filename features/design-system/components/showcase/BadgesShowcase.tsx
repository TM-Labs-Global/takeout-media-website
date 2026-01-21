"use client";

export function BadgesShowcase() {
    return (
        <section className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Badges & Tags
                </h2>
                <p className="text-gray-600">
                    Small UI elements for status, categories, and counts.
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="grid grid-cols-2 gap-8">
                    {/* Status Badges */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Status Badges
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 bg-[var(--color-success-bg)] text-[var(--color-success-800)] text-xs font-bold rounded-full border border-[var(--color-border-success)]">
                                CONFIRMED
                            </span>
                            <span className="px-3 py-1 bg-[var(--color-warning-bg)] text-[var(--color-warning-800)] text-xs font-bold rounded-full border border-[var(--color-border-warning)]">
                                PENDING
                            </span>
                            <span className="px-3 py-1 bg-[var(--color-error-bg)] text-[var(--color-error-800)] text-xs font-bold rounded-full border border-[var(--color-border-error)]">
                                CANCELLED
                            </span>
                            <span className="px-3 py-1 bg-[var(--color-info-bg)] text-[var(--color-info-800)] text-xs font-bold rounded-full border border-[var(--color-border-info)]">
                                IN PROGRESS
                            </span>
                        </div>
                    </div>

                    {/* Category Tags */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Category Tags
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 bg-[var(--color-navy-100)] text-[var(--color-text-primary)] text-xs font-medium rounded hover:bg-[var(--color-navy-200)] transition-colors cursor-pointer">
                                #Adventure
                            </span>
                            <span className="px-3 py-1 bg-[var(--color-navy-100)] text-[var(--color-text-primary)] text-xs font-medium rounded hover:bg-[var(--color-navy-200)] transition-colors cursor-pointer">
                                #Luxury
                            </span>
                            <span className="px-3 py-1 bg-[var(--color-navy-100)] text-[var(--color-text-primary)] text-xs font-medium rounded hover:bg-[var(--color-navy-200)] transition-colors cursor-pointer">
                                #Beaches
                            </span>
                            <span className="px-3 py-1 bg-[var(--color-navy-100)] text-[var(--color-text-primary)] text-xs font-medium rounded hover:bg-[var(--color-navy-200)] transition-colors cursor-pointer">
                                #Couples
                            </span>
                        </div>
                    </div>

                    {/* Notification Dots */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Notification Dots
                        </h3>
                        <div className="flex items-center gap-6">
                            <div className="relative">
                                <div className="w-10 h-10 bg-gray-200 rounded-lg" />
                                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--color-error)] text-white text-[10px] font-bold flex items-center justify-center rounded-full ring-2 ring-white">
                                    3
                                </span>
                            </div>
                            <div className="relative">
                                <div className="w-10 h-10 bg-gray-200 rounded-lg" />
                                <span className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--color-error)] rounded-full ring-2 ring-white" />
                            </div>
                            <div className="relative">
                                <div className="w-10 h-10 bg-gray-200 rounded-lg" />
                                <span className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--color-success)] rounded-full ring-2 ring-white" />
                            </div>
                        </div>
                    </div>

                    {/* Timeline Style */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Step Badges
                        </h3>
                        <div className="flex items-center">
                            <span className="w-8 h-8 bg-[var(--color-action-secondary)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                                1
                            </span>
                            <div className="w-8 h-1 bg-[var(--color-action-secondary)]" />
                            <span className="w-8 h-8 bg-[var(--color-action-secondary)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                                2
                            </span>
                            <div className="w-8 h-1 bg-[var(--color-bg-muted)]" />
                            <span className="w-8 h-8 bg-[var(--color-bg-muted)] text-[var(--color-text-disabled)] rounded-full flex items-center justify-center text-sm font-bold border-2 border-[var(--color-border-default)]">
                                3
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
