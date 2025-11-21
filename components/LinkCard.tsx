import React from 'react';
import { SocialLink } from '../types';
import { ChevronRight, ExternalLink } from 'lucide-react';

interface LinkCardProps {
  link: SocialLink;
}

const LinkCard: React.FC<LinkCardProps> = ({ link }) => {
  const Icon = link.icon;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative w-full max-w-lg flex items-center justify-between
        px-6 py-5
        bg-gray-950/40 backdrop-blur-sm
        border border-gray-800
        rounded-lg overflow-hidden
        transition-all duration-300 ease-out
        hover:scale-[1.02] hover:bg-gray-900/60
        hover:border-cactus-400/50
        ${link.color}
      `}
    >
      {/* Animated Border Gradient on Hover */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cactus-400 transition-all duration-300 group-hover:w-full box-shadow-[0_0_10px_#2eb8ac]"></div>
      
      {/* Hover Shimmer Effect */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[100%] group-hover:animate-[shimmer_1s_infinite]" />

      <div className="flex items-center gap-5 z-10">
        <div className="relative">
             {/* Icon Glow Background */}
            <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-20 blur-md rounded-full transition-opacity"></div>
            <div className="p-2 rounded-md bg-gray-800/80 border border-gray-700 group-hover:border-current transition-colors">
                <Icon className="w-6 h-6" />
            </div>
        </div>
        
        <div className="flex flex-col items-start">
            <span className="font-display text-lg font-bold tracking-wide text-gray-100 group-hover:text-white">
            {link.label}
            </span>
            <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest group-hover:text-cactus-300 transition-colors">
                CONECTAR PELO {link.id}
            </span>
        </div>
      </div>

      <div className="relative z-10 flex items-center">
           <ExternalLink className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-cactus-300 mr-2" />
           <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
      </div>
    </a>
  );
};

export default LinkCard;