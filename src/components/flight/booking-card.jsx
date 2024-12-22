import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import Link from "next/link";
  import { Plane } from "lucide-react";
  import { ArrowRight } from "lucide-react";
  export default function BookingCard({ title, value, description, link, icon = <Plane/> }) {
    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div className="flex items-center space-x-2">
            <CardTitle className="text-2xl font-bold dark:text-gray-300">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold flex items-center gap-2">
            {Number(value) >= 1000000
              ? `${(Number(value) / 1000000).toFixed(1)}M`
              : Number(value) >= 1000
              ? `${(Number(value) / 1000).toFixed(1)}k` 
              : value}
            {icon}
          </div>
          <p className="text-xs text-muted-foreground">
            {description}
          </p>
          <Link href={link} passHref>
            <button className="mt-4 bg-primary dark:bg-primary/80 text-gray-50 rounded-md px-4 py-2 font-semibold text-sm transition flex items-center gap-1 group">
              More
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </Link>
        </CardContent>
      </Card>
    );
  }
  