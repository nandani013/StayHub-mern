import { useContext } from "react";
import { SearchContext } from "../SearchContext";

const locations = [
  { city: "Nearby", desc: "Find what's around you" },
  { city: "Kolkata, West Bengal", desc: "Victoria Memorial, Howrah Bridge" },
  { city: "North Goa, Goa", desc: "Baga Beach, Nightlife" },
  { city: "New Delhi, Delhi", desc: "India Gate, Qutub Minar" },
  { city: "Jaipur, Rajasthan", desc: "Amber Fort, Pink City" },
  { city: "Agra, Uttar Pradesh", desc: "Taj Mahal" },
  { city: "Manali, Himachal Pradesh", desc: "Snow & mountains" },
  { city: "Shimla, Himachal Pradesh", desc: "Hill station & colonial town" },
  { city: "Udaipur, Rajasthan", desc: "Lakes & palaces" },
  { city: "Munnar, Kerala", desc: "Tea gardens & hills" },
];

export default function LocationPicker() {
  const { setLocation, setActiveTab } = useContext(SearchContext);

  return (
    <div className="absolute top-20 left-0 bg-white shadow-xl rounded-2xl p-4 w-96 max-h-80 overflow-y-auto z-50">
      {locations.map((place) => (
        <div
          key={place.city}
          onClick={() => {
            setLocation(place.city);
            setActiveTab("date");
          }}
          className="flex gap-3 p-3 hover:bg-gray-100 cursor-pointer rounded-xl"
        >
          <div className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center">
            📍
          </div>

          <div>
            <div className="font-medium">{place.city}</div>
            <div className="text-sm text-gray-500">{place.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
