"use client";

import { X, Bell, Plane, AlertCircle, Info, Check, Search, Shield } from "lucide-react";
import { useState } from "react";

export function OverlaysShowcase() {
    const [showModal, setShowModal] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);

    return (
        <section className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Overlays & Feedback</h2>
                <p className="text-gray-600">Modals, drawers, and state-full UI feedback elements.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-8">
                <div className="grid grid-cols-2 gap-8">
                    {/* Modal Trigger */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Modal Systems</h3>
                        <p className="text-sm text-gray-500">Dialogs for focused interactions or confirmations.</p>
                        <button
                            onClick={() => setShowModal(true)}
                            className="px-6 py-3 bg-[var(--color-navy-900)] text-white font-bold rounded-xl hover:shadow-lg transition-all"
                        >
                            Open Example Modal
                        </button>
                    </div>

                    {/* Drawer Trigger */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Slide-out Drawers</h3>
                        <p className="text-sm text-gray-500">Side panels for filtering, menus or quick edits.</p>
                        <button
                            onClick={() => setShowDrawer(true)}
                            className="px-6 py-3 border-2 border-[var(--color-navy-900)] text-[var(--color-navy-900)] font-bold rounded-xl hover:bg-[var(--color-navy-50)] transition-all"
                        >
                            Open Side Drawer
                        </button>
                    </div>
                </div>

                {/* Modal Preview */}
                {showModal && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowModal(false)} />
                        <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
                            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                                <h4 className="text-xl font-bold text-gray-900">Confirm Booking</h4>
                                <button onClick={() => setShowModal(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                    <X className="w-5 h-5 text-gray-400" />
                                </button>
                            </div>
                            <div className="p-8 text-center">
                                <div className="w-16 h-16 bg-[var(--color-yellow-100)] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Plane className="w-8 h-8 text-[var(--color-yellow-600)]" />
                                </div>
                                <p className="text-gray-600 mb-6">
                                    You are about to book a flight to <span className="font-bold text-gray-900">Tokyo</span> for <span className="font-bold text-gray-900">₦1,450,000</span>.
                                </p>
                                <div className="flex gap-3">
                                    <button className="flex-1 px-6 py-3 border border-gray-200 rounded-xl font-bold text-gray-600 hover:bg-gray-50" onClick={() => setShowModal(false)}>
                                        Cancel
                                    </button>
                                    <button className="flex-1 px-6 py-3 bg-[var(--color-action-primary)] text-[var(--color-text-primary)] rounded-xl font-bold hover:shadow-lg">
                                        Confirm & Pay
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Drawer Preview */}
                {showDrawer && (
                    <div className="fixed inset-0 z-[200] overflow-hidden">
                        <div className="absolute inset-0 bg-black/40" onClick={() => setShowDrawer(false)} />
                        <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl animate-slide-left p-6">
                            <div className="flex items-center justify-between mb-8">
                                <h4 className="text-xl font-bold text-gray-900">Filters</h4>
                                <button onClick={() => setShowDrawer(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                    <X className="w-5 h-5 text-gray-400" />
                                </button>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <label className="text-sm font-bold text-gray-500 uppercase tracking-widest block mb-3">Price Range</label>
                                    <div className="h-1 bg-gray-200 rounded-full relative">
                                        <div className="absolute inset-y-0 left-0 right-1/4 bg-[var(--color-action-secondary)] rounded-full" />
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[var(--color-action-secondary)] rounded-full" />
                                        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[var(--color-action-secondary)] rounded-full" />
                                    </div>
                                    <div className="flex justify-between mt-2 text-sm font-bold text-gray-700">
                                        <span>₦0</span>
                                        <span>₦4.5M</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-bold text-gray-500 uppercase tracking-widest block mb-3">Airlines</label>
                                    <div className="space-y-2">
                                        {['Qatar Airways', 'Emirates', 'Air Peace', 'British Airways'].map(airline => (
                                            <label key={airline} className="flex items-center gap-3 cursor-pointer group">
                                                <div className="w-5 h-5 border-2 border-gray-300 rounded group-hover:border-[var(--color-action-secondary)] transition-colors" />
                                                <span className="text-sm text-gray-600 font-medium">{airline}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <button className="w-full px-6 py-4 bg-[var(--color-navy-900)] text-white rounded-xl font-bold hover:shadow-lg transition-all">
                                    Apply Filters
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
