import { Github, Instagram, Disc, Globe } from 'lucide-react';
import { SocialLink } from './types';

export const BRAND_NAME = "CACTUS TECH";

// You should replace these URLs with your actual startup links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'discord',
    label: 'Comunidade Discord',
    url: 'https://discord.gg/yah5JVev',
    icon: Disc,
    color: 'hover:border-[#5865F2] hover:text-[#5865F2] hover:shadow-[#5865F2]/40'
  },
  {
    id: 'instagram',
    label: 'Instagram Oficial',
    url: 'https://www.instagram.com/cactus_software?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    icon: Instagram,
    color: 'hover:border-[#E1306C] hover:text-[#E1306C] hover:shadow-[#E1306C]/40'
  },
  {
    id: 'github',
    label: 'Portfólio GitHub',
    url: 'https://github.com/CactusTech-dev/Portfolio',
    icon: Github,
    color: 'hover:border-white hover:text-white hover:shadow-white/40'
  }
];