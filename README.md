# Dushyant Vashisht — Portfolio

A modern, interactive developer portfolio built with **React 19**, **TypeScript**, and **Vite** — featuring 3D tilt effects, glassmorphism UI, GSAP + Framer Motion animations, a custom cursor, and a dark cinematic design.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.14-88CE02?logo=greensock&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer&logoColor=white)

## Features

- **Animated Preloader** — Cinematic intro screen with image preloading before main content reveals
- **Anime Navigation Bar** — Floating pill-style navbar with icon links and glow effects
- **3D Tilt Cards** — Hero card and project cards react to mouse movement with perspective transforms
- **Custom Cursor** — Branded cursor that replaces the system cursor across the site
- **Scroll Reveal Animations** — Sections and elements animate into view using Intersection Observer
- **Glassmorphism UI** — Frosted-glass cards with blur, transparency, and ambient glow backdrops
- **Infinite Marquee** — Skills section with continuously scrolling tech stack rows
- **Filterable Projects** — Filter projects by category (All, Dashboard, E-commerce, Website)
- **Grain Overlay** — Subtle texture across the entire page for a premium feel
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop
- **Dark Theme** — Deep navy palette (`#070B14`) with blue accent lighting
- **Contact Form** — EmailJS integration for direct messaging with toast notifications

## Sections

| Section | Description |
| --- | --- |
| **Hero** | Full-screen intro with name, tagline, location badge, and 3D tilt card |
| **About** | Professional bio with photo card, 3+ years of experience |
| **Projects** | 4 featured projects (SysDesign, Orbit Commerce, Zeno AI, Code Rift) with category filters |
| **Capabilities** | Tech stack in infinite marquee rows — Frontend, Backend, and Tools |
| **Process** | 4-step development workflow: Discover → Structure → Polish → Ship |
| **Achievements** | Hackathon wins — CyberCup 4.0 (2nd), CodeSangam 2023 (3rd), Hack The League |
| **Contact** | Contact form with EmailJS + social links (GitHub, LinkedIn, Instagram) |

## Tech Stack

| Category | Technologies |
| --- | --- |
| **Framework** | React 19, TypeScript 5.9, Vite 7.2 |
| **Styling** | Tailwind CSS 3.4, tailwindcss-animate |
| **Animations** | GSAP 3.14, Framer Motion 12 |
| **UI Components** | Radix UI primitives, shadcn/ui |
| **Icons** | Lucide React |
| **Forms** | React Hook Form, Zod validation |
| **Email** | EmailJS |
| **Notifications** | Sonner |
| **Charts** | Recharts |

### Custom Hooks

| Hook | Purpose |
| --- | --- |
| `useCustomCursor` | Branded cursor that hides the system cursor |
| `useScrollReveal` | Intersection Observer for scroll-triggered animations |
| `use3DTilt` | 3D tilt effect on mouse movement |
| `useMouseVector` | Mouse position tracking for parallax effects |
| `useMobile` | Responsive breakpoint detection |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Dushyant-2004/New-Portfolio.git
cd "New Portfolio/app"

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
app/
├── public/                  # Static assets (images, fonts)
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components (shadcn, anime-navbar, image-trail, etc.)
│   │   ├── Navigation.tsx   # Main navbar with 7 section links
│   │   └── Preloader.tsx    # Animated loading screen
│   ├── hooks/               # Custom hooks (cursor, tilt, scroll reveal, mouse vector, mobile)
│   ├── lib/
│   │   └── utils.ts         # Utility functions (cn helper)
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Capabilities.tsx
│   │   ├── Process.tsx
│   │   ├── Achievements.tsx
│   │   └── Contact.tsx
│   ├── App.tsx              # Root component — assembles all sections
│   ├── App.css
│   ├── index.css            # Global styles and Tailwind imports
│   └── main.tsx             # Entry point
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Design

| Element | Value |
| --- | --- |
| **Background** | `#070B14` (deep navy) |
| **Surface** | `#0B1222` (card backgrounds) |
| **Accent** | `#4F6DFF` (bright blue) |
| **Text Primary** | `#F2F5FA` (off-white) |
| **Text Secondary** | `#A7B1C6` (muted blue-gray) |
| **Heading Font** | Space Grotesk |
| **Body Font** | Inter |
| **Mono Font** | JetBrains Mono |

## Author

**Dushyant Vashisht**

- GitHub: [@Dushyant-2004](https://github.com/Dushyant-2004)
- LinkedIn: [Dushyant Vashisht](https://www.linkedin.com/in/dushyant-vashisht-908b752a9/)

## License

© 2025 Dushyant Vashisht. All rights reserved.
