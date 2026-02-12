import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; opacity: number; speed: number }[]>([]);

  // Generate stars on mount
  useEffect(() => {
    const generatedStars = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 2 + 0.5,
    }));
    setStars(generatedStars);
  }, []);

  useEffect(() => {
    if (!containerRef.current || !nameRef.current || !subtitleRef.current || stars.length === 0) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Exit animation
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 1,
            ease: 'power4.inOut',
            onComplete: onComplete,
          });
        },
      });

      // Animate stars moving
      gsap.to('.star', {
        y: '-=100',
        duration: 3,
        ease: 'none',
        repeat: -1,
        stagger: {
          each: 0.02,
          from: 'random',
        },
      });

      // Star twinkle effect
      gsap.to('.star', {
        opacity: 0.2,
        duration: 1,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        stagger: {
          each: 0.1,
          from: 'random',
        },
      });

      // Name letters animation
      const nameLetters = nameRef.current ? Array.from(nameRef.current.querySelectorAll('.letter')) : [];
      const subtitleLetters = subtitleRef.current ? Array.from(subtitleRef.current.querySelectorAll('.letter')) : [];

      if (nameLetters.length === 0 || subtitleLetters.length === 0) return;

      // Initial state
      gsap.set(nameLetters, {
        y: 100,
        opacity: 0,
        rotateX: -90,
      });
      gsap.set(subtitleLetters, {
        y: 50,
        opacity: 0,
      });
      gsap.set('.loader-line', {
        scaleX: 0,
      });

      // Animation sequence
      tl.to(nameLetters, {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.05,
      })
        .to(
          subtitleLetters,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.02,
          },
          '-=0.5'
        )
        .to(
          '.loader-line',
          {
            scaleX: 1,
            duration: 1.5,
            ease: 'power2.inOut',
          },
          '-=0.3'
        )
        .to(
          '.glow-effect',
          {
            opacity: 1,
            scale: 1.2,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=1'
        )
        .to({}, { duration: 0.5 }); // Small pause before exit
    }, containerRef);

    return () => ctx.revert();
  }, [stars, onComplete]);

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className="letter inline-block"
        style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Stars background */}
      <div ref={starsRef} className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              boxShadow: `0 0 ${star.size * 2}px ${star.size}px rgba(255, 255, 255, 0.3)`,
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="shooting-star absolute h-[2px] w-[100px] bg-gradient-to-r from-transparent via-white to-transparent"
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              transform: 'rotate(-45deg)',
              animation: `shooting ${2 + Math.random() * 3}s linear ${i * 0.5}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Glow effect behind text */}
      <div 
        className="glow-effect absolute h-[300px] w-[600px] rounded-full opacity-0 blur-3xl" 
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 70%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Main name */}
        <div
          ref={nameRef}
          className="mb-4 overflow-hidden text-5xl tracking-wider text-white md:text-7xl lg:text-8xl"
          style={{ perspective: '1000px', fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400, letterSpacing: '0.08em' }}
        >
          {splitText('Dushyant Vasisht')}
        </div>

        {/* Subtitle */}
        <div
          ref={subtitleRef}
          className="mb-8 overflow-hidden text-xl tracking-[0.3em] text-gray-400 md:text-2xl"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.4em' }}
        >
          {splitText('PORTFOLIO')}
        </div>

        {/* Loading line */}
        <div className="mx-auto h-[2px] w-[200px] overflow-hidden bg-gray-800 md:w-[300px]">
          <div
            className="loader-line h-full w-full origin-left bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            style={{ transformOrigin: 'left center' }}
          />
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute left-8 top-8 h-20 w-20 border-l-2 border-t-2 border-white/10" />
      <div className="absolute bottom-8 right-8 h-20 w-20 border-b-2 border-r-2 border-white/10" />

      {/* CSS for shooting stars animation */}
      <style>{`
        @keyframes shooting {
          0% {
            transform: translateX(0) translateY(0) rotate(-45deg);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateX(-500px) translateY(500px) rotate(-45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
