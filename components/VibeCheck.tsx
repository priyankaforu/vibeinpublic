import React, { useState } from 'react';
import { generateVibeCheck } from '../services/geminiService';
import { Sparkles, Send } from 'lucide-react';

export const VibeCheck: React.FC = () => {
  const [mood, setMood] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    if (!mood.trim()) return;
    setLoading(true);
    const result = await generateVibeCheck(mood);
    setResponse(result);
    setLoading(false);
  };

  return (
    <div className="w-full bg-white border-2 border-black rounded-xl p-6 md:p-8 shadow-hard relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-mustard opacity-10 rounded-bl-full -mr-8 -mt-8"></div>
      
      <div className="relative z-10">
        <h3 className="font-serif text-2xl font-bold mb-2 flex items-center gap-2">
          <Sparkles className="text-mustard fill-mustard" /> Vibe Generator
        </h3>
        <p className="text-gray-600 mb-6 font-sans">
          Stuck on a bug? Need a hype man? Tell us how you're feeling, and our AI vibe-curator will boost you up.
        </p>

        {!response ? (
          <div className="flex flex-col gap-4">
            <textarea
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              placeholder="e.g. Tired of debugging this race condition..."
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage font-sans resize-none h-24 bg-gray-50"
            />
            <button
              onClick={handleCheck}
              disabled={loading || !mood}
              className={`w-full md:w-auto self-end bg-dark text-white px-6 py-2 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-800'
              }`}
            >
              {loading ? 'Consulting the Vibe Council...' : <><Send size={16} /> Boost My Vibe</>}
            </button>
          </div>
        ) : (
          <div className="bg-sage/10 border border-sage rounded-lg p-6 animate-fade-in">
             <p className="font-serif text-xl text-sage-dark italic mb-4">"{response}"</p>
             <button 
              onClick={() => { setResponse(null); setMood(''); }}
              className="text-sm font-bold text-dark underline hover:text-sage"
             >
               Go again
             </button>
          </div>
        )}
      </div>
    </div>
  );
};