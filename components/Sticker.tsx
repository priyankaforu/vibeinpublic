import React from 'react';

interface StickerProps {
  type: 'star' | 'circle' | 'squiggle' | 'code' | 'launch' | 'coffee' | 'vibe' | 'bug' | 'fire';
  className?: string;
  color?: string;
}

export const Sticker: React.FC<StickerProps> = ({ type, className = '', color = '#F2C94C' }) => {
  const baseClass = `absolute pointer-events-none select-none z-20 ${className}`;
  
  // Helper for "Physical" stickers (white border, shadow)
  const PhysicalSticker = ({ children, rotate = '0deg' }: { children: React.ReactNode, rotate?: string }) => (
    <div 
      className={`${baseClass} bg-white border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center transition-transform hover:scale-110`}
      style={{ 
        transform: `rotate(${rotate})`, 
        borderRadius: '12px',
      }}
    >
      {children}
    </div>
  );

  switch (type) {
    case 'star':
      return (
        <svg viewBox="0 0 24 24" fill={color} className={`${baseClass}`} width="40" height="40" style={{ filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,1))' }}>
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      );
    case 'circle':
      return (
        <svg viewBox="0 0 100 100" className={`${baseClass}`} width="50" height="50" style={{ filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,1))' }}>
          <circle cx="50" cy="50" r="40" fill="none" stroke={color} strokeWidth="8" />
        </svg>
      );
    case 'squiggle':
      return (
        <svg viewBox="0 0 100 20" className={`${baseClass}`} width="80" height="20" style={{ filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,1))' }}>
          <path d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10" fill="none" stroke={color} strokeWidth="4" />
        </svg>
      );
    case 'code':
      return (
        <div className={`${baseClass} font-mono text-sm bg-white border-2 border-black p-1 rounded shadow-hard rotate-3`}>
          &lt;/&gt;
        </div>
      );
    case 'launch':
        return (
            <PhysicalSticker rotate="-6deg">
                <span className="text-3xl filter drop-shadow-sm">🚀</span>
            </PhysicalSticker>
        );
    case 'coffee':
        return (
            <PhysicalSticker rotate="12deg">
                <span className="text-3xl filter drop-shadow-sm">☕️</span>
            </PhysicalSticker>
        );
    case 'vibe':
        return (
            <PhysicalSticker rotate="-3deg">
                <span className="text-xl font-bold font-sans text-dark uppercase tracking-tighter">VIBE</span>
            </PhysicalSticker>
        );
    case 'bug':
        return (
            <PhysicalSticker rotate="8deg">
                <span className="text-3xl filter drop-shadow-sm">🐛</span>
            </PhysicalSticker>
        );
    case 'fire':
        return (
            <PhysicalSticker rotate="-10deg">
                <span className="text-3xl filter drop-shadow-sm">🔥</span>
            </PhysicalSticker>
        );
    default:
      return null;
  }
};