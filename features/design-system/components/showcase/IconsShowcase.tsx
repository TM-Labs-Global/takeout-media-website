"use client";

import {
    Plane,
    Hotel,
    Ship,
    FileText,
    GraduationCap,
    Shield,
    Calendar,
    ShoppingBag,
    MapPin,
    ChevronRight,
    User,
    Search,
    Menu,
    Bell,
    Check,
    AlertCircle,
    Info,
    X,
    Compass,
    Globe,
    Ticket,
    Palmtree,
    Car,
} from "lucide-react";

export function IconsShowcase() {
    const iconGroups = [
        {
            name: "Brand & Primary",
            icons: [
                { Icon: Plane, label: "Flights" },
                { Icon: Hotel, label: "Hotels" },
                { Icon: Ship, label: "Cargo" },
                { Icon: Compass, label: "Discovery" },
                { Icon: Globe, label: "International" },
                { Icon: Palmtree, label: "Holidays" },
            ],
        },
        {
            name: "Services",
            icons: [
                { Icon: FileText, label: "Visa" },
                { Icon: GraduationCap, label: "Study" },
                { Icon: Shield, label: "Insurance" },
                { Icon: Ticket, label: "Events" },
                { Icon: Car, label: "Protocol" },
                { Icon: ShoppingBag, label: "Shop" },
            ],
        },
        {
            name: "UI & Navigation",
            icons: [
                { Icon: Search, label: "Search" },
                { Icon: Menu, label: "Menu" },
                { Icon: User, label: "Account" },
                { Icon: Bell, label: "Alerts" },
                { Icon: ChevronRight, label: "Arrow" },
                { Icon: MapPin, label: "Location" },
                { Icon: Calendar, label: "Dates" },
            ],
        },
        {
            name: "Feedback",
            icons: [
                { Icon: Check, label: "Success" },
                { Icon: AlertCircle, label: "Error" },
                { Icon: Info, label: "Info" },
                { Icon: X, label: "Close" },
            ],
        },
    ];

    return (
        <section className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Icon Library</h2>
                <p className="text-gray-600">
                    Core iconography used across the plateforme from Lucide React.
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-10">
                {iconGroups.map((group) => (
                    <div key={group.name}>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                            {group.name}
                        </h3>
                        <div className="grid grid-cols-6 gap-6">
                            {group.icons.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[var(--color-navy-100)] transition-colors group"
                                >
                                    <item.Icon className="w-8 h-8 text-[var(--color-text-secondary)] group-hover:text-[var(--color-action-secondary)]" />
                                    <span className="text-xs font-medium text-gray-500">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="p-4 bg-[var(--color-ocean-100)] rounded-lg">
                    <p className="text-sm text-[var(--color-ocean-800)]">
                        <strong>Usage Note:</strong> Icons should generally use{" "}
                        <code className="bg-white/50 px-1 rounded">
                            color-text-secondary
                        </code>{" "}
                        for default states and shift to brand colors for interactive or
                        brand-critical moments.
                    </p>
                </div>
            </div>
        </section>
    );
}
