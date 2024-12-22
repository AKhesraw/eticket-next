import Link from "next/link";
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
    <div
      data-aos="fade-up"
      data-aos-mirror="true"
      data-aos-once="true"
      className="z-10"
    >
      <div className="mx-auto max-w-7xl bg-cover bg-center bg-no-repeat overflow-x-hidden">
          <div className="rounded-2xl rounded-b-[30px] border bg-background/70 max-w-7xl mx-auto overflow-hidden">
            <div className="flex flex-col sm:flex-row rounded-t-2xl">
              {tabs.map((tab) => (
                <div key={tab.id} className="w-full">
                  <Link href={tab.id} key={tab.id}>
                    <div
                      className={`w-full text-center rounded-t-2xl py-4 px-6 text-sm font-medium border-primary
                      ${
                        location === tab.id
                          ? "text-primary bg-background border-b-2 border-primary"
                          : "text-foreground hover:text-accent-foreground"
                      }`}
                    >
                      {tab.label}
                    </div>
                  </Link>
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
    </div>
  );
}
