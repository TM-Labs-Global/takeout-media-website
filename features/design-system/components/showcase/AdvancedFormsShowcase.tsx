"use client";

import { Check, Upload, Plane, Shield, User } from "lucide-react";
import { useState } from "react";

export function AdvancedFormsShowcase() {
    const [toggleStates, setToggleStates] = useState({
        notifications: true,
        marketing: false,
        sms: true,
    });

    return (
        <section className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Advanced Forms</h2>
                <p className="text-gray-600">Complex form patterns and interactive controls.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-10">
                {/* Multistep Progress */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Booking Steps</h3>
                    <div className="flex items-center justify-between max-w-2xl mx-auto">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 bg-[var(--color-navy-900)] text-white rounded-full flex items-center justify-center font-bold">
                                <Check className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-bold text-[var(--color-navy-900)]">Search</span>
                        </div>
                        <div className="flex-1 h-1 bg-[var(--color-navy-900)] mx-4 rounded-full" />
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 bg-[var(--color-action-primary)] text-[var(--color-text-primary)] rounded-full flex items-center justify-center font-bold ring-4 ring-[var(--color-yellow-100)]">
                                2
                            </div>
                            <span className="text-xs font-bold text-[var(--color-navy-900)]">Travellers</span>
                        </div>
                        <div className="flex-1 h-1 bg-gray-200 mx-4 rounded-full" />
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center font-bold">
                                3
                            </div>
                            <span className="text-xs font-bold text-gray-400">Payment</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-12">
                    {/* Toggle Switches */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Toggles & Switches</h3>
                        <div className="space-y-4">
                            {[
                                { id: 'notifications', label: 'Push Notifications', sub: 'Get updates on your flight status' },
                                { id: 'marketing', label: 'Price Alerts', sub: 'Notify me when prices drop for this route' },
                                { id: 'sms', label: 'SMS Updates', sub: 'Standard rates apply' }
                            ].map(item => (
                                <div key={item.id} className="flex items-center justify-between">
                                    <div>
                                        <p className="font-semibold text-[var(--color-text-primary)]">{item.label}</p>
                                        <p className="text-xs text-[var(--color-text-tertiary)]">{item.sub}</p>
                                    </div>
                                    <button
                                        onClick={() => setToggleStates(prev => ({ ...prev, [item.id as keyof typeof toggleStates]: !prev[item.id as keyof typeof toggleStates] }))}
                                        className={`w-12 h-6 rounded-full transition-colors relative ${toggleStates[item.id as keyof typeof toggleStates] ? 'bg-[var(--color-success)]' : 'bg-gray-200'
                                            }`}
                                    >
                                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${toggleStates[item.id as keyof typeof toggleStates] ? 'right-1' : 'left-1'
                                            }`} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* File Upload */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Document Upload</h3>
                        <div className="border-2 border-dashed border-[var(--color-border-default)] rounded-2xl p-8 text-center hover:border-[var(--color-action-secondary)] transition-colors cursor-pointer group">
                            <div className="w-12 h-12 bg-[var(--color-navy-100)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <Upload className="w-6 h-6 text-[var(--color-action-secondary)]" />
                            </div>
                            <p className="font-bold text-gray-900">Upload Passport Copy</p>
                            <p className="text-xs text-gray-500 mt-1">PDF, JPG or PNG (Max 5MB)</p>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-[var(--color-success-bg)] rounded-xl border border-[var(--color-border-success)]">
                            <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-[var(--color-success)]">
                                <Check className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                                <p className="text-xs font-bold text-[var(--color-success-800)]">Passsport_Final.pdf</p>
                                <div className="w-full h-1 bg-white/50 rounded-full mt-1 overflow-hidden">
                                    <div className="w-full h-full bg-[var(--color-success)]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
