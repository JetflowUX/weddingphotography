import React, { useEffect, useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { studioConfig } from '../data/studioConfig';
export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    return;
    const timer = window.setInterval(
      () =>
      setActive((value) => (value + 1) % studioConfig.testimonials.length),
      6500
    );
    return () => window.clearInterval(timer);
  }, [paused]);
  const testimonial = studioConfig.testimonials[active];
  const previous = () =>
  setActive(
    (active - 1 + studioConfig.testimonials.length) %
    studioConfig.testimonials.length
  );
  const next = () => setActive((active + 1) % studioConfig.testimonials.length);
  return (
    <section
      className="relative overflow-hidden bg-[#171715] py-24 sm:py-36"
      aria-label="Client testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}>
      
      <img
        src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1900&q=80"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-[.11]" />
      
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-9">
        <p className="text-[10px] uppercase tracking-[.28em] text-[#b59a68]">
          From our couples
        </p>
        <blockquote
          className="mt-10 font-display text-4xl leading-[1.06] sm:text-6xl"
          aria-live="polite">
          
          “{testimonial.quote}”
        </blockquote>
        <p className="mt-9 text-[10px] uppercase tracking-[.22em] text-[#d5c8ad]">
          {testimonial.names} · {testimonial.place}
        </p>
        <div className="mt-10 flex items-center justify-center gap-5">
          <button
            className="grid h-10 w-10 place-items-center border border-[#f4eee4]/25"
            onClick={previous}
            aria-label="Previous testimonial">
            
            <ArrowLeftIcon size={15} />
          </button>
          <span className="text-[10px] tracking-[.2em]">
            {active + 1} / {studioConfig.testimonials.length}
          </span>
          <button
            className="grid h-10 w-10 place-items-center border border-[#f4eee4]/25"
            onClick={next}
            aria-label="Next testimonial">
            
            <ArrowRightIcon size={15} />
          </button>
        </div>
      </div>
    </section>);

}