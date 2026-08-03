import { useEffect, useRef, useState } from "react";
import { Code2, Lightbulb, Rocket, Layers } from "lucide-react";

const stats = [
  { icon: Code2, label: "Full-Stack Projects", value: "6", color: "text-blue-400" },
  { icon: Rocket, label: "AI/RAG Thesis Project", value: "1", color: "text-purple-400" },
  { icon: Layers, label: "Languages & Frameworks", value: "8", color: "text-cyan-400" },
  { icon: Lightbulb, label: "Core Tech Stacks", value: "5", color: "text-emerald-400" },
];

export default function AboutSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-24 lg:py-32">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-blue-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get to Know <span className="gradient-text">Me Better</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Full-Stack Developer in the Making 🚀
            </h3>
            <p className="text-slate-400 leading-relaxed text-base">
              I'm Immanuel, a Computer Technology student with a strong passion
              for web development and applied AI. Since starting my studies,
              I've independently designed, built, and deployed six full-stack
              projects — ranging from a distributed campus management system to
              a Retrieval-Augmented Generation (RAG) chatbot built as my thesis
              project.
            </p>
            <p className="text-slate-400 leading-relaxed text-base">
              My focus is building solutions that are practical, well-structured,
              and genuinely usable — not just functional. I work across the stack
              with React, Next.js, Laravel, Node.js, and FastAPI, and I'm
              continuously deepening my skills in AI tooling like LangChain and
              vector databases.
            </p>
            <p className="text-slate-400 leading-relaxed text-base">
              Outside of coding, I'm active in my campus organization
              (Facilities & Infrastructure Division, Himpunan Teknologi
              Komputer). I believe in learning by building, and in using
              technology to solve real problems — one project at a time.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {["Web Development", "Full-Stack Development", "Problem Solving", "Team Work"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-xl glass text-sm text-slate-300 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="glass rounded-2xl p-6 hover:bg-white/[0.06] hover:scale-105 transition-all duration-300 group"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <Icon
                    size={32}
                    className={`${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}
                  />
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}