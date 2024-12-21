import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return (
    (<DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-4 mx-6", className)} // Increased padding
      classNames={{
        months: "flex flex-col sm:flex-row  space-y-6 sm:space-x-6 sm:space-y-0", // Increased spacing
        month: "space-y-6", // Increased spacing
        caption: "flex justify-center pt-2 relative items-center", // Increased top padding
        caption_label: "text-base font-medium", // Increased font size
        nav: "space-x-2 flex items-center", // Increased spacing
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-9 w-9 bg-transparent p-0 opacity-50 hover:opacity-100" // Increased button size
        ),
        nav_button_previous: "absolute left-2", // Adjusted position
        nav_button_next: "absolute right-2", // Adjusted position
        table: "w-full border-collapse space-y-2", // Increased spacing
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-12 font-normal text-[1rem]", // Increased width and font size
        row: "flex w-full mt-3", // Increased margin
        cell: "h-12 w-12 text-center text-base p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20", // Increased height, width, and font size
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-12 w-12 p-0 font-normal aria-selected:opacity-100" // Increased height and width
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-5 w-5" />, // Increased icon size
        IconRight: ({ ...props }) => <ChevronRight className="h-5 w-5" />, // Increased icon size
      }}
      {...props} />)
  );
}
Calendar.displayName = "Calendar"

export { Calendar }
