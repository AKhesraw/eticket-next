import Link from "next/link";
import { ExternalLink } from 'lucide-react';
import AirportInfo from './airport-info';
import FlightPath from './flight-path';
import FlightInfo from './flight-info';

export default function FlightCard({ flight }) {
    return (
        <Link
            href="/"
            className="block bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] relative group"
        >
            {/* Link Indicator */}
            <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ExternalLink className="w-3.5 h-3.5 text-gray-400 dark:text-gray-300" />
            </div>

            <div className="p-4">
                {/* Class Badge */}
                <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500/10 to-cyan-400/10 dark:from-cyan-500/20 dark:to-cyan-400/20 text-cyan-600 dark:text-cyan-400">
                    {flight.class}
                </div>

                {/* Flight Route */}
                <div className="mt-4 space-y-6">
                    <div className="flex justify-between items-start">
                        <AirportInfo airport={flight.departure} type="departure" />
                        <AirportInfo airport={flight.arrival} type="arrival" align="right" />
                    </div>

                    <FlightPath />

                    <FlightInfo
                        date={flight.date}
                        duration={flight.duration}
                        passengers={flight.passengers}
                    />
                </div>
            </div>
        </Link>
    );
}