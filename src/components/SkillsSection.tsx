import { useEffect, useRef, useState } from "react";
import { Database } from "lucide-react";

interface Skill {
  name: string;
  icon?: string;
  lucideColor?: string; // used only for the MySQL "Database" icon below
}

const rowOne: Skill[] = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
];

const rowTwo: Skill[] = [
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "MySQL", lucideColor: "#22d3ee" }, // rendered as a Database icon, not the dolphin logo
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Golang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
];

const rowThree: Skill[] = [
  { name: "Linux", icon: "https://cdn.simpleicons.org/linux/000000" },
  { name: "Ubuntu", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" },
  { name: "Rocky Linux", icon: "https://cdn.simpleicons.org/rockylinux/10B981" },
  { name: "VMware", icon: "https://cdn.simpleicons.org/vmware/607078" },
  { name: "PuTTY", icon: "https://cdn.simpleicons.org/putty/000000" },
];

const aiTools = [
  "LangChain",
  "Cohere Embeddings",
  "Gemini API",
  "RAGAS",
  "Langfuse",
];

function SkillPill({ skill }: { skill: Skill }) {
  return (
    <div className="flex items-center gap-3 glass rounded-2xl px-6 py-4 mx-2 shrink-0 hover:bg-white/[0.08] transition-colors duration-300">
      <div className="w-10 h-10 rounded-full bg-white/95 flex items-center justify-center shrink-0">
        {skill.icon ? (
          <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
        ) : (
          <Database size={20} color={skill.lucideColor ?? "#22d3ee"} />
        )}
      </div>
      <span className="text-white font-semibold text-sm whitespace-nowrap">{skill.name}</span>
    </div>
  );
}

function MarqueeRow({ skills, direction, speed }: { skills: Skill[]; direction: "left" | "right"; speed: number }) {
  // Duplicate the list so the loop is seamless
  const looped = [...skills, ...skills];
  return (
    <div className="relative overflow-hidden py-2 marquee-mask">
      <div
        className="flex w-max"
        style={{
          animation: `${direction === "left" ? "marquee-left" : "marquee-right"} ${speed}s linear infinite`,
        }}
      >
        {looped.map((skill, i) => (
          <SkillPill key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden">
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .marquee-mask {
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
        .marquee-mask:hover .flex {
          animation-play-state: paused;
        }
      `}</style>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />

      <div
        ref={ref}
        className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="text-center mb-16 px-4">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-purple-400 text-sm font-medium mb-4">
            My Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-600 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Languages, frameworks, and tools I use to build full-stack web applications and AI-powered systems.
          </p>
        </div>

        <div className="space-y-4">
          <MarqueeRow skills={rowOne} direction="left" speed={28} />
          <MarqueeRow skills={rowTwo} direction="right" speed={26} />
        </div>

        {/* Infrastructure & Networking */}
        <div className="mt-14 text-center px-4">
          <h3 className="text-xl font-bold text-white mb-2">Infrastructure &amp; Networking</h3>
          <p className="text-slate-400 text-sm mb-2 max-w-xl mx-auto">
            Practiced through Huawei &amp; Cisco networking certifications.
          </p>
        </div>
        <MarqueeRow skills={rowThree} direction="left" speed={20} />

        {/* AI / RAG Tooling */}
        <div className="mt-16 text-center px-4">
          <h3 className="text-xl font-bold text-white mb-2">AI / RAG Tooling</h3>
          <p className="text-slate-400 text-sm mb-6 max-w-xl mx-auto">
            Applied while building CyberGuard AI, my Retrieval-Augmented Generation thesis project.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {aiTools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-xl glass text-sm text-slate-300 hover:text-purple-400 hover:border-purple-500/30 transition-all duration-300 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}