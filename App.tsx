import React from 'react';
import { BRAND_NAME, SOCIAL_LINKS } from './constants';
import LinkCard from './components/LinkCard';
import CircuitBackground from './components/CircuitBackground';
import CactusLogo from './components/CactusLogo';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Dynamic Background with Pixel Cactuses */}
      <CircuitBackground />

      {/* Main Container */}
      <main className="relative z-10 flex flex-col items-center w-full max-w-2xl">
        
        {/* Logo Section with Glow */}
        <div className="mb-6 animate-float relative">
          <div className="absolute inset-0 bg-cactus-400/20 blur-[60px] rounded-full"></div>
          <CactusLogo className="w-40 h-40 md:w-48 md:h-48 relative z-10" />
        </div>

        {/* Title with Glitch Effect */}
        <div className="relative mb-2">
            <h1 
              className="glitch-text font-display text-5xl md:text-7xl font-black text-white tracking-widest text-center drop-shadow-[0_0_10px_rgba(46,184,172,0.5)]"
              data-text={BRAND_NAME}
            >
              {BRAND_NAME}
            </h1>
        </div>
        
        {/* Subtitle with Pixel Font style */}
        <div className="flex items-center gap-3 mb-12 opacity-90">
            <span className="h-[1px] w-8 bg-cactus-400"></span>
            <p className="font-body text-cactus-300 text-lg md:text-xl tracking-[0.3em] uppercase font-semibold">
            Inovar <span className="text-white mx-1">.</span> Automatizar <span className="text-white mx-1">.</span> Crescer
            </p>
            <span className="h-[1px] w-8 bg-cactus-400"></span>
        </div>

        {/* Links Grid */}
        <div className="w-full flex flex-col items-center gap-4 px-4">
          {SOCIAL_LINKS.map((link) => (
            <LinkCard key={link.id} link={link} />
          ))}
        </div>

        {/* Footer / Decorator */}
        <footer className="mt-20 text-center text-gray-600 text-xs font-display tracking-widest">
          <p className="mb-2">STATUS DO SISTEMA: ONLINE</p>
          <p>© {new Date().getFullYear()} CACTUS TECH. TODOS OS DIREITOS RESERVADOS.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;