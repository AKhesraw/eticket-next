
import { TotalPieChart } from "@/components/ui/charts/pie-chart";
import { RadialChart } from "@/components/ui/charts/radial-chart";
import { LinearChart } from "@/components/ui/charts/linear-chart";
import BookingCard from "@/components/flight/booking-card";

import { Overview } from "@/components/ui/charts/overview-chart";
import { Input } from "@/components/ui/input";
import QuickLinks from "@/components/navigation/quick-links";
import QuickLinkItem from "@/components/navigation/quick-link-item";
export default function DashboardPage() {
  return (
    <div className="flex gap-8">
      {/* Quick Links Sidebar */}
      <QuickLinks searchInput={<Input type="search" placeholder="Search..." />}>
        <QuickLinkItem href="/admin/dashboard/bookings">Confirmed Bookings</QuickLinkItem>
        <QuickLinkItem href="/admin/dashboard/bookings">Pending Bookings</QuickLinkItem>
        <QuickLinkItem href="/admin/dashboard/bookings">Cancelled Bookings</QuickLinkItem>
      </QuickLinks>


      {/* Main Content */}
      <div className="flex-1 space-y-4 ml-64 overflow-y-auto">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <BookingCard title="Flight Bookings" value="23" description="Total bookings this month" link="/admin/dashboard/bookings"/>
          <BookingCard title="Hotel Bookings" value="32" description="Total hotel stays booked" link="/admin/dashboard/bookings"/>
          <BookingCard title="Cart Rentals" value="324" description="Active cart rentals" link="/admin/dashboard/bookings"/>
          <BookingCard title="Room Rentals" value="90333" description="Rooms currently rented" link="/admin/dashboard/bookings"/>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
          <div className="col-span-4">
            <LinearChart />
          </div>
          <div className="col-span-4">
            <Overview />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <div className="col-span-2">
            <RadialChart />
          </div>
          <div className="col-span-2">
            <RadialChart />
          </div>
          <div className="col-span-3">
            <TotalPieChart />
          </div>
        </div>
      </div>
    </div>
  );
}
