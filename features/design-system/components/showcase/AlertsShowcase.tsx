"use client";

import { Check, AlertCircle, Info, X } from "lucide-react";
import { useState } from "react";

export function AlertsShowcase() {
    const [toastVisible, setToastVisible] = useState({
        success: false,
        error: false,
    });

    return (
        <section className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Alerts & Notifications</h2>
                <p className="text-gray-600">
                    User feedback, system messages, and feedback components.
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-8">
                {/* Banner Alerts */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Banner Alerts</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 p-4 bg-[var(--color-success-bg)] border border-[var(--color-border-success)] rounded-xl">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[var(--color-success)] shadow-sm">
                                <Check className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-[var(--color-success-800)]">Booking Successful!</p>
                                <p className="text-sm text-[var(--color-success-800)] opacity-80">Your flight to Dubai has been confirmed. Check your email for details.</p>
                            </div>
                            <button className="text-[var(--color-success-800)] opacity-50 hover:opacity-100">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-[var(--color-warning-bg)] border border-[var(--color-border-warning)] rounded-xl">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[var(--color-warning)] shadow-sm">
                                <AlertCircle className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-[var(--color-warning-800)]">Payment Pending</p>
                                <p className="text-sm text-[var(--color-warning-800)] opacity-80">We are awaiting confirmation from your bank. This may take up to 24 hours.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Inline Alerts */}
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Inline Alerts</h3>
                        <div className="p-3 bg-[var(--color-error-bg)] text-[var(--color-error-800)] text-sm rounded-lg flex items-center gap-2 border border-[var(--color-border-error)]">
                            <AlertCircle className="w-4 h-4" />
                            Invalid passport number provided
                        </div>
                        <div className="p-3 bg-[var(--color-info-bg)] text-[var(--color-info-800)] text-sm rounded-lg flex items-center gap-2 border border-[var(--color-border-info)]">
                            <Info className="w-4 h-4" />
                            Prices are subject to change based on availability
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Toast Previews</h3>
                        <div className="space-y-3">
                            <button
                                onClick={() => setToastVisible({ ...toastVisible, success: true })}
                                className="w-full px-4 py-2 bg-[var(--color-action-secondary)] text-white rounded-lg text-sm font-medium"
                            >
                                Trigger Success Toast
                            </button>
                            <button
                                onClick={() => setToastVisible({ ...toastVisible, error: true })}
                                className="w-full px-4 py-2 border border-[var(--color-border-default)] text-[var(--color-text-primary)] rounded-lg text-sm font-medium"
                            >
                                Trigger Error Toast
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Toast Overlays */}
            <div className="fixed bottom-8 right-8 z-[100] space-y-4">
                {toastVisible.success && (
                    <div className="flex items-center gap-3 bg-[var(--color-navy-900)] text-white p-4 rounded-xl shadow-2xl animate-slide-up min-w-[300px]">
                        <Check className="w-5 h-5 text-[var(--color-action-primary)]" />
                        <p className="text-sm font-medium flex-1">Profile updated successfully!</p>
                        <button onClick={() => setToastVisible({ ...toastVisible, success: false })}>
                            <X className="w-4 h-4 opacity-50" />
                        </button>
                    </div>
                )}
                {toastVisible.error && (
                    <div className="flex items-center gap-3 bg-[var(--color-error-800)] text-white p-4 rounded-xl shadow-2xl animate-slide-up min-w-[300px]">
                        <AlertCircle className="w-5 h-5" />
                        <p className="text-sm font-medium flex-1">Failed to save changes.</p>
                        <button onClick={() => setToastVisible({ ...toastVisible, error: false })}>
                            <X className="w-4 h-4 opacity-50" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
