import React, { useEffect, useRef } from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { studioConfig } from '../data/studioConfig';

export function FeaturedWork() {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    const onWheel = (event: WheelEvent) => {
      if (
      window.innerWidth < 1024 ||
      Math.abs(event.deltaY) < Math.abs(event.deltaX))

      return;
      element.scrollLeft += event.deltaY;
    };
    element.addEventListener('wheel', onWheel, {
      passive: true
    });
    return () => element.removeEventListener('wheel', onWheel);
  }, []);
  return (
    <section
      id="work"
      className="bg-[#e9e1d4] py-20 text-[#201f1c] sm:py-28"
      aria-labelledby="work-title">
      
      <div className="mx-auto max-w-[1600px] px-5 sm:px-9 lg:px-12">
        <div className="mb-12 flex items-end justify-between" data-reveal>
          <div>
            <p className="text-[10px] uppercase tracking-[.28em] text-[#776b5b]">
              Selected stories · 01—06
            </p>
            <h2
              id="work-title"
              className="mt-3 font-display text-5xl sm:text-7xl">
              
              Featured work
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-6 text-[#625b50] sm:block">
            Swipe, drag or scroll through fragments from recent celebrations.
          </p>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 sm:gap-6 sm:px-9 lg:px-12"
        style={{
          scrollbarWidth: 'none'
        }}>
        
        {studioConfig.featured.map((image, index) =>
        <article
          key={image.src}
          className="group relative h-[58vh] min-h-[430px] w-[76vw] shrink-0 snap-start overflow-hidden sm:w-[48vw] lg:w-[35vw]">
          
            <img
            src={image.src}
            alt={image.alt}
            loading={index > 1 ? 'lazy' : 'eager'}
            className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
          
            <div className="absolute inset-0 bg-[#171715]/0 transition-colors duration-500 group-hover:bg-[#171715]/20" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5 text-[#f4eee4] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-[10px] uppercase tracking-[.2em]">
                View story
              </span>
              <ArrowRightIcon size={17} />
            </div>
            <span className="absolute left-4 top-4 text-[10px] tracking-[.2em] text-white/70">
              0{index + 1}
            </span>
          </article>
        )}
      </div>
    </section>);

}