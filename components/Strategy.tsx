import React from 'react';
import { PenTool, Layout, MousePointerClick, Zap, Search, Plug } from 'lucide-react';
import { StrategyItem } from '../types';
import { motion } from 'motion/react';

const strategies: StrategyItem[] = [
  {
    icon: PenTool,
    title: 'Copywriting Persuasivo',
    description: 'Textos estratégicos que conduzem o visitante até a ação — contato, orçamento ou compra.'
  },
  {
    icon: Layout,
    title: 'UI/UX Design Profissional',
    description: 'Experiência visual pensada para gerar confiança, autoridade e fluidez na navegação.'
  },
  {
    icon: MousePointerClick,
    title: 'Arquitetura de Conversão',
    description: 'Posicionamento estratégico de botões, chamadas para ação e estrutura otimizada.'
  },
  {
    icon: Zap,
    title: 'Otimização de Performance',
    description: 'Sites leves, rápidos e tecnicamente otimizados para melhor carregamento.'
  },
  {
    icon: Search,
    title: 'SEO Estratégico',
    description: 'Estrutura otimizada para facilitar o posicionamento no Google.'
  },
  {
    icon: Plug,
    title: 'Integrações Inteligentes',
    description: 'WhatsApp, formulários, agendamentos, pedidos online e dashboards personalizados.'
  }
];

const Strategy: React.FC = () => {
  return (
    <section id="strategy" className="py-16 md:py-24 bg-brand-blue text-white relative border-t border-brand-accent/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center mb-10 md:mb-16"
        >
          <span className="text-brand-accent font-bold tracking-wider uppercase text-xs md:text-sm mb-2 block drop-shadow-[0_0_5px_rgba(0,212,255,0.8)]">Diferencial</span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6">
            Muito mais do que design. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400">Estratégia de conversão.</span>
          </h2>
          <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto">
            Na Nexora Web, seu site é desenvolvido por uma estrutura estratégica completa. Cada detalhe é pensado para transformar visitantes em clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {strategies.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                className="bg-brand-blue/50 border border-brand-accent/10 p-6 md:p-8 rounded-2xl hover:border-brand-accent/50 hover:bg-brand-accent/5 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-brand-accent group-hover:scale-110 transition-all duration-300 relative z-10">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-brand-accent group-hover:text-brand-blue" />
                </div>
                <h3 className="text-lg md:text-xl font-heading font-bold mb-2 md:mb-3 group-hover:text-brand-accent transition-colors duration-300 relative z-10">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 relative z-10">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Strategy;