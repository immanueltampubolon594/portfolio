import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
  ArrowUp,
  Heart,
} from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/immanueltampubolon594", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/immanuel-tampubolon-124849415", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/immanueltampubolon594?igsh=cDNoODZkZ2g0c2I=", label: "Instagram" },
  { icon: Mail, href: "mailto:immanueltampubolon249@gmail.com", label: "Email" },
];

export default function ContactFooter() {
  const [visible, setVisible] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Terima kasih! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda.");
  };

  return (
    <>
      <section id="contact" className="relative py-24 lg:py-32">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

        <div
          ref={ref}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-blue-400 text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Tertarik untuk berkolaborasi atau punya pertanyaan? Jangan ragu untuk menghubungi saya!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nama lengkap Anda"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Pesan
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tulis pesan Anda di sini..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-xl hover:shadow-blue-500/25 hover:scale-[1.02] transition-all duration-300"
              >
                <Send size={18} />
                Kirim Pesan
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6 flex items-center gap-4 hover:bg-white/[0.06] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="text-white font-medium">immanueltampubolon249@gmail.com</p>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 flex items-center gap-4 hover:bg-white/[0.06] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">WhatsApp</p>
                  <p className="text-white font-medium">+62 853-5848-5016</p>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 flex items-center gap-4 hover:bg-white/[0.06] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Lokasi</p>
                  <p className="text-white font-medium">Indonesia</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass rounded-2xl p-6">
                <p className="text-sm text-slate-500 mb-4">Follow Me</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 hover:scale-110 transition-all duration-300"
                        title={social.label}
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                I
              </div>
              <span className="text-slate-400 text-sm">
                © 2024 Immanuel. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-1 text-sm text-slate-500">
              Made with <Heart size={14} className="text-red-500 mx-1" /> by
              Immanuel
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-blue-400 transition-colors"
                    title={social.label}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/25 hover:scale-110 transition-all duration-300 ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}