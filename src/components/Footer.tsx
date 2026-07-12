import React from 'react';
import { ArrowUpRightIcon, InstagramIcon } from 'lucide-react';
import { studioConfig } from '../data/studioConfig';

export function Footer() {
  return (
    <footer className="bg-[#171715] pt-16" aria-label="Footer">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-9 lg:px-12">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[.27em] text-[#b59a68]">
              Follow along
            </p>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl">
              @aureliaco.studio
            </h2>
          </div>
          <a
            href={studioConfig.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Instagram"
            className="grid h-10 w-10 place-items-center rounded-full border border-[#f4eee4]/30">
            
            <InstagramIcon size={16} />
          </a>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-3 gap-1 sm:grid-cols-6">
        {studioConfig.featured.map((item, index) =>
        <img
          key={index}
          src={item.src}
          alt={`Studio Instagram photograph ${index + 1}`}
          loading="lazy"
          className="aspect-square w-full object-cover opacity-75 transition-opacity hover:opacity-100" />
        )}
      </div>
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6 px-5 py-9 text-[10px] uppercase tracking-[.18em] text-[#f4eee4]/50 sm:flex-row sm:items-center sm:justify-between sm:px-9 lg:px-12">
        <span>© 2026 {studioConfig.businessName}</span>
        <div className="flex gap-6">
          <a href="#work">Work</a>
          <a href="#studio">Studio</a>
          <a href="#inquire">Inquire</a>
          <a
            href={studioConfig.pinterest}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1">
            
            Pinterest <ArrowUpRightIcon size={11} />
          </a>
        </div>
        <span>Made for the sentimental</span>
      </div>
    </footer>);

}