import { motion } from 'motion/react';
import { Mail, MessageCircle, Send, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-900 bg-neutral-950/20 backdrop-blur-sm" id="contato">
      {/* Contato Section */}
      <div className="max-w-4xl mx-auto px-4 pt-16 pb-12">
        <div className="relative rounded-3xl p-8 md:p-12 bg-gradient-to-b from-neutral-900/40 to-neutral-950/80 border border-neutral-800/80 overflow-hidden text-center">
          {/* Subtle light leak or glowing effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-24 bg-white/5 blur-3xl rounded-full pointer-events-none"></div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-xl md:text-2xl font-sans font-bold text-white tracking-tight mb-3">
              Vamos construir o futuro juntos?
            </h3>
            <p className="text-sm text-neutral-400 max-w-lg mx-auto mb-8 font-light">
              Fale conosco para tirar seu projeto do papel, modernizar sua arquitetura de software ou iniciar uma transformação digital.
            </p>
          </motion.div>

          {/* Contact Actions Grid */}
          <div className="flex justify-center max-w-md mx-auto">
            {/* Email Link Card */}
            <motion.a
              href="mailto:tzeutechdesenvolvimento@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-neutral-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="block text-xs text-neutral-400">E-mail Comercial</span>
                  <span className="block text-sm font-sans font-medium text-neutral-200 break-all">tzeutechdesenvolvimento@gmail.com</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </motion.a>
          </div>
        </div>

        {/* Brand signature & Location Footer */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between text-neutral-600 text-xs font-mono tracking-widest pt-8 border-t border-neutral-900">
          <div className="mb-4 md:mb-0">
            <span>© 2026 TZEU TECH. TODOS OS DIREITOS RESERVADOS.</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>FORTALEZA</span>
            <span className="text-neutral-800">•</span>
            <span>CEARÁ</span>
            <span className="text-neutral-800">•</span>
            <span>BRASIL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
