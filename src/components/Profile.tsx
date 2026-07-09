import { motion } from 'motion/react';

export default function Profile() {
  return (
    <div className="flex flex-col items-center text-center px-4 max-w-2xl mx-auto mb-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative group mb-8 w-full max-w-[420px]"
      >
        <div className="absolute -inset-6 bg-gradient-to-r from-neutral-800 via-white to-neutral-800 rounded-[2rem] opacity-10 blur-2xl group-hover:opacity-20 transition duration-1000 group-hover:duration-200" />

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white p-3 shadow-2xl shadow-black/40 ring-1 ring-white/5">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/20 via-transparent to-neutral-950/10" />
          <img
            src="/tzeu-logo.jpeg"
            alt="TZEU"
            className="relative h-auto w-full rounded-xl object-contain"
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
