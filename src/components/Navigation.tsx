import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { studioConfig } from '../data/studioConfig';
const links = [
['Work', '#work'],
['Studio', '#studio'],
['Offerings', '#offerings'],
['Journal', '#gallery'],
['Inquire', '#inquire']];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const navigate = () => setOpen(false);
  return (
    <header className="absolute inset-x-0 top-0 z-30 px-5 py-6 sm:px-9 lg:px-12">
      <nav
        className="mx-auto flex max-w-[1600px] items-center justify-between"
        aria-label="Primary navigation">
        
        <a
          href="#top"
          className="font-display text-2xl tracking-wide text-[#f4eee4]">
          
          {studioConfig.businessName}
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) =>
          <a
            className="text-[10px] uppercase tracking-[.22em] text-[#f4eee4]/75 transition-colors hover:text-[#b59a68]"
            href={href}
            key={label}>
            
              {label}
            </a>
          )}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center border border-[#f4eee4]/25 text-[#f4eee4] lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}>
          
          {open ? <XIcon size={17} /> : <MenuIcon size={18} />}
        </button>
      </nav>
      {open &&
      <div className="absolute inset-x-0 top-0 min-h-screen bg-[#171715] px-6 py-7 lg:hidden">
          <div className="flex justify-between">
            <span className="font-display text-2xl">
              {studioConfig.businessName}
            </span>
            <button onClick={navigate} aria-label="Close menu">
              <XIcon />
            </button>
          </div>
          <div className="mt-24 flex flex-col gap-7">
            {links.map(([label, href], index) =>
          <a
            key={label}
            href={href}
            onClick={navigate}
            className="font-display text-5xl text-[#f4eee4]">
            
                <span className="mr-4 font-sans text-[10px] align-middle tracking-[.2em] text-[#b59a68]">
                  0{index + 1}
                </span>
                {label}
              </a>
          )}
          </div>
        </div>
      }
    </header>);

}