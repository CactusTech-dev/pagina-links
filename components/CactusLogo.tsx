import React from 'react';

const CactusLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`relative group ${className}`}>
       {/* Outer Glow */}
      <div className="absolute inset-0 bg-cactus-400 blur-2xl opacity-20 rounded-full group-hover:opacity-40 transition-opacity duration-500"></div>
      
      {/* SVG Logo */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-[0_0_15px_rgba(46,184,172,0.5)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Cactus Body */}
        <path
          d="M100 170V40C100 28.9543 91.0457 20 80 20H120C131.046 20 140 28.9543 140 40V170"
          stroke="#2eb8ac"
          strokeWidth="8"
          strokeLinecap="round"
          className="animate-pulse-slow"
        />
        
        {/* Left Arm */}
        <path
          d="M100 110H70C58.9543 110 50 101.046 50 90V70C50 58.9543 58.9543 50 70 50"
          stroke="#2eb8ac"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <circle cx="70" cy="50" r="6" fill="#0f172a" stroke="#4fd1c5" strokeWidth="3" />

        {/* Right Arm */}
        <path
          d="M140 100H170C181.046 100 190 91.0457 190 80V70C190 58.9543 181.046 50 170 50"
          stroke="#2eb8ac"
          strokeWidth="8"
          strokeLinecap="round"
        />
         <circle cx="170" cy="50" r="6" fill="#0f172a" stroke="#4fd1c5" strokeWidth="3" />

        {/* Circuit Lines (Tech details inside) */}
        <path d="M110 40V150" stroke="#238f85" strokeWidth="2" />
        <path d="M130 60V140" stroke="#238f85" strokeWidth="2" />
        <path d="M110 80H130" stroke="#238f85" strokeWidth="2" />
        <circle cx="120" cy="100" r="4" fill="#4fd1c5" />
        
        <path d="M110 120L130 130" stroke="#238f85" strokeWidth="2" />
        
        {/* Base */}
        <path d="M60 170H180" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" />
        <path d="M70 170H170" stroke="#2eb8ac" strokeWidth="2" strokeLinecap="round" className="opacity-50" />

      </svg>
    </div>
  );
};

export default CactusLogo;