import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ImageTrail } from '@/components/ui/image-trail';
import { 
  Code2, 
  Palette, 
  Zap, 
  Layers, 
  Database,
  Globe,
  Server,
  Cpu,
  GitBranch,
  Figma,
  Terminal,
  Box
} from 'lucide-react';

interface SkillCategory {
  title: string;
  color: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    color: '#4F6DFF',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
  },
  {
    title: 'Backend',
    color: '#7B9FFF',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'Tools',
    color: '#A78BFA',
    skills: ['Git', 'VS Code', 'Figma', 'Docker', 'Vercel', 'AWS'],
  },
];

export function Capabilities() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 });
  const trailContainerRef = useRef<HTMLDivElement>(null);

  // Trail icons for the image trail effect
  const trailIcons = [
    <div key="code" className="w-14 h-14 rounded-xl bg-[#4F6DFF]/20 backdrop-blur-sm border border-[#4F6DFF]/30 flex items-center justify-center">
      <Code2 className="w-7 h-7 text-[#4F6DFF]" />
    </div>,
    <div key="palette" className="w-14 h-14 rounded-xl bg-[#7B9FFF]/20 backdrop-blur-sm border border-[#7B9FFF]/30 flex items-center justify-center">
      <Palette className="w-7 h-7 text-[#7B9FFF]" />
    </div>,
    <div key="zap" className="w-14 h-14 rounded-xl bg-[#A78BFA]/20 backdrop-blur-sm border border-[#A78BFA]/30 flex items-center justify-center">
      <Zap className="w-7 h-7 text-[#A78BFA]" />
    </div>,
    <div key="layers" className="w-14 h-14 rounded-xl bg-[#4F6DFF]/20 backdrop-blur-sm border border-[#4F6DFF]/30 flex items-center justify-center">
      <Layers className="w-7 h-7 text-[#4F6DFF]" />
    </div>,
    <div key="database" className="w-14 h-14 rounded-xl bg-[#7B9FFF]/20 backdrop-blur-sm border border-[#7B9FFF]/30 flex items-center justify-center">
      <Database className="w-7 h-7 text-[#7B9FFF]" />
    </div>,
    <div key="globe" className="w-14 h-14 rounded-xl bg-[#A78BFA]/20 backdrop-blur-sm border border-[#A78BFA]/30 flex items-center justify-center">
      <Globe className="w-7 h-7 text-[#A78BFA]" />
    </div>,
    <div key="server" className="w-14 h-14 rounded-xl bg-[#4F6DFF]/20 backdrop-blur-sm border border-[#4F6DFF]/30 flex items-center justify-center">
      <Server className="w-7 h-7 text-[#4F6DFF]" />
    </div>,
    <div key="cpu" className="w-14 h-14 rounded-xl bg-[#7B9FFF]/20 backdrop-blur-sm border border-[#7B9FFF]/30 flex items-center justify-center">
      <Cpu className="w-7 h-7 text-[#7B9FFF]" />
    </div>,
  ];

  return (
    <section 
      ref={sectionRef}
      id="capabilities" 
      className="relative w-full min-h-screen py-24 bg-[#070B14] overflow-hidden"
    >
      {/* Image Trail Background */}
      <div 
        ref={trailContainerRef} 
        className="absolute inset-0 z-0 pointer-events-auto"
      >
        <ImageTrail 
          containerRef={trailContainerRef}
          rotationRange={20}
          interval={120}
          animationSequence={[
            [{ scale: 1.2, opacity: 1 }, { duration: 0.15, ease: "circOut" }],
            [{ scale: 0.8, opacity: 0 }, { duration: 0.6, ease: "circIn" }],
          ]}
        >
          {trailIcons}
        </ImageTrail>
      </div>

      {/* Section Label */}
      <div 
        className={`text-center mb-4 transition-all duration-700 relative z-10 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <span className="text-sm font-medium text-[#4F6DFF] uppercase tracking-wider">
          Skills & Expertise
        </span>
      </div>

      {/* Main Heading */}
      <div className="text-center mb-16 relative z-10">
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

      {/* Skills Grid */}
      <div className="w-full max-w-[1100px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={category.title}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${0.2 + catIndex * 0.1}s` }}
            >
              {/* Card */}
              <div 
                className="relative h-full rounded-2xl p-6 bg-[rgba(11,18,34,0.6)] backdrop-blur-xl border border-[rgba(242,245,250,0.06)] hover:border-[rgba(79,109,255,0.3)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(79,109,255,0.15)]"
              >
                {/* Category Icon */}
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  {catIndex === 0 && <Code2 className="w-6 h-6" style={{ color: category.color }} />}
                  {catIndex === 1 && <Server className="w-6 h-6" style={{ color: category.color }} />}
                  {catIndex === 2 && <Box className="w-6 h-6" style={{ color: category.color }} />}
                </div>

                {/* Category Title */}
                <h3 
                  className="text-xl font-semibold text-white mb-4"
                  style={{ color: category.color }}
                >
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 text-sm font-medium rounded-lg bg-[rgba(242,245,250,0.04)] text-[#E2E8F0] border border-[rgba(242,245,250,0.08)] hover:border-[rgba(79,109,255,0.4)] hover:bg-[rgba(79,109,255,0.1)] transition-all duration-300 cursor-default ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                      }`}
                      style={{ transitionDelay: `${0.4 + catIndex * 0.1 + skillIndex * 0.05}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${category.color}15 0%, transparent 60%)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Row */}
        <div 
          className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          {[
            { icon: <Terminal className="w-5 h-5" />, label: '5+ Years', sublabel: 'Experience' },
            { icon: <GitBranch className="w-5 h-5" />, label: '50+', sublabel: 'Projects' },
            { icon: <Figma className="w-5 h-5" />, label: 'UI/UX', sublabel: 'Design' },
            { icon: <Zap className="w-5 h-5" />, label: 'Fast', sublabel: 'Delivery' },
          ].map((stat) => (
            <div 
              key={stat.label}
              className="flex items-center gap-3 p-4 rounded-xl bg-[rgba(11,18,34,0.4)] border border-[rgba(242,245,250,0.06)]"
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

      {/* Background Glows */}
      <div 
        className="absolute top-1/4 left-0 w-1/3 h-1/2 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at left center, rgba(79, 109, 255, 0.3) 0%, transparent 60%)',
          filter: 'blur(100px)',
        }}
      />
      <div 
        className="absolute bottom-1/4 right-0 w-1/3 h-1/2 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at right center, rgba(167, 139, 250, 0.3) 0%, transparent 60%)',
          filter: 'blur(100px)',
        }}
      />
    </section>
  );
}
