import { Plane } from 'lucide-react';

export default function FlightPath() {
    return (
        <div className="relative flex items-center w-full my-6">
            {/* Connection Line */}
            <div className="absolute w-full h-[2px] bg-gradient-to-r from-cyan-500/20 via-cyan-500/40 to-cyan-500/20 dark:from-cyan-400/20 dark:via-cyan-400/40 dark:to-cyan-400/20" />

            {/* Plane Container */}
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
                <div className="relative">
                    {/* Decorative circles */}
                    <div className="absolute inset-0 rounded-full bg-cyan-100 dark:bg-cyan-900 animate-pulse" />
                    <div className="relative bg-white dark:bg-gray-800 rounded-full p-2 shadow-md">
                        <Plane className="w-4 h-4 text-cyan-500 dark:text-cyan-400 rotate-45" />
                    </div>
                </div>
            </div>

            {/* Airport Indicators */}
            <div className="absolute left-0 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 dark:from-cyan-400 dark:to-cyan-300 shadow-md" />
            <div className="absolute right-0 w-3 h-3 rounded-full bg-gradient-to-l from-cyan-500 to-cyan-400 dark:from-cyan-400 dark:to-cyan-300 shadow-md" />
        </div>
    );
}