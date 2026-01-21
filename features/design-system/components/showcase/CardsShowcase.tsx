"use client";

import { Plane, Hotel, Ship, FileText } from "lucide-react";

export function CardsShowcase() {
    return (
        <section className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Cards</h2>
                <p className="text-gray-600">
                    Card components for displaying travel content and services.
                </p>
            </div>

            {/* Service Cards */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Service Cards
                </h3>
                <div className="grid grid-cols-4 gap-4">
                    {[
                        {
                            icon: Plane,
                            name: "Flights",
                            iconClass: "text-[var(--color-info)]",
                            bgClass: "bg-[var(--color-info-bg)]",
                        },
                        {
                            icon: Hotel,
                            name: "Hotels",
                            iconClass: "text-[var(--color-warning)]",
                            bgClass: "bg-[var(--color-warning-bg)]",
                        },
                        {
                            icon: Ship,
                            name: "Cargo",
                            iconClass: "text-[var(--color-action-secondary)]",
                            bgClass: "bg-[var(--color-navy-100)]",
                        },
                        {
                            icon: FileText,
                            name: "Visa",
                            iconClass: "text-[var(--color-success)]",
                            bgClass: "bg-[var(--color-success-bg)]",
                        },
                    ].map((service) => (
                        <div
                            key={service.name}
                            className="p-6 bg-[var(--color-bg-page)] rounded-xl hover:bg-white hover:shadow-lg transition-all cursor-pointer border border-transparent hover:border-[var(--color-border-default)] group"
                        >
                            <div
                                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${service.bgClass}`}
                            >
                                <service.icon className={`w-6 h-6 ${service.iconClass}`} />
                            </div>
                            <h4 className="font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-action-secondary)]">
                                {service.name}
                            </h4>
                            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                                Book now →
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Destination Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Destination Card
                </h3>
                <div className="grid grid-cols-3 gap-6">
                    <div className="rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                        <div className="relative h-48 bg-gradient-to-br from-[var(--color-sky-300)] to-[var(--color-ocean-500)]">
                            <img
                                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
                                alt="Dubai"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-3 right-3 bg-[var(--color-action-primary)] text-[var(--color-text-primary)] text-xs font-bold px-2 py-1 rounded">
                                TRENDING
                            </div>
                        </div>
                        <div className="p-4 bg-white">
                            <h4 className="font-semibold text-[var(--color-text-primary)]">
                                Dubai, UAE
                            </h4>
                            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                                From ₦850,000
                            </p>
                            <div className="flex items-center gap-2 mt-3">
                                <span className="text-xs bg-[var(--color-navy-100)] text-[var(--color-text-primary)] px-2 py-1 rounded">
                                    5 Days
                                </span>
                                <span className="text-xs bg-[var(--color-navy-100)] text-[var(--color-text-primary)] px-2 py-1 rounded">
                                    All Inclusive
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                        <div className="relative h-48">
                            <img
                                src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&h=300&fit=crop"
                                alt="Paris"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-4 bg-white">
                            <h4 className="font-semibold text-[var(--color-text-primary)]">
                                Paris, France
                            </h4>
                            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                                From ₦1,200,000
                            </p>
                            <div className="flex items-center gap-2 mt-3">
                                <span className="text-xs bg-[var(--color-navy-100)] text-[var(--color-text-primary)] px-2 py-1 rounded">
                                    7 Days
                                </span>
                                <span className="text-xs bg-[var(--color-navy-100)] text-[var(--color-text-primary)] px-2 py-1 rounded">
                                    Romantic
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                        <div className="relative h-48">
                            <img
                                src="https://images.unsplash.com/photo-1534430480872-3498386e7856?w=400&h=300&fit=crop"
                                alt="Maldives"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-3 right-3 bg-[var(--color-orange-500)] text-white text-xs font-bold px-2 py-1 rounded">
                                20% OFF
                            </div>
                        </div>
                        <div className="p-4 bg-white">
                            <h4 className="font-semibold text-[var(--color-text-primary)]">
                                Maldives
                            </h4>
                            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                                From ₦2,500,000
                            </p>
                            <div className="flex items-center gap-2 mt-3">
                                <span className="text-xs bg-[var(--color-navy-100)] text-[var(--color-text-primary)] px-2 py-1 rounded">
                                    10 Days
                                </span>
                                <span className="text-xs bg-[var(--color-navy-100)] text-[var(--color-text-primary)] px-2 py-1 rounded">
                                    Luxury
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Info Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Info & Stat Cards
                </h3>
                <div className="grid grid-cols-3 gap-4">
                    <div className="p-5 bg-gradient-to-br from-[var(--color-navy-700)] to-[var(--color-navy-600)] rounded-xl text-white">
                        <p className="text-sm text-[var(--color-sky-300)] mb-1">
                            Total Bookings
                        </p>
                        <p className="text-3xl font-bold">2,847</p>
                        <p className="text-xs text-[var(--color-sky-300)] mt-2">
                            ↑ 12% from last month
                        </p>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-[var(--color-yellow-500)] to-[var(--color-orange-500)] rounded-xl">
                        <p className="text-sm text-[var(--color-text-primary)] opacity-70 mb-1">
                            Revenue
                        </p>
                        <p className="text-3xl font-bold text-[var(--color-text-primary)]">
                            ₦45.2M
                        </p>
                        <p className="text-xs text-[var(--color-text-primary)] opacity-70 mt-2">
                            ↑ 8% from last month
                        </p>
                    </div>
                    <div className="p-5 bg-white border-2 border-[var(--color-sky-300)] rounded-xl">
                        <p className="text-sm text-[var(--color-text-secondary)] mb-1">
                            Active Trips
                        </p>
                        <p className="text-3xl font-bold text-[var(--color-text-primary)]">
                            156
                        </p>
                        <p className="text-xs text-[var(--color-ocean-500)] mt-2">
                            Currently traveling
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
