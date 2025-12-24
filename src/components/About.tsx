import { Sparkles, Shield, Zap } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Sparkles,
      title: 'Innovation First',
      description: 'Cutting-edge technology meets seamless user experience. We\'re redefining how you book flights.',
    },
    {
      icon: Shield,
      title: 'Trusted & Secure',
      description: 'Your data is protected with quantum-grade encryption. Travel with complete peace of mind.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'From search to booking in seconds. No delays, no complications, just pure efficiency.',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About NovaTickets
            </span>
          </h2>
          <p className="text-xl text-[#E6F1FF]/70 max-w-3xl mx-auto leading-relaxed">
            We're not just a booking platform — we're your gateway to the future of travel.
            Built for the modern explorer, designed for tomorrow's journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative bg-[#0A1128]/60 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 h-full group-hover:border-cyan-500/40 transition-all duration-300">
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-lg rounded-full"></div>
                    <div className="relative bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-4 rounded-2xl border border-cyan-500/30">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-[#E6F1FF]">
                    {feature.title}
                  </h3>
                  <p className="text-[#E6F1FF]/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-[#0A1128]/60 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-6 text-[#E6F1FF]">
                Our Mission
              </h3>
              <p className="text-lg text-[#E6F1FF]/70 leading-relaxed mb-8">
                At NovaTickets, we believe travel should be effortless. Our mission is to eliminate friction
                from the booking process, using next-generation technology to connect you with destinations
                around the world. We're building the travel platform of tomorrow, today.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    2M+
                  </div>
                  <div className="text-sm text-[#E6F1FF]/60">Happy Travelers</div>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    10K+
                  </div>
                  <div className="text-sm text-[#E6F1FF]/60">Routes Worldwide</div>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    99.9%
                  </div>
                  <div className="text-sm text-[#E6F1FF]/60">Uptime Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
