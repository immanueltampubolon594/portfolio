import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  year: string;
  type: string;
  image: string;
}
const certificates: Certificate[] = [
  {
    title: "Web Design Competition 2026",
    issuer: "TechSoft – HIMA RPL",
    year: "April 2026",
    type: "Certificate",
    image: "/Sertifikat_SOFTECT.png",
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "Commonwealth Bank x Forage",
    year: "06 April 2026",
    type: "Certificate",
    image: "/Sertifikat-Sowware-Enginering.png",
  },
  
  {
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    year: "04 April 2026",
    type: "Certificate",
    image: "/Sertifikat-Kaggle.png",
  },
  {
    title: "AI and Career Empowerment",
    issuer: "University of Maryland – Robert H. Smith School of Business",
    year: "03 April 2026",
    type: "Certificate",
    image: "/Sertifikat-UMaryland_2026.png",
  },
  {
    title: "Internship Offer Letter – C/C++ Development Intern",
    issuer: "Codveda Technologies",
    year: "05 Februari 2026",
    type: "Internship",
    image: "/Sertifikat-Codveda.png",
  },
  {
    title: "AI Engineer For Milenial",
    issuer: "Komdigi – Digital Talent Scholarship 2026",
    year: "23 Februari 2026",
    type: "Certificate",
    image: "/Sertifikat-Comdigi-1.png",
  },
  {
    title: "Dasar-dasar Keamanan AI",
    issuer: "Komdigi × Microsoft – Digital Talent Scholarship 2026",
    year: "27 Februari 2026",
    type: "Certificate",
    image: "/Sertifikat-Comdigi-2.png",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "02 Februari 2026",
    type: "Certificate",
    image: "/Sertifikat-Cybersecurity.png",
  },
  {
    title: "Memulai Pemrograman Dengan Java",
    issuer: "Dicoding Indonesia",
    year: "10 Februari 2026",
    type: "Certificate",
    image: "/Sertifikat-Dicoding-1.png",
  },
  {
    title: "Memulai Pemrograman Dengan C",
    issuer: "Dicoding Indonesia",
    year: "04 Februari 2026",
    type: "Certificate",
    image: "/Sertifikat-Dicoding-2.png",
  },
  {
    title: "HCIA-Storage V5.0",
    issuer: "Huawei ICT Academy",
    year: "07 Oktober 2025",
    type: "Certificate",
    image: "/SertifikatHuawei-1.png",
  },
  {
    title: "HCIA-Datacom V1.0",
    issuer: "Huawei ICT Academy",
    year: "22 November 2025",
    type: "Certificate",
    image: "/SertifikatHuawei-2.png",
  },
];

export default function CertificatesSection() {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<Certificate | null>(null);
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

  return (
    <section id="certificates" className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-yellow-400 text-sm font-medium mb-4">
            Certificates & Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Recognition & <span className="gradient-text">Awards</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-600 mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <div
              key={cert.title}
              className="glass rounded-2xl overflow-hidden hover:scale-[1.03] transition-all duration-300 group cursor-pointer"
              style={{ animationDelay: `${i * 100}ms` }}
              onClick={() => setSelected(cert)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <ExternalLink size={14} className="text-slate-600 group-hover:text-blue-400 transition-colors" />
                </div>
                <p className="text-xs text-slate-500">{cert.issuer}</p>
                <span className="text-xs font-mono text-slate-500">{cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal preview */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div className="max-w-3xl w-full">
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full rounded-2xl shadow-2xl"
            />
            <p className="text-center text-white mt-4 font-semibold">{selected.title}</p>
          </div>
        </div>
      )}
    </section>
  );
}