import { Calendar, Users } from 'lucide-react';

export default function FlightInfo({ flightClass, date, passengers, className = '' }) {
    const InfoItem = ({ icon: Icon, text }) => (
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md">
            <Icon className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
            <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300">{text}</span>
        </div>
    );

    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <div
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500/10 to-cyan-400/10 dark:from-cyan-500/20 dark:to-cyan-400/20 text-cyan-600 dark:text-cyan-400">
                {flightClass}
            </div>
            <InfoItem icon={Calendar} text={date}/>
            <InfoItem icon={Users} text={passengers}/>
        </div>
    );
}