import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  images: string[];
  tech: string[];
  demo: string;
  source: string;
}

const projects: Project[] = [
  {
    title: "Neo-Vanguard",
    description:
      "Platform edukasi digital 2026 yang berfokus pada AI literacy, cybersecurity awareness, dan future-ready digital skills untuk generasi berikutnya.",
    images: ["/neo-vanguard.png"],
    tech: ["React", "Tailwind CSS", "TypeScript", "Vercel"],
    demo: "https://neo-vanguard.vercel.app",
    source: "https://github.com/immanueltampubolon594/neo-vanguard",
  },
  {
    title: "Tanah Batak",
    description:
      "Website budaya Batak yang menjelajahi kekayaan budaya, sejarah, kuliner, dan keindahan alam warisan leluhur Batak. Dilengkapi fitur autentikasi pengguna.",
    images: [
      "/tanah-batak.png",
      "/tanah-batak2.png",
      "/tanah-batak3.png",
      "/tanah-batak4.png",
      "/tanah-batak5.png",
      "/tanah-batak6.png",
      "/tanah-batak7.png",
    ],
    tech: ["React", "TypeScript", "Vite", "Golang", "Tailwind CSS", "Vercel"],
    demo: "https://tanah-batak.vercel.app",
    source: "https://github.com/immanueltampubolon594/Tanah-Batak",
  },
  {
    title: "SiPerpus - Perpustakaan Digital",
    description:
      "Sistem manajemen perpustakaan digital berbasis Laravel dengan fitur peminjaman buku, manajemen anggota, katalog rak buku, dan autentikasi pengguna.",
    images: ["/Perpustakaan.png"],
    tech: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "Vite"],
    demo: "#",
    source: "https://github.com/immanueltampubolon594/perpustakaan",
  },
  {
    title: "Connect+ (Campus Connect)",
    description:
      "Sistem manajemen kampus terdistribusi dengan arsitektur 5 microservices dan API Gateway, mencakup manajemen mahasiswa, event kampus, fasilitas, dan booking.",
    images: ["/campus-connect.png"],
    tech: ["React", "Node.js", "Docker", "MongoDB", "Nginx", "Ubuntu Server"],
    demo: "#",
    source: "https://github.com/immanueltampubolon594/campus-connect",
  },
  {
    title: "UNTHOPEDINE",
    description:
      "Website coffee shop dengan tampilan modern menampilkan menu kopi, galeri, dan lokasi. Dilengkapi fitur pemesanan berbasis form dengan integrasi WhatsApp.",
    images: ["/coffee-website.png"],
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    source: "https://github.com/immanueltampubolon594/coffee-website",
  },
  {
    title: "CyberGuard AI",
    description:
      "CyberGuard AI adalah chatbot edukatif keamanan siber berbasis AI yang memanfaatkan arsitektur Retrieval-Augmented Generation (RAG) untuk meningkatkan literasi keamanan siber serta memverifikasi potensi ancaman digital, sehingga membantu pengguna umum mengambil keputusan yang lebih aman saat beraktivitas di dunia digital.",
    images: [
      "/CyberGuard.png",
      "/CyberGuard2.png",
      "/CyberGuard3.png",
      "/CyberGuard4.png",
      "/CyberGuard5.png",
      "/CyberGuard6.png",
    ],
    tech: ["Next.js", "Python", "FastAPI", "LangChain", "Supabase pgvector", "Gemini API"],
    demo: "#",
    source: "https://github.com/immanueltampubolon594/CyberGuard-AI",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [current, setCurrent] = useState(0);
  const hasMultiple = project.images.length > 1;

  const goPrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const goNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="glass rounded-2xl overflow-hidden group hover:bg-white/[0.06] transition-all duration-500 hover:scale-[1.02]"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.images[current]}
          alt={`${project.title} - screenshot ${current + 1}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />

        {/* Overlay buttons (demo & source) */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-blue-500/90 text-white hover:bg-blue-500 transition-colors"
            title="Live Demo"
          >
            <ExternalLink size={20} />
          </a>
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
            title="Source Code"
          >
            <Github size={20} />
          </a>
        </div>

        {/* Carousel arrows - only if more than 1 image */}
        {hasMultiple && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
              title="Previous image"
              type="button"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
              title="Next image"
              type="button"
            >
              <ChevronRight size={18} />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {project.images.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i === current ? "w-4 bg-white" : "w-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-lg bg-white/5 text-xs font-medium text-slate-300 border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
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
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-cyan-400 text-sm font-medium mb-4">
            My Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Works</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Beberapa project pilihan yang telah saya kerjakan dengan penuh dedikasi dan kreativitas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}