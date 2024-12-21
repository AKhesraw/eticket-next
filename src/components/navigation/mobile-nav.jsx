import {
  Plane,
  Hotel,
  Car,
  Package,
  UserPlus,
  FileText,
  Wallet,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
export default function MobileNav({ isOpen, onClose }) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-80">
        <SheetHeader className="border-b pb-4">
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-full mt-4">
          <div className="space-y-4">
            <div className="space-y-1.5">
              <div className="text-sm font-medium text-muted-foreground">
                Bookings
              </div>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Plane className="h-4 w-4" />
                Flight Reservations
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Hotel className="h-4 w-4" />
                Hotel Bookings
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Car className="h-4 w-4" />
                Car Rentals
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Car className="h-4 w-4" />
                Car Rentals
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Package className="h-4 w-4" />
                Package Deals
              </Button>
            </div>
            <div className="space-y-1.5">
              <div className="text-sm font-medium text-muted-foreground">
                Management
              </div>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <UserPlus className="h-4 w-4" />
                Customers
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <FileText className="h-4 w-4" />
                Invoices
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Wallet className="h-4 w-4" />
                Payments
              </Button>
            </div>
            <div className="space-y-1.5">
              <div className="text-sm font-medium text-muted-foreground">
                Reports
              </div>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <BarChart3 className="h-4 w-4" />
                Analytics
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <TrendingUp className="h-4 w-4" />
                Performance
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <TrendingUp className="h-4 w-4" />
                Performance
              </Button>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
