import React from 'react';
import { studioConfig } from '../data/studioConfig';

export function StudioStory() {
  return (
    <section
      id="studio"
      className="bg-[#171715] py-24 sm:py-36"
      aria-labelledby="studio-title">
      
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 sm:px-9 lg:grid-cols-12 lg:gap-7 lg:px-12">
        <div className="lg:col-span-4" data-reveal>
          <p className="text-[10px] uppercase tracking-[.28em] text-[#b59a68]">
            {studioConfig.about.eyebrow}
          </p>
          <h2
            id="studio-title"
            className="mt-7 font-display text-5xl leading-[.9] sm:text-7xl">
            
            {studioConfig.about.title}
          </h2>
        </div>
        <div className="relative lg:col-span-3 lg:col-start-6" data-parallax>
          <img
            src={studioConfig.about.portrait}
            alt="Studio founder in natural light"
            loading="lazy"
            className="aspect-[3/4] w-full object-cover grayscale-[15%]" />
          
          <span className="absolute -bottom-3 -left-3 border border-[#b59a68] px-3 py-2 text-[9px] uppercase tracking-[.2em] text-[#b59a68]">
            Made with intention
          </span>
        </div>
        <div
          className="flex flex-col justify-end lg:col-span-3 lg:col-start-10"
          data-reveal>
          
          <p className="text-lg leading-8 text-[#f4eee4]/78">
            {studioConfig.about.copy}
          </p>
          <p className="mt-8 font-display text-xl text-[#d5c8ad]">
            {studioConfig.about.signature}
          </p>
        </div>
      </div>
    </section>);

}