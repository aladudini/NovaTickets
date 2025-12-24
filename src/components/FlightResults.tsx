import { Plane, Clock, ArrowRight } from 'lucide-react';

interface FlightResultsProps {
  searchParams: any;
}

export default function FlightResults({ searchParams }: FlightResultsProps) {
  const mockFlights = [
    {
      id: 1,
      airline: 'Nova Air',
      from: searchParams?.from || 'New York',
      to: searchParams?.to || 'Tokyo',
      departTime: '08:00',
      arriveTime: '16:30',
      duration: '14h 30m',
      price: 899,
      class: 'Economy',
    },
    {
      id: 2,
      airline: 'SkyLink',
      from: searchParams?.from || 'New York',
      to: searchParams?.to || 'Tokyo',
      departTime: '12:45',
      arriveTime: '21:15',
      duration: '14h 30m',
      price: 1249,
      class: 'Business',
    },
    {
      id: 3,
      airline: 'AeroFuture',
      from: searchParams?.from || 'New York',
      to: searchParams?.to || 'Tokyo',
      departTime: '18:20',
      arriveTime: '02:50',
      duration: '14h 30m',
      price: 749,
      class: 'Economy',
    },
    {
      id: 4,
      airline: 'Quantum Airways',
      from: searchParams?.from || 'New York',
      to: searchParams?.to || 'Tokyo',
      departTime: '22:00',
      arriveTime: '06:30',
      duration: '14h 30m',
      price: 1599,
      class: 'First Class',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Available Flights
            </span>
          </h2>
          <p className="text-[#E6F1FF]/60">
            {searchParams?.from} → {searchParams?.to} • {searchParams?.departDate}
          </p>
        </div>

        <div className="space-y-6">
          {mockFlights.map((flight, index) => (
            <div
              key={flight.id}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="relative bg-[#0A1128]/60 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 group-hover:border-cyan-500/40 transition-all duration-300 transform group-hover:scale-[1.02]">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex-1 w-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="absolute inset-0 bg-cyan-500/20 blur-md rounded-full"></div>
                          <Plane className="w-6 h-6 text-cyan-400 relative" />
                        </div>
                        <span className="text-lg font-semibold text-[#E6F1FF]">
                          {flight.airline}
                        </span>
                      </div>
                      <span className="text-xs text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                        {flight.class}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="text-2xl font-bold text-[#E6F1FF]">
                          {flight.departTime}
                        </div>
                        <div className="text-sm text-[#E6F1FF]/60 mt-1">
                          {flight.from}
                        </div>
                      </div>

                      <div className="flex-1 flex flex-col items-center px-4">
                        <div className="flex items-center space-x-2 text-[#E6F1FF]/60">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{flight.duration}</span>
                        </div>
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mt-2 mb-2"></div>
                        <ArrowRight className="w-5 h-5 text-cyan-400" />
                      </div>

                      <div className="flex-1 text-right">
                        <div className="text-2xl font-bold text-[#E6F1FF]">
                          {flight.arriveTime}
                        </div>
                        <div className="text-sm text-[#E6F1FF]/60 mt-1">
                          {flight.to}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end space-y-3 min-w-[200px]">
                    <div className="text-right">
                      <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        ${flight.price}
                      </div>
                      <div className="text-xs text-[#E6F1FF]/60">per person</div>
                    </div>

                    <button className="relative w-full overflow-hidden group/btn">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl transition-all duration-300"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-all duration-300 blur-xl"></div>
                      <div className="relative py-3 px-6 font-semibold">
                        Book Now
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
