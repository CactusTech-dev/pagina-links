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
    id: 'website',
    label: 'Website',
    url: '#',
    iconName: 'Globe',
    description: 'Conheça nossa plataforma oficial e projetos ativos.',
    accentColor: 'from-emerald-500 to-teal-400',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/tzeu_tecnologia/',
    iconName: 'Instagram',
    description: 'Acompanhe nossos bastidores, insights e novidades diárias.',
    accentColor: 'from-pink-500 via-red-500 to-yellow-500',
  },
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com',
    iconName: 'Github',
    description: 'Explore nossos repositórios open-source e tecnologias.',
    accentColor: 'from-gray-600 to-gray-900',
  },
  {
    id: 'discord',
    label: 'Discord',
    url: 'https://discord.com',
    iconName: 'MessageSquare',
    description: 'Participe da nossa comunidade de desenvolvedores.',
    accentColor: 'from-indigo-500 to-purple-600',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://linkedin.com',
    iconName: 'Linkedin',
    description: 'Conecte-se conosco profissionalmente no mercado tech.',
    accentColor: 'from-blue-600 to-cyan-500',
  },
  {
    id: 'email',
    label: 'E-mail',
    url: 'mailto:contato@tzeu.tech',
    iconName: 'Mail',
    description: 'Fale diretamente com nossa equipe para parcerias.',
    accentColor: 'from-red-400 to-orange-500',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    url: 'https://wa.me/5585999999999',
    iconName: 'MessageCircle',
    description: 'Inicie um atendimento ágil e personalizado.',
    accentColor: 'from-green-500 to-emerald-600',
  },
];
