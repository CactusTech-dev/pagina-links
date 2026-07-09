import { motion } from 'motion/react';
import { TzeuIcon } from './TzeuLogo';

export default function Profile() {
  return (
    <div className="flex flex-col items-center text-center px-4 max-w-2xl mx-auto mb-12">
      {/* Premium TZEU Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative group mb-8"
      >
        {/* Glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-neutral-800 via-neutral-100 to-neutral-800 rounded-2xl opacity-10 blur-xl group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
        
        {/* SVG TZEU Icon */}
        <div className="relative bg-neutral-950/50 border border-neutral-800/80 p-5 rounded-2xl backdrop-blur-md flex items-center justify-center">
          <TzeuIcon 
            size={76} 
            color="#FFFFFF" 
            className="transform group-hover:scale-105 transition-transform duration-500" 
          />
        </div>
      </motion.div>

      {/* Startup Name */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-white mb-3"
      >
        TZEU <span className="text-neutral-400 font-light">Tech</span>
      </motion.h1>

      {/* Slogan */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-lg md:text-xl font-sans text-neutral-300 font-medium tracking-wide mb-4"
      >
        "Inovando através da tecnologia."
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="text-sm md:text-base text-neutral-400 leading-relaxed max-w-lg"
      >
        Desenvolvemos softwares, aplicativos, websites e soluções digitais para empresas e empreendedores.
      </motion.p>

      {/* Sub-indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className="mt-6 flex items-center space-x-2 text-xs font-mono tracking-widest text-neutral-500"
      >
        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
        <span>DISPONÍVEL PARA NOVOS PROJETOS</span>
      </motion.div>
    </div>
  );
}
