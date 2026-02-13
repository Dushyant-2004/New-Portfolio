import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Quote } from 'lucide-react';

interface Achievements {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  position: string;
}

const achievements: Achievements[] = [
  {
    quote: "Secured 2nd Position in CyberCup 4.0 with our innovative project. The experience was incredible and the competition was fierce. Proud of what we achieved!",
    name: "Amity University, Noida",
    role: "Hackathon Winner 2024",
    avatar: "/Cybercup.png",
    position: "2nd Position & Cash Prize of ₹10,000",
  },
     
    {
    quote: "Got 3rd Position in CodeSangam 2023, a prestigious hackathon for innovative solutions. It was an intense battle for problem-solving and innovating new ideas. Grateful for the recognition!",
    name: "SGT University, Gurugram",
    role: "Hackathon Winner 2024",
    avatar: "/CodeSangam.png",
    position: "3rd Position & Cash Prize of ₹5,000",
  },

  {
    quote: "Participated in Hack The League Chapter 3",
    name: "JECRC University, Jaipur",
    role: "Hackathon Participant 2024",
    avatar: "/Hacktheleague.png",
    position: "Earned Participant Certificate with Goodies",
  },
];

export function Achievements() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  return (
    <section 
      ref={sectionRef}
      id="achievements" 
      className="relative w-full min-h-screen py-20 bg-[#070B14] overflow-hidden flex items-center"
    >
      {/* Section Label */}
      <div 
        className={`absolute top-12 left-1/2 -translate-x-1/2 section-label transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        Achievements
      </div>

      <div className="w-full max-w-[1100px] mx-auto px-6 lg:px-12">
        {/* Main Card */}
        <div 
          className={`glass-card rounded-[28px] p-8 md:p-12 lg:p-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transform: isVisible 
              ? 'perspective(1000px) rotateX(6deg) rotateY(8deg)' 
              : 'perspective(1000px) rotateX(18deg) rotateY(-28deg) translateZ(-800px)',
            transformStyle: 'preserve-3d',
            transitionDelay: '0.1s',
          }}
        >
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.name}
              className={`grid lg:grid-cols-[1fr,auto] gap-10 lg:gap-16 items-center ${
                index > 0 ? 'mt-12 pt-12 border-t border-[rgba(242,245,250,0.08)]' : ''
              }`}
            >
              {/* Quote */}
              <div 
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${0.2 + index * 0.1}s`,
                  transform: isVisible ? 'translateZ(40px)' : 'translateZ(0) translateY(20px)',
                }}
              >
                <Quote className="w-10 h-10 text-[#4F6DFF] mb-6 opacity-50" />
                <blockquote className="text-[clamp(20px,2.5vw,32px)] font-medium text-white leading-snug">
                  "{achievement.quote}"
                </blockquote>
              </div>

              {/* Author */}
              <div 
                className={`flex items-center gap-5 lg:flex-col lg:items-start transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                }`}
                style={{ 
                  transitionDelay: `${0.3 + index * 0.1}s`,
                  transform: isVisible ? 'translateZ(30px)' : 'translateZ(0) translateX(20px)',
                }}
              >
                <div 
                  className="w-16 h-16 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-[rgba(79,109,255,0.3)] flex-shrink-0"
                  data-cursor-hover
                >
                  <img
                    src={achievement.avatar}
                    alt={achievement.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-white text-lg">{achievement.name}</div>
                  <div className="text-sm text-[#A7B1C6]">{achievement.role}</div>
                  <div className="text-xs text-[#4F6DFF] mt-1">{achievement.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[50vh] pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(79, 109, 255, 0.2) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
    </section>
  );
}
