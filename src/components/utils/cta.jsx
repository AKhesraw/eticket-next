import BookFlightForm from "@/components/forms/book-flight";
import { usePathname } from "next/navigation";
export default function CTA() {
  const location = usePathname();
  const tabs = [
    { id: "/admin", label: "Flight" },
    { id: "/hotels", label: "Hotels" },
    { id: "/cars", label: "Cars" },
    { id: "/visa", label: "Visa" },
    { id: "/packages", label: "Packages" }
  ];
  return (
      <div className="bg-white dark:bg-black mx-auto max-w-7xl overflow-hidden border rounded-2xl">
          <div className="rounded-b-[30px]  dark:bg-black max-w-7xl mx-auto overflow-hidden">
            <div className="flex flex-col sm:flex-row rounded-t-2xl overflow-hidden">
              {tabs.map((tab) => (
                <div key={tab.id} className="w-full">
                    <button key={tab.id}
                      className={`search-tab-item ${location === tab.id && "search-tab-active"}`}>
                      {tab.label}
                    </button>
                </div>
              ))}
            </div>
            <div>
              {location === "/admin" && <BookFlightForm />}
              {location === "/hotels" && <></>}
              {location === "/cars" && <></>}
              {location === "/visa" && <></>}
              {location === "/packages" && <></>}
            </div>
          </div>
    </div>
  );
}
