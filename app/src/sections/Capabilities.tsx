import { useScrollReveal } from '@/hooks/useScrollReveal';
import { 
  Code2, 
  Palette, 
  Zap, 
  Layers, 
  Accessibility, 
  Gauge,
  GitBranch,
  TestTube
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
}

const buildSkills: Skill[] = [
  { name: 'React', icon: <Code2 className="w-5 h-5" />, level: 95 },
  { name: 'TypeScript', icon: <Code2 className="w-5 h-5" />, level: 92 },
  { name: 'Next.js', icon: <Layers className="w-5 h-5" />, level: 90 },
  { name: 'Tailwind CSS', icon: <Palette className="w-5 h-5" />, level: 95 },
  { name: 'GSAP', icon: <Zap className="w-5 h-5" />, level: 85 },
  { name: 'Node.js', icon: <Code2 className="w-5 h-5" />, level: 80 },
];

const systemSkills: Skill[] = [
  { name: 'Design Tokens', icon: <Palette className="w-5 h-5" />, level: 88 },
  { name: 'Accessibility', icon: <Accessibility className="w-5 h-5" />, level: 90 },
  { name: 'Performance', icon: <Gauge className="w-5 h-5" />, level: 92 },
  { name: 'Testing', icon: <TestTube className="w-5 h-5" />, level: 85 },
  { name: 'CI/CD', icon: <GitBranch className="w-5 h-5" />, level: 82 },
  { name: 'Architecture', icon: <Layers className="w-5 h-5" />, level: 87 },
];

export function Capabilities() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  return (
    <section 
      ref={sectionRef}
      id="capabilities" 
      className="relative w-full min-h-screen py-20 bg-[#070B14] overflow-hidden flex items-center"
    >
      {/* Section Label */}
      <div 
        className={`absolute top-12 left-1/2 -translate-x-1/2 section-label transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        Capabilities
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Main Card */}
        <div 
          className={`glass-card rounded-[28px] p-8 md:p-12 lg:p-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
          style={{
            transform: isVisible 
              ? 'perspective(1000px) rotateX(6deg) rotateY(10deg)' 
              : 'perspective(1000px) rotateX(15deg) rotateY(25deg) translateX(100px)',
            transformStyle: 'preserve-3d',
            transitionDelay: '0.1s',
          }}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Header */}
            <div>
              <h2 
                className={`text-[clamp(32px,4vw,52px)] font-bold text-white leading-tight mb-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
                style={{ transitionDelay: '0.2s', transform: 'translateZ(40px)' }}
              >
                What I do<br />
                <span className="text-[#4F6DFF]">best</span>
              </h2>
              
              <p 
                className={`text-[#A7B1C6] leading-relaxed mb-8 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '0.3s', transform: 'translateZ(30px)' }}
              >
                I specialize in building modern web applications with a focus on 
                performance, accessibility, and exceptional user experiences.
              </p>

              {/* Stats */}
              <div 
                className={`grid grid-cols-2 gap-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '0.4s', transform: 'translateZ(20px)' }}
              >
                <div className="glass-card rounded-2xl p-5">
                  <div className="text-3xl font-bold text-[#4F6DFF] mb-1">5+</div>
                  <div className="text-sm text-[#A7B1C6]">Years Experience</div>
                </div>
                <div className="glass-card rounded-2xl p-5">
                  <div className="text-3xl font-bold text-[#4F6DFF] mb-1">50+</div>
                  <div className="text-sm text-[#A7B1C6]">Projects Shipped</div>
                </div>
              </div>
            </div>

            {/* Right Column - Skills */}
            <div className="space-y-10" style={{ transform: 'translateZ(30px)' }}>
              {/* Build Skills */}
              <div>
                <h3 
                  className={`text-sm font-medium text-[#A7B1C6] uppercase tracking-wider mb-4 transition-all duration-700 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: '0.35s' }}
                >
                  Build
                </h3>
                <div className="space-y-3">
                  {buildSkills.map((skill, index) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill} 
                      index={index}
                      isVisible={isVisible}
                    />
                  ))}
                </div>
              </div>

              {/* System Skills */}
              <div>
                <h3 
                  className={`text-sm font-medium text-[#A7B1C6] uppercase tracking-wider mb-4 transition-all duration-700 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: '0.5s' }}
                >
                  Systems
                </h3>
                <div className="flex flex-wrap gap-2">
                  {systemSkills.map((skill, index) => (
                    <SkillTag 
                      key={skill.name} 
                      skill={skill} 
                      index={index}
                      isVisible={isVisible}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div 
        className="absolute top-1/2 right-0 w-1/2 h-3/4 -translate-y-1/2 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle at right center, rgba(79, 109, 255, 0.2) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
      />
    </section>
  );
}

interface SkillBarProps {
  skill: Skill;
  index: number;
  isVisible: boolean;
}

function SkillBar({ skill, index, isVisible }: SkillBarProps) {
  return (
    <div 
      className={`group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
      }`}
      style={{ transitionDelay: `${0.4 + index * 0.05}s` }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <span className="text-[#4F6DFF]">{skill.icon}</span>
          <span className="text-white font-medium">{skill.name}</span>
        </div>
        <span className="text-sm text-[#A7B1C6]">{skill.level}%</span>
      </div>
      <div className="h-2 bg-[rgba(242,245,250,0.05)] rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#4F6DFF] to-[#7B9FFF] rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_20px_rgba(79,109,255,0.5)]"
          style={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${0.5 + index * 0.05}s`,
          }}
        />
      </div>
    </div>
  );
}

interface SkillTagProps {
  skill: Skill;
  index: number;
  isVisible: boolean;
}

function SkillTag({ skill, index, isVisible }: SkillTagProps) {
  return (
    <div
      className={`skill-tag flex items-center gap-2 transition-all duration-500 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}
      style={{ transitionDelay: `${0.55 + index * 0.03}s` }}
      data-cursor-hover
    >
      {skill.icon}
      <span>{skill.name}</span>
    </div>
  );
}
