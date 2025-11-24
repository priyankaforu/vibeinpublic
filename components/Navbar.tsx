import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-6 px-4 md:px-8 lg:px-16 flex justify-between items-center bg-cream relative z-50 border-b border-transparent">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-sage to-mustard flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <span className="text-white font-bold text-lg font-sans">V</span>
        </div>
        <span className="font-sans font-bold text-2xl tracking-tighter">Vibe in Public</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#manifesto" className="font-sans font-medium text-dark hover:text-sage transition-colors text-lg">Manifesto</a>
        <a href="#community" className="font-sans font-medium text-dark hover:text-sage transition-colors text-lg">Community</a>
        <a href="#stories" className="font-sans font-medium text-dark hover:text-sage transition-colors text-lg">Stories</a>
        <button className="bg-sage hover:bg-sage-dark text-white font-sans font-bold px-6 py-3 rounded-lg transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black active:shadow-none active:translate-x-1 active:translate-y-1">
          Request early access
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-dark" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-cream border-b-2 border-black p-6 flex flex-col gap-6 md:hidden shadow-lg z-50">
          <a href="#manifesto" className="font-sans font-bold text-xl" onClick={() => setIsOpen(false)}>Manifesto</a>
          <a href="#community" className="font-sans font-bold text-xl" onClick={() => setIsOpen(false)}>Community</a>
          <a href="#stories" className="font-sans font-bold text-xl" onClick={() => setIsOpen(false)}>Stories</a>
           <button className="bg-sage text-white font-sans font-bold px-6 py-3 rounded-lg w-full text-left border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1">
            Request early access
          </button>
        </div>
      )}
    </nav>
  );
};