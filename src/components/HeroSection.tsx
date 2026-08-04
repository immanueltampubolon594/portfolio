import { useEffect, useState, useRef, useCallback } from "react";
import { ArrowDown, Download, Eye } from "lucide-react";

const titles = [
  "Full-Stack Developer",
  "Computer Technology Student",
  "AI/RAG Enthusiast",
  "Problem Solver",
];

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  // Typing effect
  useEffect(() => {
    const current = titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(current.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
          if (charIndex + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(current.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  // Particle animation
  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }[] = [];
    const colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#60a5fa"];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      });

      // Draw connections
      ctx.globalAlpha = 0.05;
      ctx.strokeStyle = "#3b82f6";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();
  }, []);

  useEffect(() => {
    initParticles();
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [initParticles]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(https://mgx-backend-cdn.metadl.com/generate/images/1057793/2026-03-29/dd75e23d-4ba7-4a6d-aba9-a4997555ed36.png)`,
        }}
      />
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern" />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10" />
      {/* Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-20">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-sm text-blue-400">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
            Hi, I'm{" "}
            <span className="gradient-text">Immanuel</span>
          </h1>

          <div className="h-12 sm:h-14 flex items-center justify-center lg:justify-start mb-6">
            <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 font-mono">
              {displayText}
              <span className="inline-block w-0.5 h-7 bg-blue-400 ml-1 animate-pulse" />
            </span>
          </div>

          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            Computer Technology student who builds full-stack web
            applications — from distributed systems to AI-powered tools like
            a Retrieval-Augmented Generation (RAG) chatbot built as my
            thesis. Focused on writing practical, well-structured code
            across the stack.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300"
            >
              <Eye size={20} />
              View Projects
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass text-white font-semibold hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>

          {/* Stats — kept consistent with the About section numbers */}
          <div className="flex gap-8 mt-10 justify-center lg:justify-start">
            {[
              { num: "6", label: "Projects" },
              { num: "12+", label: "Certifications" },
              { num: "5", label: "Tech Stacks" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">
                  {stat.num}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0 relative">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-1 animate-gradient" style={{ backgroundSize: "200% 200%" }}>
              <div className="w-full h-full rounded-full bg-[#0a0a0f] p-2">
             <img
  src="/foto.png"
  alt="Immanuel"
  className="w-full h-full rounded-full object-cover"
/>
              </div>
            </div>
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-2 animate-float">
              <span className="text-sm font-semibold text-blue-400">💻 Developer</span>
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-2 animate-float-delayed">
              <span className="text-sm font-semibold text-purple-400">🎓 Student</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-slate-500">Scroll Down</span>
        <ArrowDown size={16} className="text-blue-400" />
      </div>
    </section>
  );
}