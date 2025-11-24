import React from 'react';
import { Sticker } from './Sticker';
import { ArrowRight, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full pt-16 pb-24 px-4 md:px-8 lg:px-16 overflow-visible">
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
            <button className="bg-sage hover:bg-sage-dark text-white font-sans font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-hard active:translate-x-0.5 active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2 border-2 border-black">
              Join the Squad <ArrowRight size={20} />
            </button>
            <button className="bg-cream text-dark font-sans font-bold px-8 py-4 rounded-xl text-lg hover:bg-white transition-all flex items-center justify-center gap-2 border-2 border-black shadow-hard active:translate-x-0.5 active:translate-y-0.5 active:shadow-none">
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
           {/* Stickers scattered */}
           <Sticker type="launch" className="-top-8 -right-4 md:right-10 animate-bounce" />
           <Sticker type="bug" className="bottom-12 -left-6" />
           
           {/* Abstract shapes */}
           <div className="absolute top-10 right-10 w-72 h-72 bg-lavender rounded-full blur-3xl opacity-60"></div>
           <div className="absolute bottom-10 left-10 w-72 h-72 bg-mustard rounded-full blur-3xl opacity-40"></div>
           
           <div className="relative z-10 bg-white border-2 border-black rounded-3xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-2 group-hover:rotate-1 transition-transform duration-500">
              {/* Mock Browser Window */}
              <div className="flex items-center gap-2 mb-6 border-b-2 border-gray-100 pb-3">
                <div className="w-4 h-4 rounded-full bg-coral border border-black"></div>
                <div className="w-4 h-4 rounded-full bg-mustard border border-black"></div>
                <div className="w-4 h-4 rounded-full bg-sage border border-black"></div>
                <div className="ml-auto font-mono text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">localhost:3000</div>
              </div>
              
              <div className="space-y-6">
                 <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-gray-200 overflow-hidden flex-shrink-0 border-2 border-black shadow-sm">
                      <img src="https://picsum.photos/100/100?random=5" alt="User" />
                    </div>
                    <div className="bg-gray-50 p-4 rounded-2xl rounded-tl-none border-2 border-gray-100 w-full hover:border-black transition-colors">
                       <p className="font-sans text-base font-bold mb-1 flex items-center justify-between">
                         Alex Rose 
                         <span className="text-gray-400 font-normal text-xs font-mono">@alexbuilds</span>
                       </p>
                       <p className="font-sans text-base text-gray-800 leading-snug">Just shipped the new API endpoint! 🚀 Took me 4 coffees but we're live.</p>
                       <div className="mt-3 flex gap-2 flex-wrap">
                         <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full border border-green-300">#shipping</span>
                         <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full border border-blue-300">#indiehacker</span>
                       </div>
                    </div>
                 </div>

                 <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-gray-200 overflow-hidden flex-shrink-0 border-2 border-black shadow-sm">
                      <img src="https://picsum.photos/100/100?random=6" alt="User" />
                    </div>
                    <div className="bg-gray-50 p-4 rounded-2xl rounded-tl-none border-2 border-gray-100 w-full hover:border-black transition-colors">
                       <p className="font-sans text-base font-bold mb-1">Sarah Dev <span className="text-gray-400 font-normal ml-1 text-xs font-mono">@sarahcodes</span></p>
                       <p className="font-sans text-base text-gray-800 leading-snug">Congrats Alex! 🎉 I'm currently wrestling with CSS Grid. Send help.</p>
                       <div className="mt-3 bg-dark p-3 rounded-lg text-white font-mono text-xs border border-gray-700 shadow-inner">
                          display: grid;<br/>
                          grid-template-columns: repeat(3, 1fr);
                       </div>
                    </div>
                 </div>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-gray-100">
                <div className="flex items-center gap-3 text-gray-400 bg-gray-50 p-3 rounded-xl border border-gray-200">
                  <Terminal size={18} />
                  <span className="font-mono text-sm">Type a message to vibe...</span>
                </div>
              </div>
           </div>

           <Sticker type="coffee" className="-bottom-8 -right-2 rotate-12" />
        </div>
      </div>
    </section>
  );
};