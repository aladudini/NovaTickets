import { useState } from 'react';
import { MapPin, Calendar, Users, Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (params: any) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState('1');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ from, to, departDate, returnDate, passengers });
  };

  return (
    <form onSubmit={handleSubmit} className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/50 to-purple-500/50 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>

      <div className="relative bg-[#0A1128]/60 backdrop-blur-2xl border border-cyan-500/30 rounded-3xl p-8 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="relative">
            <label className="block text-xs font-medium text-cyan-400 mb-2 uppercase tracking-wider">
              From
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400/50" />
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="New York"
                className="w-full bg-[#0A1128]/80 border border-cyan-500/20 rounded-xl pl-12 pr-4 py-3 text-[#E6F1FF] placeholder-[#E6F1FF]/30 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                required
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-xs font-medium text-cyan-400 mb-2 uppercase tracking-wider">
              To
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400/50" />
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Tokyo"
                className="w-full bg-[#0A1128]/80 border border-cyan-500/20 rounded-xl pl-12 pr-4 py-3 text-[#E6F1FF] placeholder-[#E6F1FF]/30 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                required
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-xs font-medium text-cyan-400 mb-2 uppercase tracking-wider">
              Departure
            </label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400/50" />
              <input
                type="date"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
                className="w-full bg-[#0A1128]/80 border border-cyan-500/20 rounded-xl pl-12 pr-4 py-3 text-[#E6F1FF] focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                required
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-xs font-medium text-cyan-400 mb-2 uppercase tracking-wider">
              Return
            </label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400/50" />
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full bg-[#0A1128]/80 border border-cyan-500/20 rounded-xl pl-12 pr-4 py-3 text-[#E6F1FF] focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-xs font-medium text-cyan-400 mb-2 uppercase tracking-wider">
              Passengers
            </label>
            <div className="relative">
              <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400/50" />
              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full bg-[#0A1128]/80 border border-cyan-500/20 rounded-xl pl-12 pr-4 py-3 text-[#E6F1FF] focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 appearance-none cursor-pointer"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num} className="bg-[#0A1128]">
                    {num} {num === 1 ? 'Adult' : 'Adults'}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="relative w-full mt-6 group/btn overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl transition-all duration-300 group-hover/btn:scale-105"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-all duration-300 blur-xl"></div>
          <div className="relative flex items-center justify-center space-x-3 py-4 px-8">
            <Search className="w-5 h-5" />
            <span className="font-semibold text-lg tracking-wide">Find Flights</span>
          </div>
        </button>
      </div>
    </form>
  );
}
