"use client";

import { MapPin, AlertCircle, Check, Search } from "lucide-react";

export function InputsShowcase() {
    return (
        <section className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Form Inputs</h2>
                <p className="text-gray-600">
                    Input fields, selects, and form controls for booking flows.
                </p>
            </div>

            {/* Text Inputs */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Text Inputs
                </h3>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                            Default Input
                        </label>
                        <input
                            type="text"
                            placeholder="Enter destination"
                            className="w-full px-4 py-3 border border-[var(--color-border-default)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-border-focus)] focus:border-transparent transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                            With Icon
                        </label>
                        <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-disabled)]" />
                            <input
                                type="text"
                                placeholder="Where to?"
                                className="w-full pl-12 pr-4 py-3 border border-[var(--color-border-default)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-border-focus)] focus:border-transparent transition-all"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                            Filled State
                        </label>
                        <input
                            type="text"
                            value="Lagos, Nigeria"
                            readOnly
                            className="w-full px-4 py-3 border border-[var(--color-border-default)] rounded-lg bg-[var(--color-bg-page)]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                            Error State
                        </label>
                        <input
                            type="text"
                            placeholder="Email address"
                            className="w-full px-4 py-3 border-2 border-[var(--color-border-error)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-error-bg)]"
                        />
                        <p className="text-xs text-[var(--color-error)] mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> Please enter a valid email
                        </p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                            Success State
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                value="john@example.com"
                                readOnly
                                className="w-full px-4 py-3 pr-12 border-2 border-[var(--color-border-success)] rounded-lg bg-[var(--color-success-bg)]"
                            />
                            <Check className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-success)]" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                            Disabled
                        </label>
                        <input
                            type="text"
                            placeholder="Disabled input"
                            disabled
                            className="w-full px-4 py-3 border border-[var(--color-border-default)] rounded-lg bg-[var(--color-bg-muted)] text-[var(--color-text-disabled)] cursor-not-allowed"
                        />
                    </div>
                </div>
            </div>

            {/* Select & Date */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Select & Date Inputs
                </h3>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                            Select Dropdown
                        </label>
                        <select className="w-full px-4 py-3 border border-[var(--color-border-default)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-border-focus)] focus:border-transparent appearance-none bg-white">
                            <option>Economy</option>
                            <option>Premium Economy</option>
                            <option>Business</option>
                            <option>First Class</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                            Date Input
                        </label>
                        <input
                            type="date"
                            className="w-full px-4 py-3 border border-[var(--color-border-default)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-border-focus)] focus:border-transparent"
                        />
                    </div>
                </div>
            </div>

            {/* Checkbox & Radio */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Checkbox & Radio
                </h3>
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                className="w-5 h-5 rounded border-gray-300 text-[var(--color-info)] focus:ring-[var(--color-border-focus)]"
                                defaultChecked
                            />
                            <span className="text-[var(--color-text-secondary)]">
                                Include travel insurance
                            </span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                className="w-5 h-5 rounded border-gray-300 text-[var(--color-info)] focus:ring-[var(--color-border-focus)]"
                            />
                            <span className="text-[var(--color-text-secondary)]">
                                Add airport transfer
                            </span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                className="w-5 h-5 rounded border-gray-300 text-[var(--color-info)] focus:ring-[var(--color-border-focus)]"
                            />
                            <span className="text-[var(--color-text-secondary)]">
                                Save for future bookings
                            </span>
                        </label>
                    </div>
                    <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="radio"
                                name="trip"
                                className="w-5 h-5 border-gray-300 text-[var(--color-info)] focus:ring-[var(--color-border-focus)]"
                                defaultChecked
                            />
                            <span className="text-[var(--color-text-secondary)]">
                                One-way
                            </span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="radio"
                                name="trip"
                                className="w-5 h-5 border-gray-300 text-[var(--color-info)] focus:ring-[var(--color-border-focus)]"
                            />
                            <span className="text-[var(--color-text-secondary)]">
                                Round trip
                            </span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="radio"
                                name="trip"
                                className="w-5 h-5 border-gray-300 text-[var(--color-info)] focus:ring-[var(--color-border-focus)]"
                            />
                            <span className="text-[var(--color-text-secondary)]">
                                Multi-city
                            </span>
                        </label>
                    </div>
                </div>
            </div>

            {/* Search Input */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Search Input
                </h3>
                <div className="relative max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-disabled)]" />
                    <input
                        type="text"
                        placeholder="Search destinations, hotels, flights..."
                        className="w-full pl-12 pr-4 py-4 border border-[var(--color-border-default)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-border-focus)] focus:border-transparent text-lg"
                    />
                </div>
            </div>
        </section>
    );
}
