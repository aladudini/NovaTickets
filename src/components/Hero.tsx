import { useState } from "react";
import { MapPin, Calendar, Search } from "lucide-react";

const cityToAirport: Record<string, string> = {
  Prishtina: "PRN",
  Istanbul: "IST",
  London: "LHR",
  Paris: "CDG",
  Frankfurt: "FRA",
  Berlin: "BER",
  Madrid: "MAD",
  Rome: "FCO",
  Amsterdam: "AMS",
  Vienna: "VIE",
  Stuttgart: "STR",
  Zurich: "ZRH",
  Geneva: "GVA",
  Munich: "MUC",
  Barcelona: "BCN",
  Venice: "VCE",
  Basel: "BSL",
  Helsinki: "HEL",
  Copenhagen: "CPH",
  Oslo: "OSL",
  Stockholm: "ARN",
  Dublin: "DUB",
  Brussels: "BRU",
  Lisbon: "LIS",
  Athens: "ATH",
  Nuremberg: "NUE",
};

export default function Hero() {
  const [originCity, setOriginCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [date, setDate] = useState("");
  const [flights, setFlights] = useState<[string, any[]][]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: any) => {
    e.preventDefault();
    if (!originCity || !destinationCity)
      return alert("Fill origin & destination!");

    const originCode = cityToAirport[originCity];
    const destinationCode = cityToAirport[destinationCity];

    if (!originCode || !destinationCode)
      return alert("City not supported yet!");

    setLoading(true);

    try {
      const url = date
        ? `http://localhost:3001/flights?origin=${originCode}&destination=${destinationCode}&date=${date}`
        : `http://localhost:3001/flights_month?origin=${originCode}&destination=${destinationCode}`;

      const res = await fetch(url);
      const data = await res.json();

      const grouped: Record<string, any[]> = {};
      (data.data || []).forEach((f: any) => {
        const depDate = new Date(f.departure_at).toLocaleDateString();
        if (!grouped[depDate]) grouped[depDate] = [];
        grouped[depDate].push(f);
      });

      setFlights(Object.entries(grouped));
    } catch (err) {
      console.error(err);
      alert("Error fetching flights");
    }

    setLoading(false);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Hero Title */}
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
          Fly Beyond Tomorrow
        </h1>
        <p className="text-xl text-[#E6F1FF]/70 max-w-2xl mx-auto">
          Experience the future of travel with NovaTickets. Seamless bookings,
          infinite destinations.
        </p>

        {/* Search Form */}
        <form
          onSubmit={handleSearch}
          className="mt-10 max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <div className="flex items-center bg-white/20 rounded-xl px-4 py-3">
            <MapPin className="text-cyan-300 mr-3" />
            <input
              type="text"
              placeholder="Origin city (e.g., Prishtina)"
              value={originCity}
              onChange={(e) => setOriginCity(e.target.value)}
              className="bg-transparent w-full text-white placeholder-white/60 outline-none"
              list="cities"
            />
          </div>

          <div className="flex items-center bg-white/20 rounded-xl px-4 py-3">
            <MapPin className="text-purple-300 mr-3" />
            <input
              type="text"
              placeholder="Destination city (e.g., Istanbul)"
              value={destinationCity}
              onChange={(e) => setDestinationCity(e.target.value)}
              className="bg-transparent w-full text-white placeholder-white/60 outline-none"
              list="cities"
            />
          </div>

          <div className="flex items-center bg-white/20 rounded-xl px-4 py-3">
            <Calendar className="text-blue-300 mr-3" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-transparent w-full text-white outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white font-bold flex items-center justify-center gap-2 px-6 py-3 hover:opacity-80 transition"
          >
            <Search />
            Search
          </button>

          <datalist id="cities">
            {Object.keys(cityToAirport).map((city) => (
              <option key={city} value={city} />
            ))}
          </datalist>
        </form>

        {/* Flight Results */}
        <div className="mt-10 max-w-5xl mx-auto w-full grid gap-6">
          {loading && (
            <p className="text-white/70 text-center">Loading flights...</p>
          )}

          {!loading &&
            flights.length === 0 &&
            originCity &&
            destinationCity && (
              <p className="text-white/60 text-center mt-4">
                No flights found.
              </p>
            )}

          {flights.map(([depDate, flightsArr], i) => (
            <div key={i}>
              <h2 className="text-xl font-bold text-white mb-2">{depDate}</h2>

              {flightsArr.map((f: any, j: number) => (
                <div
                  key={j}
                  className="relative bg-gradient-to-r from-cyan-700/30 to-purple-700/30 p-6 rounded-2xl border border-white/20 shadow-xl hover:scale-105 transform transition-all duration-300 mb-3"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-bold text-white">
                      {f.origin_airport} → {f.destination_airport}
                    </h3>
                    <p className="text-xl font-bold text-green-400">
                      {f.price}€
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-white/80 mb-2">
                    <p>
                      <span className="font-semibold text-white">Airline:</span>{" "}
                      {f.airline}
                    </p>
                    <p>
                      <span className="font-semibold text-white">Flight No:</span>{" "}
                      {f.flight_number}
                    </p>
                    <p>
                      <span className="font-semibold text-white">Departure:</span>{" "}
                      {new Date(f.departure_at).toLocaleString()}
                    </p>
                    <p>
                      <span className="font-semibold text-white">Duration:</span>{" "}
                      {f.duration} min
                    </p>
                  </div>

                  {/* FIXED Book Now button */}
                  <a
                    href={f.affiliate_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-xl hover:opacity-90 transition relative z-50 cursor-pointer"
                  >
                    Book Now
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
