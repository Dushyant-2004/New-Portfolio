import type { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { 
  Terminal,
  GitBranch,
  Zap,
} from 'lucide-react';

// ── Tech Logo SVGs ─────────────────────────────────────────────────────
const techLogos: Record<string, ReactNode> = {
  React: (
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
      <circle cx="16" cy="16" r="3" fill="#61DAFB" />
      <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
      <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)" />
      <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)" />
    </svg>
  ),
  'Next.js': (
    <svg viewBox="0 0 32 32" className="w-7 h-7">
      <circle cx="16" cy="16" r="14" fill="white" />
      <path d="M13 10v12l10-12" fill="black" />
      <path d="M20 10v8" stroke="black" strokeWidth="2" />
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 32 32" className="w-7 h-7">
      <rect x="2" y="2" width="28" height="28" rx="3" fill="#3178C6" />
      <path d="M18.5 16.5v-2h-9v2h3v9h3v-9h3z" fill="white" />
      <path d="M23 18.5c0-1.5-1-2.5-3-2.5s-3 1-3 2.5c0 1.3 1 2 2.5 2.3l1 .2c1 .2 1.5.5 1.5 1.2 0 .8-.7 1.3-1.8 1.3-1.2 0-2-.6-2.1-1.5h-1.6c.1 1.8 1.5 3 3.7 3s3.3-1.2 3.3-2.8c0-1.4-1-2.2-2.8-2.6l-.8-.2c-.9-.2-1.4-.5-1.4-1.1 0-.7.6-1.2 1.6-1.2 1 0 1.6.5 1.7 1.2h1.7z" fill="white" />
    </svg>
  ),
  'Tailwind CSS': (
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
      <path d="M16 8c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.14.28 1.96 1.12 2.86 2.04C18.16 15.36 20 17.25 24 17.25c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.28-1.96-1.12-2.86-2.04C21.84 9.89 20 8 16 8zM8 17.25c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.14.28 1.96 1.12 2.86 2.04 1.56 1.57 3.4 3.46 7.39 3.46 4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.28-1.96-1.12-2.86-2.04C13.84 19.14 12 17.25 8 17.25z" fill="#06B6D4" />
    </svg>
  ),
  GSAP: (
    <svg viewBox="0 0 32 32" className="w-7 h-7">
      <circle cx="16" cy="16" r="14" fill="#88CE02" />
      <text x="16" y="20" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1a1a2e" fontFamily="Arial">GS</text>
    </svg>
  ),
  'Framer Motion': (
    <svg viewBox="0 0 32 32" className="w-7 h-7">
      <path d="M6 6h20v10H16L6 6z" fill="#FF0055" />
      <path d="M6 16h10l10 10H6V16z" fill="#FF0055" opacity="0.7" />
      <path d="M6 16h10v10L6 16z" fill="#FF0055" opacity="0.4" />
    </svg>
  ),
  'Node.js': (
    <svg viewBox="0 0 32 32" className="w-7 h-7">
      <path d="M16 2L3 9.5v13L16 30l13-7.5v-13L16 2z" fill="#339933" />
      <text x="16" y="20" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white" fontFamily="Arial">N</text>
    </svg>
  ),
  Express: (
    <svg viewBox="0 0 32 32" className="w-7 h-7">
      <rect x="2" y="8" width="28" height="16" rx="3" fill="#333" />
      <text x="16" y="20" textAnchor="middle" fontSize="8" fontWeight="bold" fill="white" fontFamily="Arial">EX</text>
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 32 32" className="w-7 h-7">
      <path d="M16 2c-1.5 5-5 8-5 14 0 5 2 10 5 14 3-4 5-9 5-14 0-6-3.5-9-5-14z" fill="#47A248" />
      <path d="M16 2c-.5 5-2 8-2 14 0 5 .8 10 2 14" stroke="#2E7D32" strokeWidth="1" fill="none" />
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 32 32" className="w-7 h-7">
      <ellipse cx="15" cy="14" rx="10" ry="11" fill="#336791" />
      <ellipse cx="15" cy="14" rx="7" ry="8" fill="#fff" opacity="0.2" />
      <text x="15" y="18" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white" fontFamily="Arial">P</text>
      <path d="M22 18c2 3 4 6 3 9-1 2-3 1-3-1 0-3-1-5-3-7" stroke="#336791" strokeWidth="2" fill="none" />
    </svg>
  ),
  'REST APIs': (
    <svg viewBox="0 0 32 32" className="w-7 h-7">
      <rect x="3" y="6" width="26" height="20" rx="3" fill="none" stroke="#4F6DFF" strokeWidth="2" />
      <path d="M8 14h4M8 18h6M20 14h4M20 18h2" stroke="#4F6DFF" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="16" r="2" fill="#4F6DFF" />
    </svg>
  ),
  GraphQL: (
    <svg viewBox="0 0 32 32" className="w-7 h-7">
      <polygon points="16,3 28,10 28,22 16,29 4,22 4,10" fill="none" stroke="#E535AB" strokeWidth="1.5" />
      <circle cx="16" cy="3" r="2" fill="#E535AB" />
      <circle cx="28" cy="10" r="2" fill="#E535AB" />
      <circle cx="28" cy="22" r="2" fill="#E535AB" />
      <circle cx="16" cy="29" r="2" fill="#E535AB" />
      <circle cx="4" cy="22" r="2" fill="#E535AB" />
      <circle cx="4" cy="10" r="2" fill="#E535AB" />
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 32 32" className="w-7 h-7">
      <path d="M29.7 15.3L16.7 2.3c-.4-.4-1-.4-1.4 0l-2.7 2.7 3.4 3.4c.8-.3 1.7-.1 2.3.5.6.6.8 1.5.5 2.3l3.3 3.3c.8-.3 1.7-.1 2.3.5.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.7-.7-.8-1.7-.4-2.5L18 12.3v7.2c.2.1.4.3.6.5.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.8-.8-.8-2.1 0-2.9.2-.2.5-.4.8-.5v-7.2c-.3-.1-.5-.3-.8-.5-.7-.7-.8-1.7-.4-2.5l-3.3-3.4-8.7 8.7c-.4.4-.4 1 0 1.4l13 13c.4.4 1 .4 1.4 0l12.9-12.9c.4-.4.4-1 0-1.4z" fill="#F05032" />
    </svg>
  ),
  'VS Code': (
    <svg viewBox="0 0 32 32" className="w-7 h-7">
      <path d="M24 2.5L10 12.5 4 8l-2 2v12l2 2 6-4.5L24 29.5l6-3V5.5l-6-3z" fill="#007ACC" />
      <path d="M24 2.5L10 12.5v7L24 29.5V2.5z" fill="#1F9CF0" opacity="0.6" />
    </svg>
  ),
  Figma: (
    <svg viewBox="0 0 32 32" className="w-7 h-7">
      <circle cx="20" cy="16" r="4" fill="#1ABCFE" />
      <path d="M12 28a4 4 0 004-4v-4h-4a4 4 0 000 8z" fill="#0ACF83" />
      <path d="M12 4a4 4 0 000 8h4V4h-4z" fill="#F24E1E" />
      <path d="M16 4v8h4a4 4 0 000-8h-4z" fill="#FF7262" />
      <path d="M12 12a4 4 0 000 8h4v-8h-4z" fill="#A259FF" />
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 32 32" className="w-7 h-7">
      <path d="M18 8h3v3h-3V8zM14 8h3v3h-3V8zM10 8h3v3h-3V8zM14 4h3v3h-3V4zM10 12h3v3h-3v-3zM6 12h3v3H6v-3zM14 12h3v3h-3v-3zM18 12h3v3h-3v-3z" fill="#2496ED" />
      <path d="M30 14c-1-1-3-1.5-4.5-1 -.5-2-2-3-3.5-3.5v0c0 0-1 4-6 4H4c-.5 2-.5 4 0 6 1 4 4 7 8 8 5 1.5 11 0 15-4 2-2 3.5-5 4-8h-1z" fill="#2496ED" />
    </svg>
  ),
  Vercel: (
    <svg viewBox="0 0 32 32" className="w-7 h-7">
      <path d="M16 4L30 28H2L16 4z" fill="white" />
    </svg>
  ),
  AWS: (
    <svg viewBox="0 0 32 32" className="w-7 h-7">
      <path d="M8 20l2-8 2 8M9 17h2" stroke="#FF9900" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M15 13l1.5 4 1.5-4 1.5 4 1.5-4" stroke="#FF9900" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23 14c1-1.5 3-1 3 1s-2 2-3 2" stroke="#FF9900" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M4 22c4 3 10 4 16 2" stroke="#FF9900" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M26 21l2-1-2-1" stroke="#FF9900" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

// ── Skill items with category info ───────────────────────────────────
interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
}

