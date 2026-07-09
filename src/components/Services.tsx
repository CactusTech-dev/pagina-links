import { motion } from 'motion/react';
import { Code, Smartphone, Cpu, Sparkles, Cloud, TrendingUp } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: typeof Code;
}

const services: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Desenvolvimento Web',
    description: 'Websites, portais corporativos e web apps sob medida, focados em máxima conversão, performance de carregamento e experiência do usuário.',
    icon: Code,
  },
  {
    id: 'mobile-dev',
    title: 'Desenvolvimento Mobile',
    description: 'Aplicativos nativos e híbridos fluidos para iOS e Android que integram os recursos nativos e cativam os usuários do primeiro toque ao checkout.',
    icon: Smartphone,
  },
  {
    id: 'apis',
    title: 'APIs & Integrações',
    description: 'Arquiteturas de microsserviços escaláveis, integráveis e seguras que conectam seus sistemas internos com soluções globais e parceiros chave.',
    icon: Cpu,
  },
  {
    id: 'ai',
    title: 'Inteligência Artificial',
    description: 'Implementação de modelos inteligentes, chatbots personalizados, automação cognitiva e análise preditiva de dados para otimizar fluxos de trabalho.',
    icon: Sparkles,
  },
  {
    id: 'cloud',
    title: 'Soluções em Nuvem',
    description: 'Migração, gerenciamento, orquestração e monitoramento em infraestruturas como AWS, GCP e Azure, maximizando a segurança e escalabilidade.',
    icon: Cloud,
  },
  {
    id: 'consulting',
    title: 'Consultoria Tecnológica',
    description: 'Análise técnica aprofundada, otimização de legados, planejamento de infraestrutura e direcionamento para tomadas de decisão inteligentes.',
    icon: TrendingUp,
  },
];

export default function Services() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto" id="servicos">
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 tracking-wider mb-4"
        >
          <span>EXCELÊNCIA TÉCNICA</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-3xl font-sans font-bold text-white tracking-tight"
        >
          Nossos Serviços
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-px w-20 bg-gradient-to-r from-transparent via-neutral-400 to-transparent mx-auto mt-4"
        />
      </div>

      {/* Services Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              id={`service-card-${service.id}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl bg-neutral-900/20 hover:bg-neutral-900/40 border border-neutral-800/50 hover:border-neutral-700/70 backdrop-blur-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Wrapper */}
                <div className="inline-flex p-3 rounded-xl bg-neutral-950 border border-neutral-800/80 text-neutral-400 group-hover:text-white group-hover:border-neutral-600/60 transition-colors duration-300 mb-5">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-sans font-semibold text-neutral-100 group-hover:text-white transition-colors duration-200 mb-2">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-200 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              {/* Minimal Accent Strip */}
              <div className="h-0.5 w-0 group-hover:w-12 bg-white/60 mt-6 transition-all duration-500 rounded-full" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
