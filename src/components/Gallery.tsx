import React, { useMemo, useState } from 'react';
import { studioConfig, type GalleryImage } from '../data/studioConfig';
import { Lightbox } from './Lightbox';

const filters = [
'All',
'Weddings',
'Ceremonies',
'Engagements',
'Pre-wedding'] as
const;
type Filter = (typeof filters)[number];
export function Gallery() {
  const [filter, setFilter] = useState<Filter>('All');
  const [active, setActive] = useState<number | null>(null);
  const images = useMemo(
    () =>
    filter === 'All' ?
    studioConfig.galleries :
    studioConfig.galleries.filter((image) => image.category === filter),
    [filter]
  );
  return (
    <section
      id="gallery"
      className="bg-[#24231f] py-24 sm:py-32"
      aria-labelledby="gallery-title">
      
      <div className="mx-auto max-w-[1600px] px-5 sm:px-9 lg:px-12">
        <div className="grid gap-7 sm:grid-cols-2 sm:items-end" data-reveal>
          <div>
            <p className="text-[10px] uppercase tracking-[.28em] text-[#b59a68]">
              The archive
            </p>
            <h2
              id="gallery-title"
              className="mt-3 font-display text-5xl sm:text-7xl">
              
              Stories in stills
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#f4eee4]/65">
            A considered collection of celebrations, rites, and beautiful
            beginnings.
          </p>
        </div>
        <div className="mt-12 flex gap-x-6 gap-y-3 overflow-x-auto border-b border-[#f4eee4]/15 pb-4">
          {filters.map((item) =>
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`shrink-0 text-[10px] uppercase tracking-[.19em] transition-colors ${filter === item ? 'text-[#d5c8ad]' : 'text-[#f4eee4]/50 hover:text-[#f4eee4]'}`}
            aria-pressed={filter === item}>
            
              {item}
            </button>
          )}
        </div>
        <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {images.map((image: GalleryImage, index) =>
          <button
            key={image.id}
            onClick={() => setActive(index)}
            className="group relative mb-4 block w-full break-inside-avoid overflow-hidden text-left focus:outline-none focus:ring-2 focus:ring-[#b59a68]">
            
              <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.035] ${image.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'}`} />
            
              <span className="absolute inset-x-0 bottom-0 translate-y-full bg-[#171715]/75 px-4 py-3 text-[10px] uppercase tracking-[.18em] text-[#f4eee4] transition-transform duration-300 group-hover:translate-y-0">
                {image.category}
              </span>
            </button>
          )}
        </div>
      </div>
      {active !== null &&
      <Lightbox
        images={images}
        index={active}
        onClose={() => setActive(null)}
        onIndexChange={setActive} />

      }
    </section>);

}