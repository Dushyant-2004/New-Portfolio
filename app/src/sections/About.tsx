import { useScrollReveal } from '@/hooks/useScrollReveal';

export function About() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.2 });
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const { ref: textRef, isVisible: textVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative w-full min-h-screen flex items-center py-20 bg-[#070B14] overflow-hidden"
    >
      {/* Section Label */}
      <div 
        className={`absolute top-12 left-1/2 -translate-x-1/2 section-label transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        About
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Photo Card */}
          <div
            ref={imageRef}
            className={`relative transition-all duration-1000 ${
              imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
            style={{
              transitionDelay: '0.1s',
            }}
          >
            <div 
              className="glass-card rounded-[28px] overflow-hidden hover-lift"
              style={{
                transform: 'perspective(1000px) rotateY(8deg)',
                transformStyle: 'preserve-3d',
              }}
              data-cursor-hover
            >
              <div className="aspect-[4/5] relative">
                <img
                  src="/about_photo.jpg"
                  alt="Alex Chen"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/60 via-transparent to-transparent" />
              </div>
            </div>
            
            {/* Decorative Glow */}
            <div 
              className="absolute -z-10 -bottom-10 -right-10 w-3/4 h-3/4 rounded-full opacity-40"
              style={{
                background: 'radial-gradient(circle, rgba(79, 109, 255, 0.3) 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
            />
          </div>

          {/* Text Card */}
          <div
            ref={textRef}
            className={`transition-all duration-1000 ${
              textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
            style={{
              transitionDelay: '0.2s',
            }}
          >
            <div 
              className="glass-card rounded-[28px] p-8 md:p-12"
              style={{
                transform: 'perspective(1000px) rotateY(-6deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <h2 
                className="text-[clamp(32px,4vw,56px)] font-bold text-white mb-8 leading-tight"
                style={{ transform: 'translateZ(30px)' }}
              >
                Code is a<br />
                <span className="text-[#4F6DFF]">conversation.</span>
              </h2>
              
              <div className="space-y-6 text-[#A7B1C6] leading-relaxed" style={{ transform: 'translateZ(20px)' }}>
                <p className="text-lg">
                  I'm a frontend engineer who cares about clarity, performance, and craft. 
                  I turn complex products into calm, intuitive interfaces—without losing the personality.
                </p>
                
                <p>
                  With over 5 years of experience building web applications, I've honed my skills 
                  in React, TypeScript, and modern frontend architecture. I believe great software 
                  should feel invisible—getting out of the way so users can accomplish their goals.
                </p>

                <div className="pt-4 border-t border-[rgba(242,245,250,0.08)]">
                  <p className="text-sm text-[#4F6DFF]">
                    Currently shipping at a design-led startup. Open to collaborations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
