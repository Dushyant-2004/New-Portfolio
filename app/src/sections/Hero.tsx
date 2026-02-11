import { useEffect, useRef, useState } from 'react';
import { ArrowDown, MapPin } from 'lucide-react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      const rotateX = (mouseY / (rect.height / 2)) * -6;
      const rotateY = (mouseX / (rect.width / 2)) * 6;

      card.style.transform = `translate(-50%, -50%) perspective(1000px) rotateX(${6 + rotateX}deg) rotateY(${-10 + rotateY}deg)`;
      glow.style.transform = `translate(-50%, -50%) translate(${rotateY * 2}px, ${rotateX * 2}px)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateX(6deg) rotateY(-10deg)';
      glow.style.transform = 'translate(-50%, -50%)';
    };

    card.addEventListener('mousemove', handleMouseMove, { passive: true });
    card.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#070B14]">
      {/* Ambient Glow */}
      <div
        ref={glowRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(72vw,72vh)] h-[min(72vw,72vh)] pointer-events-none transition-transform duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(79, 109, 255, 0.2) 0%, rgba(79, 109, 255, 0) 70%)',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.8s ease-out, transform 0.3s ease-out',
        }}
      />

      {/* Hero Card */}
      <div
        ref={cardRef}
        className="absolute left-1/2 top-[52%] glass-card rounded-[28px] p-8 md:p-12 lg:p-16"
        style={{
          width: 'min(90vw, 1100px)',
          minHeight: 'min(52vh, 520px)',
          transform: `translate(-50%, -50%) perspective(1000px) rotateX(6deg) rotateY(-10deg) ${isLoaded ? 'scale(1)' : 'scale(0.92)'}`,
          opacity: isLoaded ? 1 : 0,
          transition: 'all 1s cubic-bezier(0.23, 1, 0.32, 1)',
          transitionDelay: '0.15s',
        }}
      >
        <div className="flex flex-col h-full justify-between" style={{ transform: 'translateZ(40px)' }}>
          {/* Top Label */}
          <div
            className="section-label mb-8"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease-out',
              transitionDelay: '0.4s',
            }}
          >
            Frontend Engineer
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center">
            <h1
              className="text-[clamp(44px,8vw,84px)] font-bold leading-[0.95] tracking-[-0.02em] text-white mb-6"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0) rotateX(0)' : 'translateY(40px) rotateX(35deg)',
                transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
                transitionDelay: '0.5s',
              }}
            >
              Alex Chen
            </h1>
            
            <p
              className="text-lg md:text-xl text-[#A7B1C6] max-w-xl leading-relaxed"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.7s ease-out',
                transitionDelay: '0.65s',
              }}
            >
              I build fast, accessible, and visually striking web experiences.
            </p>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-12">
            <div
              className="flex items-center gap-2 text-[#A7B1C6]"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'all 0.6s ease-out',
                transitionDelay: '0.75s',
              }}
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Based in Taipei</span>
            </div>

            <button
              onClick={scrollToWork}
              className="btn-primary flex items-center gap-3 group"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.96)',
                transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                transitionDelay: '0.85s',
              }}
              data-cursor-hover
            >
              <span>Explore Work</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Background Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(7, 11, 20, 0.8) 100%)',
        }}
      />
    </section>
  );
}
