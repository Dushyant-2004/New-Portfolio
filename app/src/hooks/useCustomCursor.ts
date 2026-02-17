import { useEffect, useRef, useCallback } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

export function useCustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const positionRef = useRef<CursorPosition>({ x: 0, y: 0 });
  const targetRef = useRef<CursorPosition>({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const isHoveringRef = useRef(false);

  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  const animate = useCallback(() => {
    if (!cursorRef.current || !cursorDotRef.current) return;

    positionRef.current.x = lerp(positionRef.current.x, targetRef.current.x, 0.15);
    positionRef.current.y = lerp(positionRef.current.y, targetRef.current.y, 0.15);

    cursorRef.current.style.transform = `translate3d(${positionRef.current.x - (isHoveringRef.current ? 24 : 6)}px, ${positionRef.current.y - (isHoveringRef.current ? 24 : 6)}px, 0)`;
    cursorDotRef.current.style.transform = `translate3d(${targetRef.current.x - 2}px, ${targetRef.current.y - 2}px, 0)`;

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Check for touch device
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    // Create cursor elements
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    cursorRef.current = cursor;

    const cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot';
    document.body.appendChild(cursorDot);
    cursorDotRef.current = cursorDot;

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      if (target.matches('a, button, [data-cursor-hover]') || target.closest('a, button, [data-cursor-hover]')) {
        isHoveringRef.current = true;
        cursor.classList.add('hover');
      }
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      if (target.matches('a, button, [data-cursor-hover]') || target.closest('a, button, [data-cursor-hover]')) {
        isHoveringRef.current = false;
        cursor.classList.remove('hover');
      }
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      cursor.remove();
      cursorDot.remove();
    };
  }, [animate]);
}
