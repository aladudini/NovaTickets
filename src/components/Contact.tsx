import { useState } from 'react';
import { Mail, User, MessageSquare, Send } from 'lucide-react';
import emailjs from 'emailjs-com';
 

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    time: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
  "service_d9hmiwk",
  "template_e1cyuvp",
  {
    title: "NovaTickets Contact Form",
    name: formData.name,
    time: new Date().toLocaleString(),
    message: formData.message,
    email: formData.email,
  },
  "gudw6z44ME2D_RFsd"
)

      .then((response) => {
  console.log("Email sent successfully!", response.status, response.text);
  setFormData({ title: "NovaTickets Contact Form", time: new Date().toLocaleString(), name: "", message: "", email: "", });
})
.catch((error) => {
  console.error("EmailJS error:", error);
});
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-[#E6F1FF]/70">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-all duration-500"></div>

          <div className="relative bg-[#0A1128]/60 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-10">
            <form onSubmit={handleSubmit} id='contactForm' className="space-y-6">

              <div className="relative">
                <label className="block text-sm font-medium text-cyan-400 mb-3 uppercase tracking-wider">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400/50" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-[#0A1128]/80 border border-cyan-500/20 rounded-xl pl-12 pr-4 py-4 text-[#E6F1FF] placeholder-[#E6F1FF]/30 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-cyan-400 mb-3 uppercase tracking-wider">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400/50" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-[#0A1128]/80 border border-cyan-500/20 rounded-xl pl-12 pr-4 py-4 text-[#E6F1FF] placeholder-[#E6F1FF]/30 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-cyan-400 mb-3 uppercase tracking-wider">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-cyan-400/50" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind..."
                    rows={6}
                    className="w-full bg-[#0A1128]/80 border border-cyan-500/20 rounded-xl pl-12 pr-4 py-4 text-[#E6F1FF] placeholder-[#E6F1FF]/30 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="relative w-full group/btn overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl transition-all duration-300 group-hover/btn:scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-all duration-300 blur-xl"></div>
                <div className="relative flex items-center justify-center space-x-3 py-4 px-8">
                  <Send className="w-5 h-5" />
                  <span className="font-semibold text-lg tracking-wide">Send Message</span>
                </div>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#E6F1FF]/60 mb-4">Or reach us directly at</p>
          <a
            href="mailto:novasolutions00@gmail.com"
            className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
          >
            novasolutions00@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
