import { Clock, Calendar, Users } from 'lucide-react';

export default function FlightInfo({ date, duration, passengers, className = '' }) {
    const InfoItem = ({ icon: Icon, text }) => (
        <div className="flex items-center gap-1.5 bg-gradient-to-r from-cyan-50 to-blue-50/80 dark:from-cyan-900/30 dark:to-blue-900/30 px-2 py-1 rounded-md">
            <Icon className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
            <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300">{text}</span>
        </div>
    );

    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <InfoItem icon={Calendar} text={date} />
            <InfoItem icon={Clock} text={duration} />
            <InfoItem icon={Users} text={passengers} />
        </div>
    );
}