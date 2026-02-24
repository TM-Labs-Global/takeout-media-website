"use client";

import { Search } from "lucide-react";

export default function FloatingSearch() {
    return (
        <button
            className="fixed left-8 bottom-8 z-40 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-lg hover:bg-brand-orange-500 hover:text-white transition-all duration-300 group"
            aria-label="Search"
        >
            <Search size={20} className="group-hover:scale-110 transition-transform" />
        </button>
    );
}
