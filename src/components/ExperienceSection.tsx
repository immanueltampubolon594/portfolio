import { useEffect, useRef, useState } from "react";
import { GraduationCap, Users, Award } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof GraduationCap;
  color: string;
}

const timeline: TimelineItem[] = [
  {
    year: "2024 - Sekarang",
    title: "Mahasiswa D3 Teknologi Komputer",
    subtitle: "Institut Teknologi Del",
    description:
      "Menempuh pendidikan D3 Teknologi Komputer di Institut Teknologi Del sejak 2024, dengan fokus pada software development, jaringan komputer, dan sistem embedded.",
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
  },
  {
    year: "2025 - Sekarang",
    title: "Sarana dan Prasarana",
    subtitle: "Himpunan Teknologi Komputer",
    description:
      "Berperan di divisi Sarana dan Prasarana pada organisasi Himpunan Teknologi Komputer, mendukung kebutuhan sarana dan prasarana kegiatan himpunan.",
    icon: Users,
    color: "from-purple-500 to-pink-500",
  },
  {
    year: "2026",
    title: "Peserta Web Design Competition 2026",
    subtitle: "TECH SOFT x HIMA RPL, Politeknik Negeri Indramayu",
    description:
      "Mengikuti Web Design Competition 2026 yang diselenggarakan oleh TECH SOFT bersama Himpunan Mahasiswa RPL, Politeknik Negeri Indramayu, sebagai peserta.",
    icon: Award,
    color: "from-yellow-500 to-orange-500",
  },
];

export default function ExperienceSection() {
  const [visible, setVisible] = useState(false);
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
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-emerald-400 text-sm font-medium mb-4">
            Experience & Education
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-emerald-500/50 md:-translate-x-px" />

          {timeline.map((item, i) => {
            const Icon = item.icon;
            const isLeft = i % 2 === 0;
            return (
              <div
                key={item.title}
                className={`relative flex items-start gap-6 mb-12 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] glass rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-300 ${
                    isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <span className="inline-block px-3 py-1 rounded-lg bg-white/5 text-xs font-mono text-blue-400 mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-purple-400 mb-2">{item.subtitle}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}