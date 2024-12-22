import { useState, useEffect } from "react";
import { addDays } from "date-fns";
import { Passenger } from "@/components/utils/combo-box";
import { ComboBox } from "@/components/utils/custom-combo-box";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { DatePickerWithRange } from "@/components/utils/date-picker-with-range";
import { ArrowRightLeft, Plus, X } from "lucide-react";
import Papa from "papaparse";
import { motion, AnimatePresence } from "framer-motion";

export default function BookFlightForm() {
  const [tripType, setTripType] = useState("round-trip");
  const [dateRange, setDateRange] = useState({
    from: new Date(),
    to: addDays(new Date(), 7),
  });
  const [from, setFrom] = useState({ id: null, value: "" });
  const [to, setTo] = useState({ id: null, value: "" });
  const [passengerCounts, setPassengerCounts] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const [travelClass, setTravelClass] = useState({
    id: null,
    value: "Economy",
  });
  const [showPromoInput, setShowPromoInput] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [multiCityFlights, setMultiCityFlights] = useState([
    {
      from: { id: null, value: null },
      to: { id: null, value: null },
      date: new Date(),
    },
  ]);
  const [airports, setAirports] = useState([]);
  const [displayedAirports, setDisplayedAirports] = useState([]);

  const handleSwapLocations = (index) => {
    if (tripType === "multi-city") {
      const newFlights = [...multiCityFlights];
      const temp = newFlights[index].from;
      newFlights[index].from = newFlights[index].to;
      newFlights[index].to = temp;
      setMultiCityFlights(newFlights);
    } else {
      setFrom(to);
      setTo(from);
    }
  };

  useEffect(() => {
    if (tripType === "one-way") {
      setDateRange({ from: new Date(), to: null });
    } else {
      setDateRange({
        from: new Date(),
        to: addDays(new Date(), 7),
      });
    }
  }, [tripType]);

  const fetchAirways = async () => {
    try {
      const response = await fetch("/assets/data/airports.csv");
      const csvText = await response.text();

      return new Promise((resolve) => {
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            const filteredAirports = results.data
              .filter(
                (airport) =>
                  airport.type &&
                  ["medium_airport", "large_airport"].includes(airport.type) &&
                  airport.iata_code &&
                  airport.municipality
              )
              .map((airport) => ({
                id: airport.id,
                value: `${airport.municipality} (${airport.iata_code})`,
                iata: airport.iata_code,
                city: airport.municipality,
                country: airport.iso_country,
              }));
            resolve(filteredAirports);
          },
        });
      });
    } catch (error) {
      console.error("Error loading airports:", error);
      return [];
    }
  };

  useEffect(() => {
    const loadInitialAirports = async () => {
      const airportsData = await fetchAirways();
      setAirports(airportsData);
      setDisplayedAirports(airportsData.slice(0, 20));
    };
    loadInitialAirports();
  }, []);

  const handleLoadMore = (page) => {
    // This function will be called when more items need to be loaded
    console.log(`Loading page ${page}`);
    // You can implement additional data fetching here if needed
  };

  const fromOptions = airports;
  const toOptions = airports;
  const classes = [
    { id: 1, value: "Economy" },
    { id: 2, value: "Business" },
  ];

  const addFlight = () => {
    setMultiCityFlights([
      ...multiCityFlights,
      {
        from: { id: null, value: null },
        to: { id: null, value: null },
        date: new Date(),
      },
    ]);
  };

  const removeFlight = (index) => {
    if (multiCityFlights.length > 1) {
      const newFlights = multiCityFlights.filter((_, i) => i !== index);
      setMultiCityFlights(newFlights);
    }
  };

  const handleDateChange = (newDateRange) => {
    if (tripType === "one-way") {
      setDateRange({ from: newDateRange.from, to: null });
    } else {
      setDateRange(newDateRange);
    }
  };

  const handlePromoSubmit = (e) => {
    e.preventDefault();
    // Process the promo code

    setShowPromoInput(false);
  };

  return (
    <form className="space-y-6 bg-muted/5 p-4 pt-4 rounded-b-[30px] shadow-inner">
      <div className="flex flex-col gap-y-4 sm:flex-row sm:justify-between sm:gap-y-0">
        <div className="flex flex-col sm:flex-row sm:gap-y-0 sm:gap-x-2 gap-y-4 order-2 sm:order-1">
          <Badge type="button"
            className={`search-pill ${ tripType === "one-way" ? "search-pill-active" : "search-pill-normal" }`} onClick={() => setTripType("one-way")}>One way</Badge>
          <Badge type="button"
            className={`search-pill ${ tripType === "round-trip" ? "search-pill-active" : "search-pill-normal"}`} onClick={() => setTripType("round-trip")}>Round trip</Badge>
          <Badge type="button"
            className={` search-pill ${ tripType === "multi-city" ? "search-pill-active": "search-pill-normal" }`} onClick={() => setTripType("multi-city")}>Multi-city</Badge>
        </div>
        <div className="self-end sm:self-auto order-1 sm:order-2">
          {showPromoInput ? (
            <div className="flex items-center gap-x-3">
              <X className="size-4 cursor-pointer" onClick={() => setShowPromoInput(false)}/>
              <div className="flex">
                <Input
                  type="text"
                  placeholder="Enter promo code"
                  className="text-xs border rounded-md border-r-none px-2 py-1 shadow-none rounded-tr-none rounded-br-none"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <Button onClick={handlePromoSubmit} className="rounded-l-none">
                  Submit
                </Button>
              </div>
            </div>
          ) : (
            <Button
              onClick={() => setShowPromoInput(!showPromoInput)}
              className="px-3 bg-transparent text-foreground/60 hover:text-primary hover:bg-transparent rounded-full flex items-center"
            >
              <Plus />
              <span className="text-xs">Add Promo Code</span>
            </Button>
          )}
        </div>
      </div>

      {tripType === "multi-city" ? (
        <div className="space-y-4">
          <AnimatePresence>
            {multiCityFlights.map((flight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -1000 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col md:flex-col lg:flex-row flex-cols-3 gap-4 justify-between"
              >
                <div className="flex flex-col lg:flex-row md:flex-row items-center col-span-2 space-x-1 w-full ">
                  <ComboBox
                    frameworks={fromOptions}
                    value={flight.from.value}
                    setValue={(value) => {
                      const newFlights = [...multiCityFlights];
                      newFlights[index].from = value;
                      setMultiCityFlights(newFlights);
                    }}
                    width={"full"}
                    placeholder={`Flight ${index + 1} From`}
                  />
                  <button
                    type="button"
                    onClick={() => handleSwapLocations(index)}
                    className="text-primary hover:text-primary my-2 transition-transform duration-500 transform hover:rotate-180 active:rotate-[-0deg]"
                  >
                    <ArrowRightLeft size={20} />
                  </button>
                  <ComboBox
                    frameworks={toOptions}
                    value={flight.to.value}
                    setValue={(value) => {
                      const newFlights = [...multiCityFlights];
                      newFlights[index].to = value;
                      setMultiCityFlights(newFlights);
                    }}
                    width={"full"}
                    placeholder={`Flight ${index + 1} To`}
                  />
                </div>

                <div className="flex w-full">
                  <DatePickerWithRange
                    monthsShown={2}
                    date={{ from: flight.date, to: null }}
                    setDate={(value) => {
                      const newFlights = [...multiCityFlights];
                      newFlights[index].date = value.from;
                      setMultiCityFlights(newFlights);
                    }}
                    mode={"single"}
                    placeholder={`Flight ${index + 1} Date`}
                    className="w-full"
                    width="full"
                  />
                </div>
                <div className="flex justify-end items-center">
                  <Button
                    type="button"
                    onClick={() => removeFlight(index)}
                    className="bg-transparent  hover:bg-red-100 text-red-600 border border-red-400 rounded-lg"
                    disabled={multiCityFlights.length === 1}
                  >
                    X
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div className="flex flex-col sm:flex-row justify-end gap-4 w-full">
            <div className="flex flex-col sm:flex-row w-full sm:w-[440px] gap-4 justify-between">
                <Passenger
                  passengerCounts={passengerCounts}
                  setPassengerCounts={setPassengerCounts}
                  width={"full"}
                  placeholder={"Passengers"}
                  heading={"Passengers"}
                />
                <ComboBox
                  frameworks={classes}
                  value={travelClass.value}
                  setValue={setTravelClass}
                  width={"full"}
                  placeholder={"Class"}
                  buttonSearch={false}
                />
            </div>

            <div className="w-full sm:w-auto flex justify-end">
              <Button
                type="button"
                onClick={addFlight}
                className="bg-transparent hover:bg-primary/20 w-10 border border-primary text-primary rounded-lg"
              >
                +
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-4 flex-wrap xl:items-center xl:justify-center">
          <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-1">
            <ComboBox
              frameworks={fromOptions}
              value={from.value}
              setValue={setFrom}
              width={"full sm:w-[calc(50%-1rem)] lg:w-[200px]"}
              placeholder={"Departure"}
            />
            <button
              type="button"
              onClick={handleSwapLocations}
              className="text-primary hover:text-primary w-full sm:w-8 my-2 sm:my-0 flex justify-center items-center transition-transform duration-500 transform hover:rotate-180 active:rotate-[-0deg]"
            >
              <ArrowRightLeft size={20} />
            </button>
            <ComboBox
              frameworks={toOptions}
              value={to.value}
              setValue={setTo}
              width={"full sm:w-[calc(50%-1rem)] lg:w-[200px]"}
              placeholder={"Destination"}
            />
          </div>
          <DatePickerWithRange
            monthsShown={3}
            date={dateRange}
            setDate={handleDateChange}
            mode={tripType === "round-trip" ? "range" : "single"}
            placeholder={"Select dates"}
            width={"[200xp]"}
          />
          <Passenger
            passengerCounts={passengerCounts}
            setPassengerCounts={setPassengerCounts}
            width={"full  md:w-full lg:w-[200px]"}
            placeholder={"Passengers"}
            heading={"Passengers"}
          />
          <ComboBox
            frameworks={classes}
            value={travelClass.value}
            setValue={setTravelClass}
            width={"full md:w-full lg:w-[200px]"}
            placeholder={"Class"}
            buttonSearch={false}
          />
        </div>
      )}

      <Button className="w-full bg-primary text-buttonText rounded-full sm:rounded-t-xl  sm:rounded-b-3xl transition-colors duration-300 font-medium text-sm sm:text-base shadow-md hover:bg-primary/90">
        Search Flights
      </Button>
    </form>
  );
}
