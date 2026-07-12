import React from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { studioConfig } from '../data/studioConfig';
export function Packages() {
  return (
    <section
      id="offerings"
      className="bg-[#e9e1d4] py-24 text-[#201f1c] sm:py-32"
      aria-labelledby="offerings-title">
      
      <div className="mx-auto max-w-[1600px] px-5 sm:px-9 lg:px-12">
        <div className="max-w-2xl" data-reveal>
          <p className="text-[10px] uppercase tracking-[.28em] text-[#776b5b]">
            Ways to work together
          </p>
          <h2
            id="offerings-title"
            className="mt-3 font-display text-5xl sm:text-7xl">
            
            An investment in remembering.
          </h2>
        </div>
        <div className="mt-14 grid border-t border-[#201f1c]/20 lg:grid-cols-3">
          {studioConfig.packages.map((item, index) =>
          <article
            key={item.name}
            className="flex min-h-[340px] flex-col border-b border-[#201f1c]/20 py-7 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0"
            data-reveal>
            
              <span className="text-[10px] tracking-[.2em] text-[#88775d]">
                0{index + 1}
              </span>
              <h3 className="mt-8 font-display text-4xl">{item.name}</h3>
              <p className="mt-2 text-sm text-[#625b50]">{item.detail}</p>
              <ul className="mt-7 space-y-2 text-sm text-[#504a41]">
                {item.includes.map((feature) =>
              <li key={feature}>— {feature}</li>
              )}
              </ul>
              <div className="mt-auto flex items-center justify-between pt-8">
                <span className="font-display text-xl">{item.price}</span>
                <a
                href="#inquire"
                aria-label={`Inquire about ${item.name}`}
                className="grid h-10 w-10 place-items-center rounded-full border border-[#201f1c]/30 transition-colors hover:bg-[#201f1c] hover:text-[#e9e1d4]">
                
                  <ArrowUpRightIcon size={16} />
                </a>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>);

}