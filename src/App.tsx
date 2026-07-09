import { motion } from 'motion/react';
import { links } from './data/links';
import Profile from './components/Profile';
import LinkButton from './components/LinkButton';
import Services from './components/Services';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-neutral-200 selection:bg-white/10 selection:text-white relative overflow-x-hidden font-sans">
      
      {/* Background Ambience: Subtle grid + Top Glowing Spotlight */}
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
      </div>

      {/* Top Header Navbar */}
      <header className="relative w-full max-w-6xl mx-auto px-4 py-6 flex items-center justify-between z-10 border-b border-white/[0.02]">
        <div className="flex items-center space-x-3">
          {/* Typographic Mini-logo */}
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800">
            <svg viewBox="0 0 128 128" fill="none" className="w-4 h-4 text-white">
              <path d="M20 28H108V40H74V108H54V40H20V28Z" fill="currentColor" />
            </svg>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