const row1: SkillItem[] = [
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'Git', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
  { name: 'Figma', category: 'tools' },
];

const row2: SkillItem[] = [
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'GSAP', category: 'frontend' },
  { name: 'Framer Motion', category: 'frontend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'GraphQL', category: 'backend' },
  { name: 'Docker', category: 'tools' },
  { name: 'Vercel', category: 'tools' },
  { name: 'AWS', category: 'tools' },
];

// ── Single marquee card ──────────────────────────────────────────────
function SkillCard({ skill }: { skill: SkillItem }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-2xl bg-[rgba(11,18,34,0.65)] border border-[rgba(242,245,250,0.08)] hover:border-[rgba(79,109,255,0.45)] hover:bg-[rgba(79,109,255,0.08)] transition-all duration-300 cursor-default select-none group">
      <span className="transition-transform duration-300 group-hover:scale-110">
        {techLogos[skill.name]}
      </span>
      <span className="text-[#E2E8F0] font-medium text-base whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );
}

// ── Infinite marquee row ─────────────────────────────────────────────
function MarqueeRow({
  items,
  direction = 'left',
  speed = 35,
}: {
  items: SkillItem[];
  direction?: 'left' | 'right';
  speed?: number;
}) {
  // We duplicate items 4× so the strip never looks empty
  const duplicated = [...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-3">
      {/* fade masks on edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#070B14] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#070B14] to-transparent" />

      <div
        className="flex gap-5"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
          width: 'max-content',
        }}
      >
        {duplicated.map((skill, i) => (
          <SkillCard key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────
export function Capabilities() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.12 });

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="relative w-full py-28 bg-[#070B14] overflow-hidden"
    >
      {/* inline keyframes for the marquee */}
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* Section Label */}
      <div
        className={`text-center mb-4 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <span className="text-sm font-medium text-[#4F6DFF] uppercase tracking-wider">
          Skills & Expertise
        </span>
      </div>

      {/* Main Heading */}
      <div className="text-center mb-14">
        <h2
          className={`text-[clamp(36px,5vw,64px)] font-bold text-white leading-tight transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.1s' }}
        >
          My <span className="text-[#4F6DFF]">Tech Stack</span>
        </h2>
        <p
          className={`text-[#A7B1C6] mt-4 max-w-xl mx-auto px-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      {/* ─── Scrolling Rows ─────────────────────────────────────── */}
      <div
        className={`space-y-4 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '0.3s' }}
      >
        <MarqueeRow items={row1} direction="left" speed={40} />
        <MarqueeRow items={row2} direction="right" speed={45} />
      </div>

      {/* ─── Stats Row ──────────────────────────────────────────── */}
      <div className="w-full max-w-[1100px] mx-auto px-6 lg:px-12">
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.5s' }}
        >
          {[
            { icon: <Terminal className="w-5 h-5" />, label: '5+ Years', sublabel: 'Experience' },
            { icon: <GitBranch className="w-5 h-5" />, label: '50+', sublabel: 'Projects' },
            { icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><circle cx="20" cy="16" r="4" fill="#1ABCFE" /><path d="M12 28a4 4 0 004-4v-4h-4a4 4 0 000 8z" fill="#0ACF83" /><path d="M12 4a4 4 0 000 8h4V4h-4z" fill="#F24E1E" /><path d="M16 4v8h4a4 4 0 000-8h-4z" fill="#FF7262" /><path d="M12 12a4 4 0 000 8h4v-8h-4z" fill="#A259FF" /></svg>, label: 'UI/UX', sublabel: 'Design' },
            { icon: <Zap className="w-5 h-5" />, label: 'Fast', sublabel: 'Delivery' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 p-4 rounded-xl bg-[rgba(11,18,34,0.4)] border border-[rgba(242,245,250,0.06)] hover:border-[rgba(79,109,255,0.3)] transition-all duration-300"
            >
              <div className="text-[#4F6DFF]">{stat.icon}</div>
              <div>
                <div className="text-white font-semibold">{stat.label}</div>
                <div className="text-[#A7B1C6] text-xs">{stat.sublabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
