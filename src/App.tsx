import React from 'react';
import { BookingSection } from './components/BookingSection';
import { Cursor } from './components/Cursor';
import { FeaturedWork } from './components/FeaturedWork';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Navigation } from './components/Navigation';
import { Packages } from './components/Packages';
import { StudioStory } from './components/StudioStory';
import { Testimonials } from './components/Testimonials';
import { useCinematicMotion } from './hooks/useCinematicMotion';
import { useScreenInit } from './useScreenInit';
export function App() {
  useScreenInit();
  useCinematicMotion();
  return (
    <div className="min-h-screen w-full overflow-hidden bg-[#171715] text-[#f4eee4]">
      <Intro />
      <Cursor />
      <div className="film-grain" aria-hidden="true" />
      <Navigation />
      <main>
        <Hero />
        <FeaturedWork />
        <StudioStory />
        <Gallery />
        <Packages />
        <Testimonials />
        <BookingSection />
      </main>
      <Footer />
    </div>);

}