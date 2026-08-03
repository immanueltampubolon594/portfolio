import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificatesSection from "@/components/CertificatesSection";
import ContactFooter from "@/components/ContactFooter";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white grid-pattern">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificatesSection />
      <ContactFooter />
    </div>
  );
}