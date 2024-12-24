'use client'

import { useState } from "react";
import ThemeSwitcher from "@/components/theme/theme-switcher";
import NavItem from "@/components/navigation/nav-item";
import MobileNav from "@/components/navigation/mobile-nav";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  User,
  LogOut,
  Settings,
  LayoutDashboard,
  Search,
  Hotel,
  Package,
  Car,
  BarChart3,
  Wallet,
  Calendar,
  Menu,
} from "lucide-react";
import {usePathname} from "next/navigation";
export const menuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin/dashboard"
  },
  {
    label: "Search",
    icon: Search,
    href: "/admin"
  },
  {
    label: "Bookings",
    icon: Calendar,
    items: [
      {
        label: "New Booking",
        href: "/bookings/new",
        description: "description",
        icon: BarChart3,
      },
      {
        label: "Manage Bookings",
        href: "/bookings/manage",
        description: "description",
        icon: BarChart3,
      },
      {
        label: "Group Bookings",
        href: "/bookings/group",
        description: "description",
        icon: BarChart3,
      },
      {
        label: "Booking Calendar",
        href: "/bookings/calendar",
        description: "description",
        icon: BarChart3,
      },
    ],
  },
  {
    label: "Finance",
    icon: Wallet,
    items: [
      {
        label: "Transactions",
        href: "/finance/transactions",
        description: "description",
        icon: BarChart3,
      },
      {
        label: "Invoices",
        href: "/finance/invoices",
        description: "description",
        icon: BarChart3,
      },
      {
        label: "Payments",
        href: "/finance/payments",
        description: "description",
        icon: BarChart3,
      },
      {
        label: "Revenue",
        href: "/finance/revenue",
        description: "description",
        icon: BarChart3,
      },
    ],
  },
  {
    label: "Reports",
    icon: BarChart3,
    items: [
      {
        label: "Sales Reports",
        href: "/reports/sales",
        description: "description",
        icon: BarChart3,
      },
      {
        label: "Analytics",
        href: "/reports/analytics",
        description: "description",
        icon: BarChart3,
      },
      {
        label: "Performance",
        href: "/reports/performance",
        description: "description",
        icon: BarChart3,
      },
      {
        label: "Custom Reports",
        href: "/reports/custom",
        description: "description",
        icon: BarChart3,
      },
    ],
  },
  {
    label: "Hotels",
    icon: Hotel,
    items: [
      {
        label: "Find Hotels",
        href: "/hotels/search",
        description: "description",
        icon: BarChart3,
      },
      {
        label: "Popular Hotels",
        href: "/hotels/popular",
        description: "description",
        icon: BarChart3,
      },
      {
        label: "Hotel Partners",
        href: "/hotels/partners",
        description: "description",
        icon: BarChart3,
      },
      {
        label: "Deals",
        href: "/hotels/deals",
        description: "description",
        icon: BarChart3,
      },
    ],
  },
  {
    label: "Packages",
    icon: Package,
    items: [
      {
        label: "Holiday Packages",
        href: "/packages/holiday",
        description: "description",
        icon: BarChart3,
      },
      {
        label: "Custom Packages",
        href: "/packages/custom",
        description: "description",
        icon: BarChart3,
      },
      {
        label: "Group Tours",
        href: "/packages/group",
        description: "description",
        icon: BarChart3,
      },
      {
        label: "Seasonal Offers",
        href: "/packages/offers",
        description: "description",
        icon: BarChart3,
      },
    ],
  },
  {
    label: "Car Rentals",
    icon: Car,
    items: [
      {
        label: "Search Cars",
        href: "/cars/search",
        description: "description",
        icon: BarChart3,
      },
      {
        label: "Rental Companies",
        href: "/cars/companies",
        description: "description",
        icon: BarChart3,
      },
      {
        label: "Locations",
        href: "/cars/locations",
        description: "description",
        icon: BarChart3,
      },
      {
        label: "Insurance",
        href: "/cars/insurance",
        description: "description",
        icon: BarChart3,
      },
    ],
  },
];
export default function MainNav() {
  const location = usePathname()
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="relative border-b bg-white dark:bg-black">
        <div className="dark:hidden -z-0 absolute inset-0 bg-gradient-to-r from-white via-primary/5 to-white" />
      <nav className="bg-white dark:bg-black max-w-[1366px] mx-auto flex justify-end desktop:justify-between h-16 items-center px-6 desktop:px-10">
        {/* Main Navigation */}
        <div className="hidden desktop:flex desktop:items-center desktop:space-x-2">
          {menuItems.map((item) => (
            <NavItem key={item.label} item={item} active={item.href === location} />
          ))}
        </div>
        {/* Right side items */}
        <div className="flex items-center gap-2 z-20">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="dark:bg-black/40 relative rounded-full border overflow-hidden"
              >
                <User className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    Senior Travel Agent
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ThemeSwitcher />
          <Button
            onClick={() => setOpen(!isOpen)}
            variant="outline"
            size="icon"
            className="rounded-full flex desktop:hidden"
          >
            <Menu className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Toggle sheet</span>
          </Button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div>
        <MobileNav isOpen={isOpen} onClose={() => setOpen(false)} />
      </div>
    </div>
  );
}
