"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import type { ColorToken } from "@/shared/utils/design-tokens";

interface ColorsShowcaseProps {
    colors: Record<string, ColorToken[]>;
}

export function ColorsShowcase({ colors }: ColorsShowcaseProps) {
    const [copiedColor, setCopiedColor] = useState<string | null>(null);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedColor(text);
        setTimeout(() => setCopiedColor(null), 2000);
    };

    return (
        <section className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Color Palette</h2>
                <p className="text-gray-600">
                    Adventure-forward, warm, and trustworthy color system for Juyonna Travels.
                </p>
            </div>

            {Object.entries(colors).map(([category, colorList]) => (
                <div key={category} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 capitalize mb-4">{category} Colors</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                        {colorList.map((color) => (
                            <div key={color.hex} className="group">
                                <div
                                    className="h-20 rounded-lg mb-3 cursor-pointer relative overflow-hidden transition-transform hover:scale-105"
                                    style={{ backgroundColor: color.hex }}
                                    onClick={() => copyToClipboard(color.hex)}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                                        {copiedColor === color.hex ? (
                                            <Check className="w-5 h-5 text-white" />
                                        ) : (
                                            <Copy className="w-5 h-5 text-white" />
                                        )}
                                    </div>
                                </div>
                                <p className="font-medium text-gray-900 text-sm">{color.name}</p>
                                <p className="text-xs text-gray-500 font-mono">{color.hex}</p>
                                <p className="text-xs text-gray-400 mt-1">{color.usage}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}
