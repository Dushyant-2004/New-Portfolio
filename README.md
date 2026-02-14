# Personal Portfolio

A modern, interactive portfolio website built with React, TypeScript, and Vite — featuring smooth animations, custom cursor, 3D effects, anime-style navigation, and a dark glassmorphism design.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?logo=framer&logoColor=white)

## Features

- **Anime Navigation Bar** — Floating pill-style navbar with animated mascot and glow effects
- **Image Trail Effect** — Interactive cursor trail with animated icons in the Skills section
- **3D Tilt Hero Card** — Perspective-based card that reacts to mouse movement
- **Custom Cursor** — A branded cursor that adapts to interactive elements
- **Scroll Reveal Animations** — Sections animate into view as you scroll
- **Glassmorphism UI** — Frosted-glass cards with ambient glow effects
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop
- **Dark Theme** — Sleek dark palette with accent lighting
- **Contact Form** — EmailJS integration for direct messaging

## Sections

| Section          | Description                                      |
| ---------------- | ------------------------------------------------ |
| **Hero**         | Animated intro with name, role, and location     |
| **About**        | Background and personal story                    |
| **Projects**     | Featured work and case studies                   |
| **Skills**       | Tech stack organized by Frontend, Backend, Tools |
| **Process**      | Design & development workflow                    |
| **Achievements** | Certifications and accomplishments               |
| **Contact**      | Get in touch form with EmailJS                   |

## Tech Stack

- **Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + tailwindcss-animate
- **Animations:** Framer Motion, GSAP
- **UI Components:** Radix UI primitives + shadcn/ui
- **Icons:** Lucide React
- **Charts:** Recharts
- **Forms:** React Hook Form + Zod validation
- **Email:** EmailJS
- **Notifications:** Sonner

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
├── public/             # Static assets (images, etc.)
├── src/
│   ├── components/     
│   │   ├── ui/         # UI components (anime-navbar, image-trail, shadcn)
│   │   ├── Navigation.tsx
│   │   └── Preloader.tsx
│   ├── hooks/          # Custom hooks (cursor, tilt, scroll reveal, mouse vector)
│   ├── lib/            # Utility functions
│   ├── sections/       # Page sections (Hero, About, Projects, Skills, etc.)
│   ├── App.tsx         # Root component
│   └── main.tsx        # Entry point
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## Author

**Dushyant Vashisht**

- GitHub: [@Dushyant-2004](https://github.com/Dushyant-2004)
- LinkedIn: [Dushyant Vashisht](https://www.linkedin.com/in/dushyant-vashisht-908b752a9/)

## License

© 2024 Dushyant Vashisht. All rights reserved.
