import React, { useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react';
import type { GalleryImage } from '../data/studioConfig';
type LightboxProps = {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};
export function Lightbox({
  images,
  index,
  onClose,
  onIndexChange
}: LightboxProps) {
  const touchStart = useRef(0);
  const image = images[index];
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onIndexChange((index + 1) % images.length);
      if (event.key === 'ArrowLeft')
      onIndexChange((index - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [images.length, index, onClose, onIndexChange]);
  const previous = () =>
  onIndexChange((index - 1 + images.length) % images.length);
  const next = () => onIndexChange((index + 1) % images.length);
  return (
    <div
      className="fixed inset-0 z-[65] flex items-center justify-center bg-[#11110f]/95 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery photo: ${image.alt}`}
      onTouchStart={(event) => {
        touchStart.current = event.changedTouches[0].clientX;
      }}
      onTouchEnd={(event) => {
        const delta = event.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(delta) > 50) delta > 0 ? previous() : next();
      }}>
      
      <button
        onClick={onClose}
        className="absolute right-5 top-5 grid h-11 w-11 place-items-center border border-white/25 text-white"
        aria-label="Close image viewer">
        
        <XIcon size={19} />
      </button>
      <button
        onClick={previous}
        className="absolute left-4 grid h-11 w-11 place-items-center text-white sm:left-9"
        aria-label="Previous image">
        
        <ChevronLeftIcon />
      </button>
      <img
        src={image.src}
        alt={image.alt}
        className="max-h-[84vh] max-w-[78vw] object-contain shadow-2xl" />
      
      <button
        onClick={next}
        className="absolute right-4 grid h-11 w-11 place-items-center text-white sm:right-9"
        aria-label="Next image">
        
        <ChevronRightIcon />
      </button>
      <p className="absolute bottom-5 text-[10px] uppercase tracking-[.26em] text-white/70">
        {index + 1} / {images.length} · {image.category}
      </p>
    </div>);

}