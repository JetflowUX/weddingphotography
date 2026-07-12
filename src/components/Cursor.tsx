import React, { useEffect, useState } from 'react';
export function Cursor() {
  const [position, setPosition] = useState({
    x: -50,
    y: -50
  });
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const move = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY
      });
      setVisible(true);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed z-[80] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f4eee4] mix-blend-difference transition-opacity duration-200 md:block ${visible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        left: position.x,
        top: position.y
      }} />);


}