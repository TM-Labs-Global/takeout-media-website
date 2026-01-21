"use client";

import type { SpacingToken } from "@/shared/utils/design-tokens";

interface SpacingShowcaseProps {
    spacing: SpacingToken[];
}

export function SpacingShowcase({ spacing }: SpacingShowcaseProps) {
    return (
        <section className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Spacing Scale</h2>
                <p className="text-gray-600">
                    Consistent spacing tokens for layouts and components.
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="space-y-4">
                    {spacing.map((space) => (
                        <div key={space.name} className="flex items-center gap-6">
                            <div className="w-20 text-right">
                                <span className="font-mono text-sm font-semibold text-[var(--color-navy-700)]">
                                    {space.name}
                                </span>
                            </div>
                            <div
                                className="bg-[var(--color-ocean-500)] rounded"
                                style={{ width: space.value, height: "24px" }}
                            />
                            <div className="flex-1">
                                <span className="text-sm font-medium text-gray-900">
                                    {space.value}
                                </span>
                                <span className="text-sm text-gray-500 ml-3">{space.usage}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
