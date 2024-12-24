"use client";
import MainNav from "@/components/navigation/main-nav";
import BreadCrumbs from "@/components/utils/bread-crumbs";
import CTA from "@/components/utils/cta";
import RecentSearchCard from "@/components/cards/recent-search-card/flight-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
// Sample data
const bookings = [
  {
    departure: {
      code: 'KBL',
      city: 'Kabul'
    },
    arrival: {
      code: 'KBL',
      city: 'Kabul'
    },
    date: '2021-01-01',
    flightClass: 'Economy',
    passengers: 2,
  },
  {
    departure: {
      code: 'KBL',
      city: 'Kabul'
    },
    arrival: {
      code: 'KBL',
      city: 'Kabul'
    },
    date: '2021-01-01',
    flightClass: 'Economy',
    passengers: 2,
  },
  {
    departure: {
      code: 'KBL',
      city: 'Kabul'
    },
    arrival: {
      code: 'KBL',
      city: 'Kabul'
    },
    date: '2021-01-01',
    flightClass: 'Economy',
    passengers: 2,
  },
  {
    departure: {
      code: 'KBL',
      city: 'Kabul'
    },
    arrival: {
      code: 'KBL',
      city: 'Kabul'
    },
    date: '2021-01-01',
    flightClass: 'Economy',
    passengers: 2,
  },
  {
    departure: {
      code: 'KBL',
      city: 'Kabul'
    },
    arrival: {
      code: 'KBL',
      city: 'Kabul'
    },
    date: '2021-01-01',
    flightClass: 'Economy',
    passengers: 2,
  },
  {
    departure: {
      code: 'KBL',
      city: 'Kabul'
    },
    arrival: {
      code: 'KBL',
      city: 'Kabul'
    },
    date: '2021-01-01',
    flightClass: 'Economy',
    passengers: 2,
  },

];
export default function Dashboard() {

  return (
    <div>
      <header className="sticky top-0 z-50 bg-white">
        <MainNav />
        <BreadCrumbs links={[{ label: "Search", route: "/search", current: true }]}/>
      </header>
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <Carousel opts={{slidesToScroll: 4}}>
          <CarouselContent className="py-6 px-2">
            {
              bookings.map((booking, index) => (
                  <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <RecentSearchCard flight={booking} />
                  </CarouselItem>
              ))
            }
          </CarouselContent>
          <div className="mt-6 flex items-center gap-x-2">
            <CarouselPrevious className="relative inset-0"/>
            <CarouselNext className="relative inset-0"/>
          </div>
        </Carousel>
        <CTA />
      </div>
    </div>
  );
}