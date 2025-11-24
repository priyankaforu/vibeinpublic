import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValuesSection } from './components/ValuesSection';
import { FeatureSplit } from './components/FeatureSplit';
import { VibeCheck } from './components/VibeCheck';
import { Footer } from './components/Footer';

// Mock Component for Feature 1 (Members List)
const MembersMock = () => (
  <div className="bg-white border-2 border-black rounded-xl p-6 shadow-hard w-full max-w-md rotate-2 hover:rotate-0 transition-all duration-300">
    <h3 className="font-serif text-2xl font-bold mb-6">Online Vibers</h3>
    <div className="space-y-4">
      {[
        { name: 'Dillon Kydd', role: 'Building SaaS', img: 12 },
        { name: 'Anna Olsen', role: 'Fixing bugs', img: 22 },
        { name: 'Kas Moss', role: 'Designing UI', img: 33 },
      ].map((member, i) => (
        <div key={i} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
          <img src={`https://picsum.photos/50/50?random=${member.img}`} className="w-12 h-12 rounded-full border border-black" alt={member.name} />
          <div>
            <p className="font-bold font-sans text-dark">{member.name}</p>
            <p className="text-sm font-mono text-gray-500">{member.role}</p>
          </div>
          <div className="ml-auto w-3 h-3 rounded-full bg-green-400 border border-green-600 animate-pulse"></div>
        </div>
      ))}
    </div>
  </div>
);

// Mock Component for Feature 2 (Task/Code)
const CodeMock = () => (
  <div className="bg-dark rounded-xl p-6 shadow-hard w-full max-w-md -rotate-1 hover:rotate-0 transition-all duration-300 border-2 border-gray-700">
    <div className="flex gap-2 mb-4">
      <div className="w-3 h-3 rounded-full bg-red-500"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <div className="font-mono text-sm text-gray-300 space-y-2">
      <p><span className="text-purple-400">const</span> <span className="text-blue-400">shipFeature</span> = <span className="text-purple-400">async</span> () ={'>'} {'{'}</p>
      <p className="pl-4"><span className="text-purple-400">try</span> {'{'}</p>
      <p className="pl-8"><span className="text-gray-500">// Community support enabled</span></p>
      <p className="pl-8"><span className="text-blue-400">await</span> vibe.getFeedback();</p>
      <p className="pl-8"><span className="text-blue-400">await</span> deploy.production();</p>
      <p className="pl-4">{'}'} <span className="text-purple-400">catch</span> (err) {'{'}</p>
      <p className="pl-8">askForHelp(<span className="text-yellow-300">"vibe-in-public"</span>);</p>
      <p className="pl-4">{'}'}</p>
      <p>{'}'}</p>
    </div>
    <div className="mt-6 bg-gray-800 p-3 rounded border border-gray-700">
        <p className="text-green-400 font-mono text-xs">Build succeeded via @community</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <Navbar />
      <Hero />
      <ValuesSection />
      
      <FeatureSplit
        badge="Community"
        title="Find your co-founders in the comments"
        description="It's the early days. You just had a long conversation with two friends about a meaningful challenge. Now you need a squad. Our directory connects you with builders who match your energy."
        imageComponent={<MembersMock />}
      />

      <FeatureSplit
        badge="Accountability"
        title="Ship features, not just vibes"
        description="We love vibes, but we love shipping more. Join our daily standups and weekly demo days. If you don't ship, we roast (gently)."
        imageComponent={<CodeMock />}
        reversed
      />

      {/* Vibe Check Section */}
      <section className="py-24 px-4 bg-gray-50 border-y border-black">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold mb-12">Low energy? Get a Vibe Check.</h2>
            <VibeCheck />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;