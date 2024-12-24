import { Calendar, Users } from 'lucide-react';

export default function FlightInfo({ date, passengers, className = '' }) {
    const InfoItem = ({ icon: Icon, text }) => (
        <div className="flex items-center gap-1.5 py-1 rounded-md">
            <Icon className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
            <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300">{text}</span>
        </div>
    );

    return (
        <div className={`flex items-center justify-between ${className}`}>
            <div className="flex items-center gap-2">
                <InfoItem icon={Calendar} text={date}/>
            </div>
            <InfoItem icon={Users} text={passengers}/>
        </div>
    );
}