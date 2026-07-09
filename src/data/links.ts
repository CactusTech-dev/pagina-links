export interface LinkItem {
  id: string;
  label: string;
  url: string;
  iconName: 'Globe' | 'Instagram' | 'Github' | 'MessageSquare' | 'Linkedin' | 'Mail' | 'MessageCircle';
  description: string;
  accentColor: string;
}

export const links: LinkItem[] = [
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/tzeu_tecnologia/',
    iconName: 'Instagram',
    description: 'Acompanhe nossos bastidores, insights e novidades diárias.',
    accentColor: 'from-pink-500 via-red-500 to-yellow-500',
  },
  {
    id: 'discord',
    label: 'Discord',
    url: 'https://discord.gg/85KN48ThB',
    iconName: 'MessageSquare',
    description: 'Participe da nossa comunidade de desenvolvedores.',
    accentColor: 'from-indigo-500 to-purple-600',
  },
  {
    id: 'email',
    label: 'E-mail',
    url: 'mailto:cactutechdesenvolvimento@gmail.com',
    iconName: 'Mail',
    description: 'Fale diretamente com nossa equipe para parcerias.',
    accentColor: 'from-red-400 to-orange-500',
  },
];
