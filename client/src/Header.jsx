import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { SearchContext } from "./SearchContext";
import LocationPicker from "./components/LocationPicker";
import DatePicker from "./components/DatePicker";
import GuestPicker from "./components/GuestPicker";

export default function Header() {
  const { user } = useContext(UserContext);

  const {
    location, setLocation,
    from, setFrom,
    to, setTo,
    guests, setGuests,
    activeTab, setActiveTab
  } = useContext(SearchContext);

  const navigate = useNavigate();

  function handleSearch() {
    navigate(`/search?location=${location}&from=${from}&to=${to}&guests=${guests.adults + guests.children}`);
  }

  return (
    <header className="flex justify-between items-center p-4">
      <Link to="/" className="font-bold text-xl">StayHub</Link>

      <div className="relative flex items-center gap-6 border rounded-full px-6 py-3 shadow-lg bg-white">


  {/* WHERE */}
  <div onClick={() => setActiveTab("location")} className="cursor-pointer">
  <div>
    <p className="text-xs font-semibold">Where</p>
    <p className="text-gray-500">{location || "Search destinations"}</p>
  </div>

  {activeTab === "location" && <LocationPicker />}
</div>


  {/* WHEN */}
  <div onClick={() => setActiveTab("date")} className="cursor-pointer">
  <div className="text-xs text-gray-500">When</div>
  <div className="text-sm font-medium">
    {from && to
      ? `${from.toLocaleDateString("en-GB", { day: "numeric", month: "short" })} – ${to.toLocaleDateString("en-GB", { day: "numeric", month: "short" })}`
      : "Add dates"}
  </div>

  {activeTab === "date" && <DatePicker />}
</div>

  {/* WHO */}
  <div
    onClick={() => setActiveTab("guests")}
    className="cursor-pointer"
  >
    <div className="text-xs font-semibold">Who</div>
    <div className="text-sm text-gray-600">
      {guests.adults + guests.children} guests
    </div>
  </div>

  <button
    onClick={handleSearch}
    className="bg-red-500 text-white px-4 py-2 rounded-full"
  >
    🔍
  </button>

  {/* POPUPS (Airbnb style) */}
  {activeTab === "location" && <LocationPicker />}
  {activeTab === "date" && <DatePicker />}
  {activeTab === "guests" && <GuestPicker />}

</div>

      <Link to={user ? "/account" : "/login"}>
        {user ? user.name : "Login"}
      </Link>
    </header>
  );
}
