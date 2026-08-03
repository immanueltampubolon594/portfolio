# Immanuel's Portfolio Website - Development Plan

## Design Guidelines

### Design References
- **Futuristic/Cyber aesthetic**: Dark mode, neon glows, glassmorphism
- **Premium startup feel**: Clean layouts, bold typography, smooth animations

### Color Palette
- Background: #0a0a0f (Deep Dark), #0d1117 (Dark Navy)
- Primary: #3b82f6 (Neon Blue)
- Secondary: #8b5cf6 (Purple)
- Accent: #06b6d4 (Cyan)
- Glow: #60a5fa (Light Blue Glow)
- Text: #ffffff (White), #94a3b8 (Slate Gray)
- Glass: rgba(255,255,255,0.05) with backdrop-blur

### Typography
- Headings: Inter, font-weight 700-800
- Body: Inter, font-weight 400
- Accent/Code: JetBrains Mono

### Key Component Styles
- Glass Cards: bg-white/5, backdrop-blur-xl, border border-white/10, rounded-2xl
- Buttons: Gradient bg (blue to purple), glow shadow, hover scale
- Sections: 80-100px vertical padding, max-w-7xl container
- Animations: Fade-in on scroll, hover glow, typing effect

### Images (CDN)
- hero-bg-tech-circuit.jpg - Futuristic tech background
- profile-immanuel.jpg - Professional portrait
- project-batak-language.jpg - Batak language learning project
- project-agriculture-system.jpg - Agriculture scheduling system

---

## Development Tasks & Files

1. **src/pages/Index.tsx** - Main page composing all sections
2. **src/components/Navbar.tsx** - Sticky navbar with menu, mobile hamburger, CTA button
3. **src/components/HeroSection.tsx** - Hero with typing effect, particles, profile image, CTA buttons
4. **src/components/AboutSection.tsx** - 2-column layout, stats, glassmorphism cards
5. **src/components/SkillsSection.tsx** - Skill cards with icons, progress bars, hover effects
6. **src/components/ProjectsSection.tsx** - Project grid with premium cards, tech badges
7. **src/components/ExperienceSection.tsx** - Timeline for education/experience + Certificates/Achievements cards
8. **src/components/ContactFooter.tsx** - Contact form, social links, footer
9. **src/index.css** - Global styles, animations, glow effects, glassmorphism utilities
10. **index.html** - Update title