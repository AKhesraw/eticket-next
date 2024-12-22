import Link from "next/link";
import BookFlightForm from "@/components/forms/book-flight";
import { usePathname } from "next/navigation";
export default function CTA() {
  const location = usePathname();
  const tabs = [{ id: "/admin", label: "Flight" }];
  return (
    <div
      data-aos="fade-up"
      data-aos-mirror="true"
      data-aos-once="true"
      className="z-10"
    >
      <div className="mx-auto max-w-7xl bg-cover bg-center px-6 pb-6 bg-no-repeat overflow-x-hidden">
        <div className=" sm:mt-4 mt-6 lg:mt-[18px]">
          <div className="">
            <div className="rounded-2xl rounded-b-[30px] border bg-background/70 shadow-md max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row rounded-t-2xl bg-gray-200">
                {tabs.map((tab) => (
                  <div key={tab.id} className="w-full">
                    <Link
                      href={tab.id}
                      key={tab.id}
                      className="w-full sm:w-auto"
                    >
                      <button
                        className={`w-full text-left sm:text-center rounded-t-2xl py-4 px-6 text-base sm:text-sm font-medium border-border sm:border-primary
                        ${
                          location === tab.id
                            ? "text-primary bg-background border-b-2 border-primary"
                            : "text-foreground hover:text-accent-foreground dark:text-black"
                        }`}
                      >
                        {tab.label}
                      </button>
                      <div className="block sm:hidden">
                        {location === "/" && <BookFlightForm />}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="hidden sm:block">
                {location === "/admin" && <BookFlightForm />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
