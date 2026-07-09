import { motion } from 'motion/react';

interface TzeuIconProps {
  className?: string;
  size?: number;
  color?: string;
}

export function TzeuIcon({ className = '', size = 80, color = 'currentColor' }: TzeuIconProps) {
  return (
    <svg
      width={size}
      height={(size * 1.4).toFixed(0)}
      viewBox="0 0 140 196"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 
        TZEU Logo Monogram Vector
        Meticulously plotted to match the exact geometric proportions of the brand logo:
        - Central mast with tiny flag pointing right
        - Five horizontal crossbars
        - Left and Right vertical spines framing the monogram
        - Parallel diagonal bands
        - Curved bottom "U" loop wrapping the bottom
      */}
      <g fill={color}>
        {/* Central Vertical Mast (Trunk of the structure) */}
        <rect x="66" y="42" width="8" height="130" />

        {/* Top Flag Mast Extension & Flag */}
        <rect x="68.5" y="15" width="3" height="27" />
        
        {/* Flag Cap Pinhead */}
        <circle cx="70" cy="14" r="1.5" />
        
        {/* Collar ring on flagpole */}
        <rect x="65" y="38" width="10" height="2" rx="0.5" />

        {/* Beautiful wave flag pointing to the right */}
        <path d="M 71.5 15 C 80 15, 84 19, 90 19 C 98 19, 104 15, 110 15 C 110 23, 104 29, 94 29 C 86 29, 82 25, 71.5 25 Z" />

        {/* Five Horizontal Crossbars (T-bars & body ribs) */}
        {/* Bar 1 (Topmost T-bar) */}
        <rect x="30" y="52" width="80" height="8" rx="0.5" />
        
        {/* Bar 2 */}
        <rect x="30" y="72" width="80" height="8" rx="0.5" />
        
        {/* Bar 3 */}
        <rect x="30" y="92" width="80" height="8" rx="0.5" />
        
        {/* Bar 4 */}
        <rect x="30" y="112" width="80" height="8" rx="0.5" />
        
        {/* Bar 5 */}
        <rect x="30" y="132" width="80" height="8" rx="0.5" />

        {/* Left and Right Vertical Spines (Framing the monogram) */}
        {/* Left Spine (Connects Bars 2, 3, 4, 5) */}
        <rect x="30" y="72" width="8" height="68" />
        
        {/* Right Spine (Connects Bars 2, 3, 4, 5) */}
        <rect x="102" y="72" width="8" height="68" />

        {/* Parallel Diagonal Ribbons (Slanted from top-left to bottom-right) */}
        {/* Diagonal 1 (From top-left of Bar 2 to bottom-right of Bar 4) */}
        <path d="M 30 72 L 110 112 L 110 123 L 30 83 Z" />
        
        {/* Diagonal 2 (From top-left of Bar 3 to bottom-right of Bar 5) */}
        <path d="M 30 92 L 110 132 L 110 143 L 30 103 Z" />

        {/* Bottom Curved "U" shape (Connects seamlessly with the Spines at Bar 5) */}
        <path d="M 30 140 A 40 40 0 0 0 110 140 L 102 140 A 32 32 0 0 1 38 140 Z" />
      </g>
    </svg>
  );
}

export function TzeuLogo({ className = '', size = 50 }: { className?: string; size?: number }) {
  return (
    <div className={`flex items-center space-x-6 ${className}`}>
      <TzeuIcon size={size} color="white" />
      <span className="text-white font-sans text-4xl md:text-5xl font-semibold tracking-[0.25em] select-none">
        TZEU
      </span>
    </div>
  );
}
