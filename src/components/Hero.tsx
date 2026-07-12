import React from 'react';
import { ArrowDownIcon } from 'lucide-react';
import { studioConfig } from '../data/studioConfig';
import { HeroCanvas } from './HeroCanvas';
export function Hero() {
  const words = studioConfig.businessName.split(' ');
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#24231f] px-5 pb-10 pt-28 sm:px-9 sm:pb-12 lg:px-12"
      aria-labelledby="hero-title">
      
      <img
        src={studioConfig.heroImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-luminosity" />
      
      <div className="absolute inset-0 bg-[#171715]/35" />
      <HeroCanvas />
      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        <p
          className="mb-6 text-[10px] uppercase tracking-[.3em] text-[#d5c8ad]"
          data-reveal>
          
          {studioConfig.city} · Est. 2012
        </p>
        <h1
          id="hero-title"
          className="max-w-6xl font-display text-[clamp(4.2rem,12vw,11rem)] leading-[.78] tracking-[-.055em] text-[#f4eee4]">
          
          {words.map((word, index) =>
          <span
            key={word}
            className="mr-[.13em] inline-block animate-[fadeUp_1s_ease-out_both]"
            style={{
              animationDelay: `${index * 140 + 200}ms`
            }}>
            
              {word}
            </span>
          )}
        </h1>
        <div className="mt-10 flex flex-col justify-between gap-7 border-t border-[#f4eee4]/25 pt-4 sm:flex-row sm:items-end">
          <p className="max-w-xs font-display text-2xl leading-tight text-[#f4eee4]/90 sm:text-3xl">
            {studioConfig.tagline}
          </p>
          <a
            href="#work"
            className="group flex w-fit items-center gap-3 text-[10px] uppercase tracking-[.25em] text-[#f4eee4]">
            
            <span className="grid h-10 w-10 place-items-center rounded-full border border-[#f4eee4]/45 transition-transform duration-500 group-hover:translate-y-1">
              <ArrowDownIcon size={15} />
            </span>{' '}
            Discover the stories
          </a>
        </div>
      </div>
    </section>);

}