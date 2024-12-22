import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";

export function DatePickerWithRange({
  className,
  date,
  setDate,
  mode = "range",
  width = "[300px]",
  monthsShown,
}) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              `sm:w-${width} w-full justify-start text-left font-normal`,
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              mode === "range" ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="center">
          <Calendar
            initialFocus
            mode={mode}
            defaultMonth={date?.from}
            selected={date}
            onSelect={(newDate) => {
              if (mode === "single") {
                setDate({ from: newDate, to: null });
              } else {
                setDate(newDate);
              }
            }}
            numberOfMonths={monthsShown}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
