import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface BlogPageProps {
  onBack: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-cream">
      <nav className="w-full py-8 px-6 md:px-12 lg:px-24 flex items-center bg-cream border-b-2 border-black">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 font-sans font-bold text-lg hover:text-sage transition-colors"
        >
          <ArrowLeft size={24} /> Back to Home
        </button>
      </nav>

      <article className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <header className="mb-16">
          <h1 className="font-sans font-bold text-5xl md:text-7xl leading-tight mb-6 text-dark">
            The Vibe in Public Manifesto
          </h1>
          <p className="text-xl text-gray-600 font-sans">
            Why we build, ship, and vibe together in the open.
          </p>
        </header>

        <div className="prose prose-lg max-w-none font-sans space-y-8">
          <section>
            <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4 text-dark">
              We believe in building in public
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The best products aren't built in isolation. They're built in the open, with feedback from real users, 
              support from fellow builders, and the accountability that comes from sharing your journey with the world.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4 text-dark">
              Shipping &gt; Perfection
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We don't wait for perfect. We ship early, we ship often, and we iterate based on real feedback. 
              A deployed feature beats a perfect plan every single time. LGTM? Ship it.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4 text-dark">
              Community over competition
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              There's room for everyone at the table. We celebrate each other's wins, help debug each other's bugs, 
              and lift each other up when the imposter syndrome hits at 2 AM. Your success doesn't diminish mine.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4 text-dark">
              Real talk, no BS
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We keep it real. No fake hustle culture, no toxic positivity, no pretending everything is perfect. 
              Building is hard. Shipping is scary. We talk about the struggles as much as the wins.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4 text-dark">
              Accountability breeds success
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              When you commit to building in public, you're not just accountable to yourself—you're accountable to 
              the community. That's not pressure, that's fuel. We show up for each other, and that makes us all better builders.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4 text-dark">
              The vibe is everything
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We're not just building products, we're building a movement. A community where indie hackers, solo founders, 
              and side project enthusiasts can find their people, share their journey, and build something meaningful together.
            </p>
          </section>

          <div className="mt-16 p-8 bg-sage/10 border-2 border-sage rounded-xl">
            <p className="text-2xl font-sans font-bold text-sage-dark text-center mb-4">
              Ready to join the movement?
            </p>
            <p className="text-lg text-gray-700 text-center mb-6">
              Stop building alone. Start vibing in public.
            </p>
            <div className="flex justify-center">
              <a 
                href="https://x.com/i/communities/1992867116429771142" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-sage hover:bg-sage-dark text-white font-sans font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-hard active:translate-x-1 active:translate-y-1 active:shadow-none border-2 border-black"
              >
                Join Squad
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
