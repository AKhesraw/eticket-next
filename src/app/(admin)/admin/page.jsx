"use client";

import MainNav from "@/components/navigation/main-nav";
import FlightCard from "@/components/flight/flight-card";
import BreadCrumbs from "@/components/utils/bread-crumbs";
import CTA from "@/components/utils/cta";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
export default function Dashboard() {
  const flights = [1, 2, 3, 4, 5, 6, 7, 8];
  const flight = {
    airlineName: "KAMAIR",
    flightNumber: "101",
    departure: {
      city: "Kabul",
      code: "KBL",
      dateTime: "Aug 20",
    },
    arrival: {
      city: "Herat",
      code: "HEA",
      dateTime: "Aug 20",
    },
    cabinClass: "Economy",
    seatsAvailable: 9,
  };
  return (
    <div>
      <header className="sticky top-0 z-50 bg-white">
        <MainNav />
        <BreadCrumbs
          links={[{ label: "Search", route: "/search", current: true }]}
        />
      </header>
      <div className="max-w-7xl mx-auto">
        <div className="mt-4 p-4">
          <h2 className="text-xl font-semibold">Recent Searches</h2>
          <Carousel>
            <CarouselContent className="p-2">
              {flights.map((f) => (
                <CarouselItem
                  key={f}
                  className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <Link href="/">
                    <FlightCard flight={flight} />
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <CTA />
      </div>
    </div>
  );
}
