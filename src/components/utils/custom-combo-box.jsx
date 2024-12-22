import { useEffect, useState } from "react";
import { Check, ChevronsUpDown, Loader2 } from "lucide-react";
import InfiniteScroll from "@/components/ui/infinite-scroll";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function ComboBox({
  frameworks,
  value,
  setValue,
  width,
  placeholder,
  buttonSearch = true,
  dropdownWidth = 230,
  onLoadMore,
}) {
  const [open, setOpen] = useState(false);
  const [displayedFrameworks, setDisplayedFrameworks] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const ITEMS_PER_PAGE = 20;

  // Reset when closed
  useEffect(() => {
    if (!open) {
      setDisplayedFrameworks([]);
      setPage(0);
      setHasMore(true);
    }
  }, [open]);

  const loadMore = async () => {
    setIsLoading(true);

    // Simulate network delay
    setTimeout(() => {
      const startIndex = page * ITEMS_PER_PAGE;
      const nextItems = frameworks.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
      );

      setDisplayedFrameworks((prev) => [...prev, ...nextItems]);
      setPage((prev) => prev + 1);

      // Check if we've reached the end of the data
      if (
        nextItems.length < ITEMS_PER_PAGE ||
        startIndex + ITEMS_PER_PAGE >= frameworks.length
      ) {
        setHasMore(false);
      }

      setIsLoading(false);

      if (onLoadMore) {
        onLoadMore(page + 1);
      }
    }, 300);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`w-${width} justify-between`}
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.value
            : `Select ${placeholder}`}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={`sm:w-[${dropdownWidth}px] w-[300px] p-0`}>
        <Command>
          {buttonSearch && (
            <CommandInput placeholder={`Search ${placeholder}...`} />
          )}
          <CommandList className="max-h-[300px] overflow-y-auto">
            <CommandEmpty>No Data found.</CommandEmpty>
            <CommandGroup
              heading={buttonSearch ? undefined : placeholder}
              className={cn(buttonSearch ? "" : "mt-2", "mb-[1px] w-2xl")}
            >
              {displayedFrameworks.map((framework, index) => (
                <CommandItem
                  key={framework.id}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    const selectedFramework = frameworks.find(
                      (f) => f.id === currentValue || f.value === currentValue
                    );
                    if (selectedFramework) {
                      setValue(
                        currentValue === value
                          ? ""
                          : {
                              id: selectedFramework.id,
                              value: selectedFramework.value,
                            }
                      );
                    } else {
                      console.warn("No matching found for:", currentValue);
                      setValue({ id: null, value: "" });
                    }
                    setOpen(false);
                  }}
                  className={cn(
                    index === frameworks.length - 1 ? "rounded-b-3xl" : "",
                    buttonSearch ? "" : "py-3 mt-2",
                    index === 0 && !buttonSearch
                      ? "border-t border-gray-300"
                      : ""
                  )}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.value}
                </CommandItem>
              ))}

              <InfiniteScroll
                hasMore={hasMore}
                isLoading={isLoading}
                next={loadMore}
                threshold={0.5}
              >
                <div className="w-full py-2 text-center text-sm text-gray-600 flex items-center justify-center gap-2">
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </>
                  ) : hasMore ? (
                    "Scroll for more"
                  ) : null}
                </div>
              </InfiniteScroll>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

const Passenger = ({
  width,
  passengerCounts,
  setPassengerCounts,
  placeholder,
  heading,
}) => {
  const [open, setOpen] = React.useState(false);

  const incrementPassenger = (type) => {
    setPassengerCounts((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const decrementPassenger = (type) => {
    if (passengerCounts[type] > 0) {
      setPassengerCounts((prev) => ({ ...prev, [type]: prev[type] - 1 }));
    }
  };

  const totalPassengers = passengerCounts.adults + passengerCounts.children;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`w-${width} justify-between`}
        >
          {`${totalPassengers} ${
            totalPassengers === 1 ? "Passenger" : "Passengers"
          }`}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="sm:w-[230px] w-[300px] p-0">
        <Command>
          <CommandList>
            <CommandGroup className="mt-2 text-lg " heading={heading}>
              {["adults", "children", "infants"].map((type) => (
                <CommandItem
                  className="pt-3 mt-2 border-t rounded-none data-[selected='true']:bg-transparent border-gray-300"
                  key={type}
                >
                  <div className="flex items-center  justify-between w-full ">
                    <span className="capitalize">{type}</span>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        onClick={() => decrementPassenger(type)}
                        disabled={
                          passengerCounts[type] === 0 ||
                          (type == "adults" && passengerCounts.adults < 2)
                        }
                        size="sm"
                        className="w-8 h-8 pb-1 text-lg align-middle"
                      >
                        -
                      </Button>
                      <span>{passengerCounts[type]}</span>
                      <Button
                        onClick={() => incrementPassenger(type)}
                        size="sm"
                        className="w-8 h-8 pb-1 text-lg"
                        disabled={
                          (type === "children" &&
                            (passengerCounts[type] > 5 ||
                              totalPassengers > 8)) ||
                          (type === "infants" && passengerCounts[type] > 2) ||
                          (type === "adults" && totalPassengers > 8)
                        }
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </CommandItem>
              ))}
              <CommandItem className="data-[selected='true']:bg-transparent">
                <Button
                  className="w-full rounded-full "
                  onClick={() => setOpen(false)}
                >
                  Submit
                </Button>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const Classes = ({ classes, value, setValue }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="sm:w-[230px] w-[300px]  justify-between"
        >
          {value
            ? classes.find((classs) => classs.label == value)?.label
            : "Select class..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="sm:w-[230px] w-[300px]  p-0">
        <Command>
          {/* <CommandInput placeholder="Type a command or search..." /> */}
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
            {/* <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>Profile</CommandItem>
      <CommandItem>Billing</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup> */}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export { ComboBox, Passenger, Classes };
