import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const FIRST_NAME = 'DUSHYANT';
const LAST_NAME = 'VASISHT';

export const Preloader = ({ onComplete }: PreloaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const firstNameRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const lastNameRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const roleRef = useRef<HTMLDivElement>(null);
  const curtainTopRef = useRef<HTMLDivElement>(null);
  const curtainBottomRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const lineLeftRef = useRef<HTMLDivElement>(null);
  const lineRightRef = useRef<HTMLDivElement>(null);
  const cornerTLRef = useRef<HTMLDivElement>(null);
  const cornerBRRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  // Floating particles on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d')!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    const count = Math.floor((w * h) / 12000);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.3 + 0.05,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79, 109, 255, ${p.alpha})`;
        ctx.fill();
      }
      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Main GSAP timeline
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Counter 0 → 100 + progress bar fills
      const counter = { val: 0 };
      tl.to(
        counter,
        {
          val: 100,
          duration: 3,
          ease: 'power2.inOut',
          onUpdate: () => {
            if (counterRef.current) {
              counterRef.current.textContent = Math.floor(counter.val)
                .toString()
                .padStart(3, '0');
            }
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${counter.val / 100})`;
            }
          },
        },
        0,
      );

      // 2. Glow orb scales in
      tl.fromTo(
        glowRef.current,
        { scale: 0.3, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: 'power2.out' },
        0.1,
      );

      // 3. Corner brackets fade in
      tl.fromTo(
        [cornerTLRef.current, cornerBRRef.current],
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, stagger: 0.1 },
        0.2,
      );

      // 4. Year label
      tl.fromTo(
        yearRef.current,
        { opacity: 0, x: 10 },
        { opacity: 1, x: 0, duration: 0.6 },
        0.4,
      );

      // 5. Horizontal decorative lines draw in
      tl.fromTo(
        lineLeftRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.4, ease: 'power3.inOut' },
        0.5,
      );
      tl.fromTo(
        lineRightRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.4, ease: 'power3.inOut' },
        0.6,
      );

      // 6. First name — each letter slides up with bounce
      tl.fromTo(
        firstNameRefs.current.filter(Boolean),
        { yPercent: 130, opacity: 0, rotateX: -90 },
        {
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.7,
          stagger: 0.04,
          ease: 'back.out(2)',
        },
        0.8,
      );

      // 7. Last name — each letter slides up
      tl.fromTo(
        lastNameRefs.current.filter(Boolean),
        { yPercent: 130, opacity: 0, rotateX: -90 },
        {
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.7,
          stagger: 0.04,
          ease: 'back.out(2)',
        },
        1.1,
      );

      // 8. Role subtitle fades up
      tl.fromTo(
        roleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power2.out' },
        1.6,
      );

      // 9. Brief hold, then fade out content
      tl.to(
        [
          ...firstNameRefs.current.filter(Boolean),
          ...lastNameRefs.current.filter(Boolean),
          roleRef.current,
          lineLeftRef.current,
          lineRightRef.current,
          glowRef.current,
          counterRef.current?.parentElement,
          cornerTLRef.current,
          cornerBRRef.current,
          yearRef.current,
        ].filter(Boolean),
        {
          opacity: 0,
          y: -30,
          duration: 0.5,
          stagger: 0.015,
          ease: 'power2.in',
        },
        3.4,
      );

      // 10. Progress bar glows then fades
      tl.to(
        progressRef.current,
        {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in',
        },
        3.5,
      );

      // 11. Split-curtain exit reveals the site
      tl.to(
        curtainTopRef.current,
        { yPercent: -100, duration: 1, ease: 'power4.inOut' },
        3.8,
      );
      tl.to(
        curtainBottomRef.current,
        { yPercent: 100, duration: 1, ease: 'power4.inOut' },
        3.8,
      );

      // 12. Canvas fades
      tl.to(canvasRef.current, { opacity: 0, duration: 0.6 }, 3.8);

      // 13. Done
      tl.call(() => onComplete(), undefined, 4.8);
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999]">
      {/* Split curtains (background layer) */}
      <div
        ref={curtainTopRef}
        className="absolute inset-x-0 top-0 h-1/2 bg-[#050508] will-change-transform"
      />
      <div
        ref={curtainBottomRef}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[#050508] will-change-transform"
      />

      {/* Floating particles canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-[1] pointer-events-none"
      />

      {/* Content layer */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Glow orb behind text */}
        <div
          ref={glowRef}
          className="absolute w-[500px] h-[500px] rounded-full opacity-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(79,109,255,0.15) 0%, rgba(79,109,255,0.05) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Counter — top right */}
        <div className="absolute top-10 right-12 flex items-end gap-1">
          <span
            ref={counterRef}
            className="text-[5rem] md:text-[7rem] leading-none font-light tracking-tight select-none"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: 'rgba(255,255,255,0.06)',
            }}
          >
            000
          </span>
          <span
            className="text-xs font-mono mb-4 tracking-widest"
            style={{ color: 'rgba(79,109,255,0.4)' }}
          >
            %
          </span>
        </div>

        {/* Year — bottom left */}
        <div
          ref={yearRef}
          className="absolute bottom-10 left-12 text-xs font-mono tracking-[0.3em] opacity-0"
          style={{ color: 'rgba(255,255,255,0.25)' }}
        >
         
        </div>

        {/* Corner brackets */}
        <div
          ref={cornerTLRef}
          className="absolute left-8 top-8 h-16 w-16 border-l-[1.5px] border-t-[1.5px] opacity-0"
          style={{ borderColor: 'rgba(79,109,255,0.25)' }}
        />
        <div
          ref={cornerBRRef}
          className="absolute bottom-8 right-8 h-16 w-16 border-b-[1.5px] border-r-[1.5px] opacity-0"
          style={{ borderColor: 'rgba(79,109,255,0.25)' }}
        />

        {/* Decorative lines */}
        <div
          ref={lineLeftRef}
          className="absolute left-0 top-1/2 w-[28%] h-px origin-left"
          style={{
            transform: 'scaleX(0)',
            background:
              'linear-gradient(to right, transparent, rgba(79,109,255,0.3), transparent)',
          }}
        />
        <div
          ref={lineRightRef}
          className="absolute right-0 top-1/2 w-[28%] h-px origin-right"
          style={{
            transform: 'scaleX(0)',
            background:
              'linear-gradient(to left, transparent, rgba(79,109,255,0.3), transparent)',
          }}
        />

        {/* Name block */}
        <div className="flex flex-col items-center gap-1 perspective-[800px]">
          {/* First name */}
          <div className="overflow-hidden py-1">
            <div className="flex">
              {FIRST_NAME.split('').map((char, i) => (
                <span
                  key={i}
                  ref={(el) => {
                    firstNameRefs.current[i] = el;
                  }}
                  className="inline-block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight will-change-transform"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    opacity: 0,
                    textShadow: '0 0 40px rgba(79,109,255,0.15)',
                  }}
                >
                  {char}
                </span>
              ))}
            </div>
          </div>

          {/* Last name */}
          <div className="overflow-hidden py-1">
            <div className="flex">
              {LAST_NAME.split('').map((char, i) => (
                <span
                  key={i}
                  ref={(el) => {
                    lastNameRefs.current[i] = el;
                  }}
                  className="inline-block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight will-change-transform"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: 'rgba(255,255,255,0.5)',
                    opacity: 0,
                  }}
                >
                  {char}
                </span>
              ))}
            </div>
          </div>

          {/* Role subtitle */}
          <div className="overflow-hidden mt-5">
            <div
              ref={roleRef}
              className="text-xs sm:text-sm md:text-base tracking-[0.35em] uppercase font-mono opacity-0"
              style={{ color: '#4F6DFF' }}
            >
              Creative Developer &amp; Designer
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar along the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] z-20" style={{ background: 'rgba(255,255,255,0.04)' }}>
        <div
          ref={progressRef}
          className="h-full origin-left"
          style={{
            transform: 'scaleX(0)',
            background: 'linear-gradient(to right, #4F6DFF, #7B8FFF)',
            boxShadow: '0 0 20px rgba(79,109,255,0.5)',
          }}
        />
      </div>
    </div>
  );
};
