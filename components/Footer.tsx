import React from 'react';
import { Sticker } from './Sticker';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cream pt-32 pb-12 px-4 md:px-16 border-t-2 border-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        <Sticker type="fire" className="top-0 left-10 md:left-32 animate-pulse" />
        <Sticker type="launch" className="top-10 right-10 md:right-32 rotate-12" />
        <Sticker type="circle" color="#EB5757" className="bottom-20 right-10 rotate-12 opacity-50" />

        <h2 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
          Ready to vibe?
        </h2>
        <p className="font-sans text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto font-medium">
          Join 2,000+ indie hackers building the future of the internet. No suits, no pitch decks, just code and vibes.
        </p>
        
        <button className="bg-sage hover:bg-sage-dark text-white font-sans font-bold px-12 py-5 rounded-xl text-xl transition-all shadow-hard active:translate-x-1 active:translate-y-1 active:shadow-none border-2 border-black">
          Get Early Access
        </button>

        <div className="mt-32 flex flex-col md:flex-row justify-between items-center text-sm font-sans font-medium text-gray-500 border-t-2 border-gray-200 pt-8">
          <p>© 2025 Vibe in Public. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
             <a href="#" className="hover:text-dark underline decoration-2 decoration-transparent hover:decoration-sage transition-all">Twitter/X</a>
             <a href="#" className="hover:text-dark underline decoration-2 decoration-transparent hover:decoration-sage transition-all">Instagram</a>
             <a href="#" className="hover:text-dark underline decoration-2 decoration-transparent hover:decoration-sage transition-all">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};