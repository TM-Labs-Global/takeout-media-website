"use client";

import { Plane, MoreHorizontal, ChevronLeft, ChevronRight, Filter, Sliders } from "lucide-react";

export function DataTablesShowcase() {
    const tableData = [
        { id: 'JT-7281', traveler: 'Adebayo Chen', destination: 'Tokyo, Japan', date: 'Oct 24, 2026', amount: '₦1,450,000', status: 'Confirmed' },
        { id: 'JT-7282', traveler: 'Sarah Ibrahim', destination: 'London, UK', date: 'Oct 26, 2026', amount: '₦980,000', status: 'Pending' },
        { id: 'JT-7283', traveler: 'Chidi Okafor', destination: 'Dubai, UAE', date: 'Oct 28, 2026', amount: '₦1,200,000', status: 'Cancelled' },
        { id: 'JT-7284', traveler: 'Emeka Nwosu', destination: 'Paris, France', date: 'Nov 02, 2026', amount: '₦2,100,000', status: 'Confirmed' },
    ];

    return (
        <section className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Data Tables</h2>
                <p className="text-gray-600">Complex data representation for admin and booking management.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Table Toolbar */}
                <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">
                            <Filter className="w-4 h-4 text-gray-500" />
                            Filter
                        </button>
                        <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">
                            <Sliders className="w-4 h-4 text-gray-500" />
                            Sort
                        </button>
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                        Displaying 4 of 128 bookings
                    </div>
                </div>

                {/* Table Content */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50">
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest border-b border-gray-100">Booking ID</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest border-b border-gray-100">Traveler</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest border-b border-gray-100">Destination</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest border-b border-gray-100">Travel Date</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest border-b border-gray-100">Amount</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest border-b border-gray-100">Status</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest border-b border-gray-100"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {tableData.map((row) => (
                                <tr key={row.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <span className="font-mono text-xs font-bold text-[var(--color-navy-700)] bg-[var(--color-navy-50)] px-2 py-1 rounded">
                                            {row.id}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[var(--color-sky-300)] flex items-center justify-center text-[var(--color-navy-900)] font-bold text-xs">
                                                {row.traveler.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <span className="font-semibold text-gray-900">{row.traveler}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 text-sm">{row.destination}</td>
                                    <td className="px-6 py-4 text-gray-600 text-sm">{row.date}</td>
                                    <td className="px-6 py-4 font-bold text-gray-900 text-sm">{row.amount}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase border ${row.status === 'Confirmed' ? 'bg-[var(--color-success-bg)] text-[var(--color-success-800)] border-[var(--color-border-success)]' :
                                                row.status === 'Pending' ? 'bg-[var(--color-warning-bg)] text-[var(--color-warning-800)] border-[var(--color-border-warning)]' :
                                                    'bg-[var(--color-error-bg)] text-[var(--color-error-800)] border-[var(--color-border-error)]'
                                            }`}>
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                            <MoreHorizontal className="w-4 h-4 text-gray-400" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Table Pagination */}
                <div className="p-4 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-sm text-gray-500">Page 1 of 32</p>
                    <div className="flex gap-2">
                        <button className="p-2 border border-gray-200 rounded-lg disabled:opacity-30" disabled>
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button className="px-3 py-1 bg-[var(--color-navy-100)] text-[var(--color-navy-900)] rounded-lg text-sm font-bold">1</button>
                        <button className="px-3 py-1 text-gray-500 text-sm font-medium">2</button>
                        <button className="px-3 py-1 text-gray-500 text-sm font-medium">3</button>
                        <button className="p-2 border border-gray-200 rounded-lg">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
