import { Plane, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
  ];

  return (
    <footer className="relative border-t border-cyan-500/20 mt-20">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/30 blur-lg rounded-full animate-pulse"></div>
              <Plane className="w-8 h-8 text-cyan-400 relative transform rotate-45" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              NovaTickets
            </span>
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-150"></div>
                  <div className="relative bg-[#0A1128]/60 backdrop-blur-xl border border-cyan-500/20 rounded-full p-3 group-hover:border-cyan-400 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                </a>
              );
            })}
          </div>

          <div className="text-center md:text-right">
            <p className="text-[#E6F1FF]/60 text-sm">
              &copy; {currentYear} NovaTickets. All rights reserved.
            </p>
            <p className="text-[#E6F1FF]/40 text-xs mt-1">
              By NovaSolutions
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-cyan-500/10">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#E6F1FF]/60">
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="text-cyan-500/30">•</span>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
              Terms of Service
            </a>
            <span className="text-cyan-500/30">•</span>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
              Cookie Policy
            </a>
            <span className="text-cyan-500/30">•</span>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
