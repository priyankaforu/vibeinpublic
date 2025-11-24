import React from 'react';

interface FeatureSplitProps {
  title: string;
  description: string;
  badge: string;
  imageComponent: React.ReactNode;
  reversed?: boolean;
}

export const FeatureSplit: React.FC<FeatureSplitProps> = ({ title, description, badge, imageComponent, reversed = false }) => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24">
      <div className={`max-w-7xl mx-auto flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
        
        <div className="flex-1 space-y-6">
          <div className="inline-block px-3 py-1 bg-cream border border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="font-mono text-xs font-bold uppercase tracking-wider">{badge}</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark leading-tight">
            {title}
          </h2>
          <p className="font-sans text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex-1 w-full flex justify-center">
            {imageComponent}
        </div>
      </div>
    </section>
  );
};