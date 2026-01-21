"use client";

import type { TypographyToken } from "@/shared/utils/design-tokens";

interface TypographyShowcaseProps {
    typography: TypographyToken[];
}

export function TypographyShowcase({ typography }: TypographyShowcaseProps) {
    return (
        <section className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Typography</h2>
                <p className="text-gray-600">
                    Poppins for all UI content. TAHU decorative font for hero statements only.
                </p>
            </div>

            {/* Font Family Info */}
            <div className="bg-gradient-to-r from-[var(--color-navy-700)] to-[var(--color-navy-600)] rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-4">Font Families</h3>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <p className="text-[var(--color-sun-500)] text-sm font-semibold mb-2">
                            PRIMARY: POPPINS
                        </p>
                        <p className="text-[var(--color-sky-400)] text-sm">
                            Body, UI labels, form fields, card titles, buttons, navigation
                        </p>
                        <p className="text-2xl font-semibold mt-3">Aa Bb Cc 123</p>
                    </div>
                    <div>
                        <p className="text-[var(--color-sun-500)] text-sm font-semibold mb-2">
                            DECORATIVE: TAHU
                        </p>
                        <p className="text-[var(--color-sky-400)] text-sm">
                            Hero section statements only. Never in small UI components.
                        </p>
                        <p
                            className="text-3xl mt-3"
                            style={{ fontFamily: '"Brush Script MT", cursive' }}
                        >
                            Find Your Adventure
                        </p>
                        <p className="text-xs text-[var(--color-sky-400)]/60 mt-2">
                            Preview approximation. Use Tahu.ttf in production.
                        </p>
                    </div>
                </div>
            </div>

            {/* Tahu Font Reference */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-start gap-6">
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            TAHU Font Reference
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Handwritten brush script font for hero statements. Expressive,
                            warm, adventure-forward.
                        </p>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <p
                                className="text-4xl text-[var(--color-navy-700)]"
                                style={{ fontFamily: '"Brush Script MT", cursive' }}
                            >
                                A B C D E F G H I J K L M
                            </p>
                            <p
                                className="text-4xl text-[var(--color-navy-700)] mt-2"
                                style={{ fontFamily: '"Brush Script MT", cursive' }}
                            >
                                N O P Q R S T U V W X Y Z
                            </p>
                            <p
                                className="text-3xl text-[var(--color-navy-700)] mt-4"
                                style={{ fontFamily: '"Brush Script MT", cursive' }}
                            >
                                a b c d e f g h i j k l m n o p q r s t u v w x y z
                            </p>
                            <p
                                className="text-3xl text-[var(--color-navy-700)] mt-2"
                                style={{ fontFamily: '"Brush Script MT", cursive' }}
                            >
                                0 1 2 3 4 5 6 7 8 9
                            </p>
                        </div>
                        <p className="text-xs text-gray-400 mt-3">
                            Note: This preview uses a system brush font. The actual Tahu font
                            has more expressive, hand-drawn strokes.
                        </p>
                    </div>
                    <div className="w-48 flex-shrink-0">
                        <div className="bg-[var(--color-navy-700)] rounded-lg p-4 text-center">
                            <p className="text-xs text-[var(--color-sky-400)] mb-2">
                                FONT FILE
                            </p>
                            <p className="text-white font-semibold">Tahu.ttf</p>
                            <p className="text-xs text-[var(--color-sky-400)] mt-2">
                                181 glyphs
                            </p>
                        </div>
                        <div className="mt-3 space-y-2 text-xs text-gray-500">
                            <p>Uppercase letters</p>
                            <p>Lowercase letters</p>
                            <p>Numbers 0-9</p>
                            <p>Special characters</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {typography.map((type, index) => (
                    <div
                        key={type.name}
                        className={`p-6 ${index !== typography.length - 1 ? "border-b border-gray-100" : ""
                            }`}
                    >
                        <div className="flex items-start justify-between gap-8">
                            <div className="flex-1">
                                <p className={`text-[var(--color-text-primary)] mb-2 ${type.className}`}>
                                    {type.sample}
                                </p>
                            </div>
                            <div className="flex-shrink-0 text-right">
                                <p className="font-semibold text-gray-900">{type.name}</p>
                                <p className="text-xs text-gray-500 font-mono mt-1">
                                    {type.size} / {type.weight} / {type.lineHeight}
                                </p>
                                <p className="text-xs text-[var(--color-ocean-500)] mt-1">
                                    {type.note}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
