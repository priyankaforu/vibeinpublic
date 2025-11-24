import React from 'react';
import { Sticker } from './Sticker';
import { ArrowRight, Terminal } from 'lucide-react';

interface HeroProps {
  onManifestoClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onManifestoClick }) => {
  return (
    <section className="relative w-full pt-24 pb-32 px-6 md:px-12 lg:px-24 overflow-visible">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="relative z-10">
          <Sticker type="vibe" className="-top-16 left-0 md:-left-8" />
          
          <h1 className="font-sans font-bold text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 text-dark tracking-tight">
            Build, ship, and <br />
            <span className="relative inline-block">
              <span className="relative z-10">vibe together</span>
              <span className="absolute bottom-3 left-0 w-full h-4 bg-mustard opacity-60 -rotate-1 z-0"></span>
            </span>
          </h1>
          
          <p className="font-sans text-xl md:text-2xl text-gray-700 mb-10 max-w-lg leading-relaxed font-medium">
            The community for indie hackers who code in public. We celebrate the wins, debug the losses, and keep each other accountable at 2 AM.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://x.com/i/communities/1992867116429771142" target="_blank" rel="noopener noreferrer" className="bg-sage hover:bg-sage-dark text-white font-sans font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-hard active:translate-x-0.5 active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2 border-2 border-black">
              Join Squad <ArrowRight size={20} />
            </a>
            <button onClick={onManifestoClick} className="bg-cream text-dark font-sans font-bold px-8 py-4 rounded-xl text-lg hover:bg-white transition-all flex items-center justify-center gap-2 border-2 border-black shadow-hard active:translate-x-0.5 active:translate-y-0.5 active:shadow-none">
              Read Manifesto
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-4 text-sm font-sans font-semibold text-gray-500">
             <div className="flex -space-x-3">
               {[1,2,3,4].map(i => (
                 <img key={i} src={`https://picsum.photos/40/40?random=${i}`} alt="Member" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
               ))}
             </div>
             <p>Joined by 2,000+ builders</p>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative perspective-1000 group">
           {/* Hero Image */}
           <img 
             src="/heroimage.png" 
             alt="Vibe in Public Community" 
             className="w-full h-auto rounded-3xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-2 group-hover:rotate-1 transition-transform duration-500"
           />
           
           {/* Stickers scattered */}
           <Sticker type="launch" className="-top-8 -right-4 md:right-10 animate-bounce" />
           <Sticker type="bug" className="bottom-12 -left-6" />
           
           {/* Abstract shapes */}
           <div className="absolute top-10 right-10 w-72 h-72 bg-lavender rounded-full blur-3xl opacity-60"></div>
           <div className="absolute bottom-10 left-10 w-72 h-72 bg-mustard rounded-full blur-3xl opacity-40"></div>

           <Sticker type="coffee" className="-bottom-8 -right-2 rotate-12" />
        </div>
      </div>
    </section>
  );
};