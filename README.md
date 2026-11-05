<div align="center">

# MY Portofolio



*[Short description — 1-2 kalimat yang nerangin project ini untuk visitor baru]*

<br/>

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)](https://pnpm.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

[**🌐 Live Demo**](#) · [Report Bug](#) · [Author](#author)

</div>

---

## 📖 About

**[NAMA PROJECT]** is a [kategori project — e.g. modern dashboard / SaaS landing page / portfolio site] built with a production-grade frontend stack. It combines **Vite's blazing-fast build times**, **React 18's modern features**, and **shadcn/ui's accessible component primitives** — all styled with Tailwind CSS.

Built as [motivation — e.g. a personal project / client work / open source contribution], this project emphasizes **developer experience**, **type safety**, and **UI consistency**.

---

## ✨ Features

- ⚡ **Vite-powered** — instant HMR and sub-second cold starts
- 🎨 **shadcn/ui components** — accessible, customizable, copy-paste ready
- 💅 **Tailwind CSS** — utility-first styling with design tokens
- 🔒 **Full TypeScript** — end-to-end type safety
- 📱 **Responsive by default** — mobile-first with breakpoint helpers
- 🌙 **Dark mode ready** — system-aware theme switching
- 🚀 **Production optimized** — tree-shaking, code-splitting, lazy loading
- 🧩 **Modular architecture** — organized by feature, scalable from day one

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| **Build Tool** | Vite |
| **Framework** | React 18 |
| **Language** | TypeScript |
| **UI Components** | shadcn/ui (Radix UI primitives) |
| **Styling** | Tailwind CSS |
| **Package Manager** | pnpm |
| **Linting** | ESLint |
| **Formatting** | Prettier |

---

## 📁 Project Structure

```
project-root/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   └── ui/          # shadcn/ui components (pre-downloaded)
│   ├── pages/
│   │   └── Index.tsx    # Main page entry point
│   ├── lib/             # Shared utilities
│   ├── hooks/           # Custom React hooks
│   ├── App.tsx          # Router component
│   ├── main.tsx         # Project entry point
│   └── index.css        # Global styles
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

> The `@/` path alias points to the `src/` directory.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+
- **pnpm** 8+ (`npm install -g pnpm`)

### Installation

```bash
# Clone the repository
git clone https://github.com/immanueltampubolon594/[NAMA-REPO].git
cd [NAMA-REPO]

# Install dependencies
pnpm i
```

### Development

```bash
# Start the dev server (hot reload at http://localhost:5173)
pnpm run dev
```

### Production Build

```bash
# Create optimized production build
pnpm run build

# Preview the production build locally
pnpm run preview
```

---

## 🎨 Customization

### Modify the UI

Edit `src/pages/Index.tsx` to build your main page. All shadcn/ui components are available under `@/components/ui`.

```tsx
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Index() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  )
}
```

### Add Global Styles

Edit `src/index.css` or create new CSS files as needed.

### Tweak Tailwind Config

Modify `tailwind.config.ts` to customize colors, fonts, spacing, or add plugins.

---

## 🧩 Available shadcn/ui Components

All shadcn/ui components have been pre-downloaded in `@/components/ui`:

<details>
<summary>Click to see component list</summary>

- Button, Card, Dialog, Dropdown Menu, Form, Input
- Label, Popover, Select, Separator, Sheet, Tabs
- Toast, Tooltip, Accordion, Alert, Avatar, Badge
- Breadcrumb, Calendar, Checkbox, Command, Context Menu
- Hover Card, Menubar, Navigation Menu, Pagination
- Progress, Radio Group, Scroll Area, Skeleton, Slider
- Switch, Table, Textarea, Toggle

</details>

To use a component:

```tsx
import { Button } from "@/components/ui/button"
```

---

## 📸 Screenshots

<div align="center">
  <!-- Ganti dengan screenshot asli project kamu -->
  <!-- <img src="./screenshots/home.png" alt="Home Page" width="80%"/> -->
  <sub>Add your screenshots here</sub>
</div>

---

## 🛠️ Scripts

| Command | Description |
|---|---|
| `pnpm i` | Install all dependencies |
| `pnpm run dev` | Start development server |
| `pnpm run build` | Build for production |
| `pnpm run preview` | Preview production build locally |
| `pnpm run lint` | Run ESLint |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the [issues page](#).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Immanuel Tampubolon** — Web & AI Engineer
D3 Computer Technology, Institut Teknologi Del

📧 [immanueltampubolon594@gmail.com](mailto:immanueltampubolon594@gmail.com)
🌐 [Portfolio](https://portfolio-gamma-blush-68.vercel.app) · [LinkedIn](https://linkedin.com/in/immanuel-tampubolon-4a950840b) · [GitHub](https://github.com/immanueltampubolon594)

---

<div align="center">
<sub>Built with Vite, React, TypeScript, and shadcn/ui · 2026</sub>
</div>
