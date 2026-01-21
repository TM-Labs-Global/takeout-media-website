"use client";

import { Home, Plane, Hotel, Ship, Search, User, Menu, ChevronRight } from "lucide-react";
import { useState } from "react";

export function NavigationShowcase() {
    const [activeTab, setActiveTab] = useState("flights");

    return (
        <section className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Navigation</h2>
                <p className="text-gray-600">Site-wide and component-level navigation patterns.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-10">
                {/* Mobile Tab Bar */}
                <div className="max-w-md mx-auto">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 text-center">Mobile Tab Bar</h3>
                    <div className="bg-white border border-[var(--color-border-default)] rounded-2xl flex items-center justify-around p-2 shadow-xl">
                        {[
                            { id: 'home', icon: Home, label: 'Home' },
                            { id: 'flights', icon: Plane, label: 'Flights' },
                            { id: 'hotels', icon: Hotel, label: 'Hotels' },
                            { id: 'profile', icon: User, label: 'Profile' }
                        ].map(item => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${activeTab === item.id
                                        ? 'text-[var(--color-action-secondary)] bg-[var(--color-navy-100)]'
                                        : 'text-[var(--color-text-tertiary)] hover:bg-[var(--color-bg-muted)]'
                                    }`}
                            >
                                <item.icon className="w-6 h-6" />
                                <span className="text-[10px] font-bold uppercase">{item.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Desktop Tabs */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Desktop Sub-Tabs</h3>
                    <div className="flex items-center gap-2 border-b border-[var(--color-border-default)]">
                        {['All Items', 'Completed', 'Processing', 'Cancelled'].map((tab, i) => (
                            <button
                                key={tab}
                                className={`px-6 py-4 text-sm font-semibold border-b-2 transition-all ${i === 0
                                        ? 'border-[var(--color-action-secondary)] text-[var(--color-action-secondary)]'
                                        : 'border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-action-secondary)]'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Breadcrumbs */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Breadcrumbs</h3>
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-[var(--color-text-secondary)] hover:text-[var(--color-action-secondary)] cursor-pointer">Dashboard</span>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <span className="text-[var(--color-text-secondary)] hover:text-[var(--color-action-secondary)] cursor-pointer">Bookings</span>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <span className="text-[var(--color-text-primary)] font-bold">Flight Details</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
