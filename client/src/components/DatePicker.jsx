import { useContext } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { SearchContext } from "../SearchContext";

export default function DatePicker() {
  const { from, to, setFrom, setTo, setActiveTab } = useContext(SearchContext);

  return (
    <div className="absolute top-24 left-1/2 -translate-x-1/2 bg-white p-10 rounded-3xl shadow-2xl w-[900px] z-50">

      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold">Select your dates</h2>
        <p className="text-gray-500">Choose when you want to travel</p>
      </div>

      {/* Calendar */}
      <DayPicker
        mode="range"
        selected={{ from, to }}
        onSelect={(range) => {
          setFrom(range?.from || null);
          setTo(range?.to || null);
        }}
        numberOfMonths={2}
        showOutsideDays
        className="mx-auto"
        styles={{
          caption: { fontWeight: "600", fontSize: "16px" },

          /* Start & end dates */
          day_selected: {
            backgroundColor: "#222222",
            color: "white",
            borderRadius: "50%",
          },

          /* Between selected dates */
          day_range_middle: {
            backgroundColor: "#ededed",
            color: "#111",
          },

          day_range_start: {
            backgroundColor: "#222222",
            color: "white",
            borderRadius: "50%",
          },

          day_range_end: {
            backgroundColor: "#222222",
            color: "white",
            borderRadius: "50%",
          },

          /* Hover */
          day: {
            borderRadius: "50%",
          },
        }}
      />

      {/* Footer */}
      <div className="flex justify-end mt-8">
        <button
          onClick={() => setActiveTab("guests")}
          className="bg-[#FF385C] text-white px-10 py-3 rounded-full text-lg hover:bg-[#e03150]"
        >
          Next
        </button>
      </div>
    </div>
  );
}
