import { motion } from 'motion/react';

export default function MaritimeBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* 1. Rotating Compass Rose */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 200, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[380px] md:w-[550px] h-[380px] md:h-[550px] opacity-[0.06] text-white"
      >
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
          {/* Outer ring */}
          <circle cx="100" cy="100" r="90" strokeDasharray="2 2" />
          {/* Inner ring */}
          <circle cx="100" cy="100" r="75" />
          {/* Axes */}
          <line x1="100" y1="10" x2="100" y2="190" />
          <line x1="10" y1="100" x2="190" y2="100" />
          {/* Diagonal axes */}
          <line x1="36.36" y1="36.36" x2="163.64" y2="163.64" strokeDasharray="1 3" />
          <line x1="36.36" y1="163.64" x2="163.64" y2="36.36" strokeDasharray="1 3" />
          {/* Star points */}
          <polygon points="100,15 104,90 100,100" fill="currentColor" opacity="0.3" />
          <polygon points="100,15 96,90 100,100" fill="none" />
          
          <polygon points="100,185 96,110 100,100" fill="currentColor" opacity="0.3" />
          <polygon points="100,185 104,110 100,100" fill="none" />
          
          <polygon points="185,100 110,96 100,100" fill="currentColor" opacity="0.3" />
          <polygon points="185,100 110,104 100,100" fill="none" />
          
          <polygon points="15,100 90,104 100,100" fill="currentColor" opacity="0.3" />
          <polygon points="15,100 90,96 100,100" fill="none" />
          {/* Center */}
          <circle cx="100" cy="100" r="6" fill="#050505" />
          <circle cx="100" cy="100" r="2" fill="currentColor" />
          {/* Labels */}
          <text x="100" y="27" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none" fontFamily="monospace" fontWeight="bold">N</text>
          <text x="100" y="181" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none" fontFamily="monospace" fontWeight="bold">S</text>
          <text x="173" y="103" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none" fontFamily="monospace" fontWeight="bold">E</text>
          <text x="27" y="103" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none" fontFamily="monospace" fontWeight="bold">W</text>
        </svg>
      </motion.div>

      {/* 2. Gentle Waves at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden opacity-[0.1]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-[200%] h-full text-white fill-currentColor"
          style={{
            animation: 'wave-slide-left 30s linear infinite',
            transform: 'translateX(0)',
          }}
        >
          <path d="M0,60 C150,90 350,30 600,60 C750,90 950,30 1200,60 L1200,120 L0,120 Z" />
        </svg>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-[200%] h-full text-white fill-currentColor opacity-60"
          style={{
            animation: 'wave-slide-right 22s linear infinite',
            transform: 'translateX(-50%)',
          }}
        >
          <path d="M0,80 C150,50 350,110 600,80 C750,50 950,110 1200,80 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </div>
  );
}
