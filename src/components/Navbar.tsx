import { useState } from "react";
import logo from "./img/Novatickets_Logo.png";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1128]/80 backdrop-blur-xl border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => {
              onNavigate("home");
              setMobileOpen(false);
            }}
            className="flex items-center space-x-3 group"
          >
            <div className="w-[13rem] h-auto">
              <img src={logo} alt="Novatickets Logo" />
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                  currentPage === item.id
                    ? "text-cyan-400"
                    : "text-[#E6F1FF]/70 hover:text-cyan-400"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transform origin-left transition-transform duration-300 ${
                    currentPage === item.id
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </button>
            ))}
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-[#E6F1FF] focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden flex flex-col space-y-4 mt-4 transition-all duration-300 overflow-hidden ${
            mobileOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileOpen(false);
              }}
              className={`relative w-full text-left px-2 py-2 text-base font-medium transition-all duration-300 ${
                currentPage === item.id
                  ? "text-cyan-400"
                  : "text-[#E6F1FF]/70 hover:text-cyan-400"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
