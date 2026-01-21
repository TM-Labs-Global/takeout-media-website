"use client";

import { Check, Copy, AlertCircle, Info, Eye } from "lucide-react";
import { useState } from "react";
import type { SemanticToken } from "@/shared/utils/design-tokens";

interface SemanticTokensShowcaseProps {
    semanticTokens: Record<string, SemanticToken[]>;
}

export function SemanticTokensShowcase({ semanticTokens }: SemanticTokensShowcaseProps) {
    const [copiedColor, setCopiedColor] = useState<string | null>(null);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedColor(text);
        setTimeout(() => setCopiedColor(null), 2000);
    };

    return (
        <section className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Semantic Color Tokens</h2>
                <p className="text-gray-600">
                    Purpose-driven color system for scalable, consistent UI development.
                    Map these tokens to components, not raw hex values.
                </p>
            </div>

            {/* Token System Overview */}
            <div className="bg-gradient-to-br from-[var(--color-navy-700)] to-[var(--color-navy-600)] rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-4 text-[var(--color-action-primary)]">
                    Why Semantic Tokens?
                </h3>
                <div className="grid grid-cols-3 gap-6">
                    <div className="bg-white/10 rounded-lg p-4">
                        <p className="font-semibold">Consistency</p>
                        <p className="text-sm text-white/80 mt-1">
                            Single source of truth across all components
                        </p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                        <p className="font-semibold">Maintainability</p>
                        <p className="text-sm text-white/80 mt-1">
                            Change once, update everywhere
                        </p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                        <p className="font-semibold">Dark Mode Ready</p>
                        <p className="text-sm text-white/80 mt-1">
                            Swap token values for theme switching
                        </p>
                    </div>
                </div>
            </div>

            {Object.entries(semanticTokens).map(([category, tokens]) => (
                <div key={category} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 capitalize mb-4">
                        {category === "text"
                            ? "Text Colors"
                            : category === "background"
                                ? "Background Colors"
                                : category === "border"
                                    ? "Border Colors"
                                    : category === "action"
                                        ? "Action Colors"
                                        : "Feedback Colors"}
                    </h3>
                    <div className="space-y-3">
                        {tokens.map((item) => (
                            <div
                                key={item.token}
                                className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                            >
                                <div
                                    className="w-10 h-10 rounded-lg border border-gray-200 flex-shrink-0 cursor-pointer relative"
                                    style={{ backgroundColor: item.hex }}
                                    onClick={() => copyToClipboard(item.hex)}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-lg">
                                        {copiedColor === item.hex ? (
                                            <Check className="w-4 h-4 text-white" />
                                        ) : (
                                            <Copy className="w-4 h-4 text-white" />
                                        )}
                                    </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-mono text-sm font-semibold text-[var(--color-text-primary)]">
                                        {item.token}
                                    </p>
                                    <p className="text-xs text-gray-500 truncate">{item.usage}</p>
                                </div>
                                <div className="text-right flex-shrink-0">
                                    <p className="font-mono text-xs text-gray-400">{item.hex}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Token Usage Examples */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Usage Examples</h3>
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <p className="text-sm font-semibold text-gray-700">Alert Component</p>
                        <div className="space-y-2">
                            <div className="p-3 rounded-lg flex items-center gap-3 bg-[var(--color-success-bg)] border-l-4 border-[var(--color-success)]">
                                <Check className="w-5 h-5 text-[var(--color-success)]" />
                                <span className="text-sm text-[var(--color-success-800)]">
                                    Success: color-success-bg + color-success + Success 800
                                </span>
                            </div>
                            <div className="p-3 rounded-lg flex items-center gap-3 bg-[var(--color-error-bg)] border-l-4 border-[var(--color-error)]">
                                <AlertCircle className="w-5 h-5 text-[var(--color-error)]" />
                                <span className="text-sm text-[var(--color-error-800)]">
                                    Error: color-error-bg + color-error + Error 800
                                </span>
                            </div>
                            <div className="p-3 rounded-lg flex items-center gap-3 bg-[var(--color-warning-bg)] border-l-4 border-[var(--color-warning)]">
                                <AlertCircle className="w-5 h-5 text-[var(--color-warning)]" />
                                <span className="text-sm text-[var(--color-warning-800)]">
                                    Warning: color-warning-bg + color-warning + Warning 800
                                </span>
                            </div>
                            <div className="p-3 rounded-lg flex items-center gap-3 bg-[var(--color-info-bg)] border-l-4 border-[var(--color-info)]">
                                <Info className="w-5 h-5 text-[var(--color-info)]" />
                                <span className="text-sm text-[var(--color-info-800)]">
                                    Info: color-info-bg + color-info + Info 800
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <p className="text-sm font-semibold text-gray-700">Button States</p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <button className="px-4 py-2 rounded-lg text-sm font-semibold bg-[var(--color-action-primary)] text-[var(--color-text-primary)]">
                                    Primary
                                </button>
                                <span className="text-xs text-gray-500">color-action-primary</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="px-4 py-2 rounded-lg text-sm font-semibold bg-[var(--color-action-primary-hover)] text-[var(--color-text-primary)]">
                                    Hover
                                </button>
                                <span className="text-xs text-gray-500">color-action-primary-hover</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="px-4 py-2 rounded-lg text-sm font-semibold bg-[var(--color-action-disabled)] text-[var(--color-text-disabled)]">
                                    Disabled
                                </button>
                                <span className="text-xs text-gray-500">color-action-disabled</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-[var(--color-action-destructive)]">
                                    Delete
                                </button>
                                <span className="text-xs text-gray-500">color-action-destructive</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accessibility Notes */}
            <div className="bg-[var(--color-ocean-100)] border border-[var(--color-ocean-300)] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[var(--color-navy-700)] mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5" /> Accessibility Compliance
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <p className="font-medium text-[var(--color-navy-700)] mb-2">
                            ✓ WCAG AA Compliant Pairs
                        </p>
                        <ul className="text-[var(--color-ocean-800)] space-y-1">
                            <li>• color-text-primary on color-bg-card (12.6:1)</li>
                            <li>• color-text-inverse on color-bg-inverse (16.1:1)</li>
                            <li>• Success 800 on color-success-bg (7.2:1)</li>
                            <li>• Error 800 on color-error-bg (6.8:1)</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium text-[var(--color-navy-700)] mb-2">⚠️ Use With Care</p>
                        <ul className="text-[var(--color-ocean-800)] space-y-1">
                            <li>• Yellow text on white (use navy text instead)</li>
                            <li>• Light colors (100-300) for text</li>
                            <li>• Orange on light backgrounds for small text</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
