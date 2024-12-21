import { Plane } from "lucide-react";

export default function FlightCard({ flight }) {
  const { departure, arrival, cabinClass } = flight;

  return (
    <div className="border rounded-lg shadow-lg hover:shadow-md dark:shadow-none transition flex-1 bg-white dark:bg-slate-900 dark:hover:bg-slate-800">
      {/* Body */}
      <div className="p-4">
        {/* Dates */}
        <div className="flex justify-between items-center">
          <div className="flex gap-x-1 items-center">
            <Plane className="w-4" />
            <span className="text-xs dark:text-gray-400">{departure.dateTime}</span>
          </div>
          <div className="flex gap-x-1 items-center">
            <span className="text-xs dark:text-gray-400">{arrival.dateTime}</span>
            <Plane className="w-4 rotate-90" />
          </div>
        </div>
        {/* Locations */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center text-center">
            <h4 className="font-bold text-2xl text-primary dark:text-gray-200">{departure.code}</h4>
            <span className="text-xs font-light dark:text-gray-400">{departure.city}</span>
          </div>
          <div className="bg-gray-100 dark:bg-slate-700 rounded p-1 text-xs self-start">
            {cabinClass}
          </div>
          <div className="flex flex-col items-center text-center">
            <h4 className="font-bold text-2xl text-primary dark:text-gray-200">{arrival.code}</h4>
            <span className="text-xs font-light dark:text-gray-400">{arrival.city}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
