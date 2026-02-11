import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Search, Layout, Sparkles, Rocket } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'Scope, goals, and constraints. Understanding the problem before solving it.',
    icon: <Search className="w-6 h-6" />,
  },
  {
    number: '02',
    title: 'Structure',
    description: 'Architecture + component system. Building a solid foundation.',
    icon: <Layout className="w-6 h-6" />,
  },
  {
    number: '03',
    title: 'Polish',
    description: 'Motion, accessibility, performance. The details that make the difference.',
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    number: '04',
    title: 'Ship',
    description: 'CI/CD, testing, handoff. Delivering with confidence.',
    icon: <Rocket className="w-6 h-6" />,
  },
];

export function Process() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  return (
    <section 
      ref={sectionRef}
      id="process" 
      className="relative w-full min-h-screen py-20 bg-[#0B1222] overflow-hidden flex items-center"
    >
      {/* Section Label */}
      <div 
        className={`absolute top-12 left-1/2 -translate-x-1/2 section-label transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        Process
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Main Card */}
        <div 
          className={`glass-card rounded-[28px] p-8 md:p-12 lg:p-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          style={{
            transform: isVisible 
              ? 'perspective(1000px) rotateX(8deg) rotateY(-10deg)' 
              : 'perspective(1000px) rotateX(25deg) rotateY(-25deg) translateY(100px)',
            transformStyle: 'preserve-3d',
            transitionDelay: '0.1s',
          }}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column */}
            <div style={{ transform: 'translateZ(40px)' }}>
              <h2 
                className={`text-[clamp(32px,4vw,52px)] font-bold text-white leading-tight mb-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '0.2s' }}
              >
                How I<br />
                <span className="text-[#4F6DFF]">build</span>
              </h2>
              
              <p 
                className={`text-[#A7B1C6] leading-relaxed text-lg transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '0.3s' }}
              >
                A tight loop of discovery, structure, polish, and delivery. 
                Every project follows this rhythm to ensure quality and consistency.
              </p>

              {/* Decorative Element */}
              <div 
                className={`mt-8 transition-all duration-700 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: '0.4s' }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4F6DFF]/10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#4F6DFF] animate-pulse" />
                  </div>
                  <span className="text-sm text-[#A7B1C6]">Always iterating</span>
                </div>
              </div>
            </div>

            {/* Right Column - Steps */}
            <div className="space-y-6" style={{ transform: 'translateZ(30px)' }}>
              {processSteps.map((step, index) => (
                <ProcessStepCard 
                  key={step.number} 
                  step={step} 
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div 
        className="absolute bottom-0 left-0 w-1/2 h-1/2 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at bottom left, rgba(79, 109, 255, 0.3) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
      />
    </section>
  );
}

interface ProcessStepCardProps {
  step: ProcessStep;
  index: number;
  isVisible: boolean;
}

function ProcessStepCard({ step, index, isVisible }: ProcessStepCardProps) {
  return (
    <div
      className={`group relative flex items-start gap-5 p-5 rounded-2xl transition-all duration-700 hover:bg-[rgba(79,109,255,0.05)] ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
      }`}
      style={{ transitionDelay: `${0.35 + index * 0.08}s` }}
      data-cursor-hover
    >
      {/* Connector Line */}
      {index < 3 && (
        <div 
          className="absolute left-[42px] top-[70px] w-px h-[calc(100%+12px)] bg-gradient-to-b from-[rgba(79,109,255,0.3)] to-transparent"
        />
      )}

      {/* Icon/Number */}
      <div className="relative flex-shrink-0 w-14 h-14 rounded-xl bg-[rgba(79,109,255,0.1)] border border-[rgba(79,109,255,0.2)] flex items-center justify-center text-[#4F6DFF] transition-all duration-300 group-hover:scale-110 group-hover:bg-[rgba(79,109,255,0.2)]">
        {step.icon}
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs text-[#4F6DFF] font-mono">{step.number}</span>
          <h3 className="text-lg font-semibold text-white group-hover:text-[#4F6DFF] transition-colors duration-300">
            {step.title}
          </h3>
        </div>
        <p className="text-sm text-[#A7B1C6] leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}
