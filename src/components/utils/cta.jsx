import BookFlightForm from "@/components/forms/book-flight";
import BookHotelForm from "@/components/forms/book-hotel";
import { usePathname } from "next/navigation";
import {useState} from "react";
export default function CTA() {
  const [tabIndex, setIndex] = useState(0);
  const tabs = [
    { id: "/admin", label: "Flight" },
    { id: "/hotels", label: "Hotels" },
    { id: "/cars", label: "Cars" },
    { id: "/visa", label: "Visa" },
    { id: "/packages", label: "Packages" }
  ];
  return (
      <div className="bg-white dark:bg-black mx-auto max-w-7xl overflow-hidden rounded-b-[30px] border rounded-2xl">
          <div className="dark:bg-black max-w-7xl mx-auto overflow-hidden">
            <div className="flex flex-col sm:flex-row rounded-t-2xl overflow-hidden">
              {tabs.map((tab, index) => (
                <div key={tab.id} className="w-full">
                    <button key={tab.id} onClick={() => setIndex(index)}
                      className={`search-tab-item ${tabIndex === index && "search-tab-active"}`}>
                      {tab.label}
                    </button>
                </div>
              ))}
            </div>
            <div>
              {tabIndex === 0 && <BookFlightForm />}
              {tabIndex === 1 && <BookHotelForm />}
              {tabIndex === 2 && <></>}
              {tabIndex === 3 && <></>}
              {tabIndex === 4 && <></>}
            </div>
          </div>
    </div>
  );
}
