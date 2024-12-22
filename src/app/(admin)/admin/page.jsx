"use client";

import MainNav from "@/components/navigation/main-nav";
import BreadCrumbs from "@/components/utils/bread-crumbs";
import CTA from "@/components/utils/cta";
import { Plane, Hotel, Car, Calendar, Users } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Sample data
const bookings = [
  {
    id: 1,
    type: "flight",
    title: "London to New York",
    date: "Dec 24, 2023",
    guests: "2 passengers",
    amount: "$1,200",
    status: "Confirmed",
  },
  {
    id: 2,
    type: "hotel",
    title: "Grand Hotel Manhattan",
    date: "Dec 24-29, 2023",
    guests: "2 guests",
    amount: "$2,400",
    status: "Pending",
  },
  {
    id: 3,
    type: "car",
    title: "SUV - New York City",
    date: "Dec 24-29, 2023",
    guests: "1 vehicle",
    amount: "$400",
    status: "Confirmed",
  },
  {
    id: 4,
    type: "flight",
    title: "New York to Paris",
    date: "Jan 15, 2024",
    guests: "1 passenger",
    amount: "$800",
    status: "Confirmed",
  },
]
export default function Dashboard() {

  return (
    <div>
      <header className="sticky top-0 z-50 bg-white">
        <MainNav />
        <BreadCrumbs links={[{ label: "Search", route: "/search", current: true }]}/>
      </header>
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <Card className="shadow-none">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <CardTitle>Recent Bookings</CardTitle>
                <CardDescription>Latest travel arrangements</CardDescription>
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Bookings</SelectItem>
                  <SelectItem value="flights">Flights</SelectItem>
                  <SelectItem value="hotels">Hotels</SelectItem>
                  <SelectItem value="cars">Cars</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="flex items-center gap-4 rounded-lg border p-3">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    {booking.type === "flight" && <Plane className="h-4 w-4" />}
                    {booking.type === "hotel" && <Hotel className="h-4 w-4" />}
                    {booking.type === "car" && <Car className="h-4 w-4" />}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="font-medium">{booking.title}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {booking.date}
                      <Users className="h-3 w-3" />
                      {booking.guests}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{booking.amount}</p>
                    <p className="text-sm text-muted-foreground">
                      {booking.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <CTA />
      </div>
    </div>
  );
}