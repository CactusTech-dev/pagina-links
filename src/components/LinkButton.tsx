import { motion } from 'motion/react';
import {
  Globe,
  Instagram,
  Github,
  MessageSquare,
  Linkedin,
  Mail,
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react';
import { LinkItem } from '../data/links';

// Map icon names to Lucide icon components
const iconMap = {
  Globe,
  Instagram,
  Github,
  MessageSquare, // Used for Discord
  Linkedin,
  Mail,
  MessageCircle, // Used for WhatsApp
};

interface LinkButtonProps {
  key?: string;
  link: LinkItem;
  index: number;
}

export default function LinkButton({ link, index }: LinkButtonProps) {
  const IconComponent = iconMap[link.iconName] || Globe;

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      id={`link-btn-${link.id}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08 + 0.3,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="group relative flex items-center justify-between p-5 rounded-2xl bg-neutral-900/30 hover:bg-neutral-900/60 border border-neutral-800/60 hover:border-neutral-700/80 backdrop-blur-md transition-all duration-300 overflow-hidden"
    >
      {/* Absolute Glow Background Effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${link.accentColor} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none`} />
      
      <div className="flex items-center space-x-4 z-10">
        {/* Animated Icon Wrapper with accent gradient border */}
        <div className={`p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800/80 group-hover:border-neutral-600/50 transition-colors duration-300 relative`}>
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
          <IconComponent className="w-6 h-6 text-neutral-300 group-hover:text-white transition-colors duration-300" />
        </div>
        
        {/* Label & Description */}
        <div className="text-left">
          <span className="block text-base font-sans font-medium text-neutral-200 group-hover:text-white transition-colors duration-200">
            {link.label}
          </span>
          <span className="block text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors duration-200 mt-0.5 line-clamp-1">
            {link.description}
          </span>
        </div>
      </div>

      {/* Modern interactive Arrow Indicator */}
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-950/40 border border-neutral-800/50 group-hover:border-neutral-600/60 group-hover:bg-neutral-950/80 transition-all duration-300 z-10">
        <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-neutral-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
      </div>
    </motion.a>
  );
}
