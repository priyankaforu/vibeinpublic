import React from 'react';
import { Users, Code2, Zap } from 'lucide-react';

export const ValuesSection: React.FC = () => {
  const values = [
    {
      icon: <Users size={32} />,
      title: "Anti-lonely",
      desc: "Solopreneur doesn't mean solo. Connect with peers who understand the grind.",
      color: "bg-lavender"
    },
    {
      icon: <Zap size={32} />,
      title: "Radical Transparency",
      desc: "Share your MRR, your bugs, and your lessons. We learn faster when we're open.",
      color: "bg-mustard/50"
    },
    {
      icon: <Code2 size={32} />,
      title: "Builders First",
      desc: "No marketers selling courses. Just people shipping code and products.",
      color: "bg-sage/50"
    }
  ];

  return (
    <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="group p-8 rounded-2xl hover:bg-gray-50 transition-colors cursor-default">
              <div className={`w-16 h-16 rounded-full ${v.color} flex items-center justify-center mb-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all`}>
                {v.icon}
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3">{v.title}</h3>
              <p className="font-sans text-gray-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};