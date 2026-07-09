import { motion } from 'motion/react';
import { links } from './data/links';
import Profile from './components/Profile';
import LinkButton from './components/LinkButton';
import Services from './components/Services';
import Footer from './components/Footer';
import WindBreeze from './components/WindBreeze';
import MaritimeBackground from './components/MaritimeBackground';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-neutral-200 selection:bg-white/10 selection:text-white relative overflow-x-hidden font-sans">
      
      {/* Background Ambience: Subtle grid + Top Glowing Spotlight + Animated Breeze */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
        
        {/* Premium Top Center radial light projection (Vercel/Linear style) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[400px] md:h-[600px] bg-gradient-to-b from-neutral-200/10 via-neutral-400/2 to-transparent blur-[120px] rounded-full" />
        
        {/* Bottom subtle ambient light projection */}
        <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-white/[0.01] blur-[150px] rounded-full" />

        {/* High performance 2D Wind Breeze animation */}
        <WindBreeze />

        {/* 2D Navigational background theme: compass rose and waves */}
        <MaritimeBackground />
      </div>

      {/* Top Header Navbar */}
      <header className="relative w-full max-w-6xl mx-auto px-4 py-6 flex items-center justify-between z-10 border-b border-white/[0.02]">
        <div className="flex items-center space-x-3">
          {/* Logo Card */}
          <div className="relative flex h-9 w-28 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white px-2 shadow-lg shadow-black/20">
            <img
              src="/tzeu-logo.jpeg"
              alt="TZEU"
              className="h-full w-full object-contain"
            />
          </div>
          <span className="text-sm font-sans font-semibold tracking-wider text-white">TZEU</span>
        </div>
        
        {/* Quick Links */}
        <nav className="flex items-center space-x-6 text-xs font-mono tracking-widest text-neutral-400">
          <a href="#servicos" className="hover:text-white transition-colors duration-200">SERVIÇOS</a>
          <a href="#contato" className="hover:text-white transition-colors duration-200">CONTATO</a>
        </nav>
      </header>

      {/* Main Container */}
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-6xl mx-auto px-4 pt-16 pb-12"
      >
        {/* Profile Card / Brand Intro */}
        <Profile />

        {/* Channels / LinkButtons Grid */}
        <div className="max-w-2xl mx-auto mb-24">
          <div className="text-center mb-8">
            <h3 className="text-xs font-mono tracking-[0.25em] text-neutral-500 uppercase">
              Canais & Conexões
            </h3>
          </div>
          
          <div className="flex flex-col gap-4 max-w-lg mx-auto">
            {links.map((link, index) => (
              <LinkButton key={link.id} link={link} index={index} />
            ))}
          </div>
        </div>

        {/* Services Section */}
        <Services />
      </motion.main>

      {/* Contact Section & Footer */}
      <Footer />
    </div>
  );
}
