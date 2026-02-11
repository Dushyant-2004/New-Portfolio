import { useRef, useCallback, useEffect } from 'react';

interface TiltOptions {
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
  glare?: boolean;
  maxGlare?: number;
}

export function use3DTilt(options: TiltOptions = {}) {
  const {
    maxTilt = 15,
    perspective = 1000,
    scale = 1.02,
    speed = 400,
    glare = true,
    maxGlare = 0.3,
  } = options;

  const elementRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateX = (mouseY / (rect.height / 2)) * -maxTilt;
    const rotateY = (mouseX / (rect.width / 2)) * maxTilt;

    elementRef.current.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;

    if (glareRef.current && glare) {
      const glareX = ((e.clientX - rect.left) / rect.width) * 100;
      const glareY = ((e.clientY - rect.top) / rect.height) * 100;
      glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,${maxGlare}), transparent 50%)`;
    }
  }, [maxTilt, perspective, scale, glare, maxGlare]);

  const handleMouseLeave = useCallback(() => {
    if (!elementRef.current) return;
    
    elementRef.current.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    
    if (glareRef.current) {
      glareRef.current.style.background = 'transparent';
    }
  }, [perspective]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Create glare element if enabled
    if (glare) {
      const glareEl = document.createElement('div');
      glareEl.className = 'absolute inset-0 rounded-inherit pointer-events-none overflow-hidden';
      glareEl.style.borderRadius = 'inherit';
      glareRef.current = glareEl;
      element.appendChild(glareEl);
    }

    element.style.transition = `transform ${speed}ms cubic-bezier(0.23, 1, 0.32, 1)`;
    element.style.transformStyle = 'preserve-3d';

    element.addEventListener('mousemove', handleMouseMove, { passive: true });
    element.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      if (glareRef.current) {
        glareRef.current.remove();
      }
    };
  }, [handleMouseMove, handleMouseLeave, glare, speed]);

  return elementRef;
}
