import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

export default function AirportInfo({ airport, type, align = 'left' }) {
    const Icon = type === 'departure' ? ArrowUpRight : ArrowDownLeft;

    return (
        <div className={`flex flex-col ${align === 'right' ? 'items-end' : 'items-start'}`}>
            <div className={`flex items-center gap-2 ${align === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
                <span className="text-2xl font-bold text-gray-800 dark:text-gray-100">{airport.code}</span>
                <div className="h-6 w-[1px] bg-gray-200 dark:bg-gray-600" />
                <div className="w-5 h-5 rounded-full bg-cyan-50 dark:bg-cyan-900/50 flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" strokeWidth={2.5} />
                </div>
            </div>
            <span className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{airport.city}</span>
        </div>
    );
}