import { useContext } from "react";
import { SearchContext } from "../SearchContext";

export default function GuestPicker() {
  const { guests, setGuests, setActiveTab } = useContext(SearchContext);

  function change(type, delta) {
    setGuests(prev => ({ ...prev, [type]: Math.max(0, prev[type] + delta) }));
  }

  return (
    <div className="absolute top-16 right-0 bg-white p-4 rounded-xl shadow-xl z-50">
      {["adults", "children", "infants", "pets"].map(type => (
        <div key={type} className="flex justify-between py-2">
          <span>{type}</span>
          <div>
            <button onClick={() => change(type, -1)}>-</button>
            <span className="mx-2">{guests[type]}</span>
            <button onClick={() => change(type, 1)}>+</button>
          </div>
        </div>
      ))}

      <button
        onClick={() => setActiveTab(null)}
        className="mt-2 bg-primary text-white px-4 py-1 rounded"
      >
        Done
      </button>
    </div>
  );
}

