import React, { useEffect, useState } from 'react';
import { studioConfig } from '../data/studioConfig';
export function Intro() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const duration = reduceMotion ? 180 : 1100;
    const startedAt = performance.now();
    let frame = 0;
    const animate = (time: number) => {
      const value = Math.min(100, (time - startedAt) / duration * 100);
      setProgress(value);
      if (value < 100) frame = requestAnimationFrame(animate);else
      window.setTimeout(() => setVisible(false), reduceMotion ? 80 : 380);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);
  if (!visible) return null;
  return (
    <div
      className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-[#171715] px-6"
      role="status"
      aria-label="Loading website">
      
      <p className="font-display text-4xl tracking-wide text-[#f4eee4] sm:text-5xl">
        {studioConfig.businessName}
      </p>
      <div className="mt-8 h-px w-40 overflow-hidden bg-[#f4eee4]/20">
        <div
          className="h-full bg-[#b59a68]"
          style={{
            width: `${progress}%`
          }} />
        
      </div>
      <p className="mt-3 text-[10px] uppercase tracking-[.32em] text-[#f4eee4]/55">
        {Math.round(progress)} / 100
      </p>
    </div>);

}