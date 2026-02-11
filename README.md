# Personal Portfolio

A modern, interactive portfolio website built with React, TypeScript, and Vite — featuring smooth animations, a custom cursor, 3D tilt effects, and a dark glassmorphism design.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)

## Features

- **3D Tilt Hero Card** — Perspective-based card that reacts to mouse movement
- **Custom Cursor** — A branded cursor that adapts to interactive elements
- **Scroll Reveal Animations** — Sections animate into view as you scroll
- **Glassmorphism UI** — Frosted-glass cards with ambient glow effects
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop
- **Dark Theme** — Sleek dark palette with accent lighting

## Sections

| Section          | Description                                  |
| ---------------- | -------------------------------------------- |
| **Hero**         | Animated intro with name, role, and location |
| **About**        | Background and personal story                |
| **Projects**     | Featured work and case studies               |
| **Capabilities** | Skills and technologies                      |
| **Process**      | Design & development workflow                |
| **Testimonials** | Client and colleague feedback                |
| **Contact**      | Get in touch form                            |

## Tech Stack

- **Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + tailwindcss-animate
- **UI Components:** Radix UI primitives + shadcn/ui
- **Icons:** Lucide React
- **Charts:** Recharts
- **Forms:** React Hook Form + Zod validation
- **Notifications:** Sonner

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
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
│   ├── components/     # Reusable UI components (Navigation, shadcn/ui)
│   ├── hooks/          # Custom hooks (cursor, tilt, scroll reveal, mobile)
│   ├── lib/            # Utility functions
│   ├── sections/       # Page sections (Hero, About, Projects, etc.)
│   ├── App.tsx         # Root component
│   └── main.tsx        # Entry point
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## License

This project is for personal use. All rights reserved.# New-Portfolio
