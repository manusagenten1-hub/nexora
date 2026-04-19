import React from 'react';
import { ExternalLink, Check } from 'lucide-react';
import { PortfolioItem } from '../types';
import { motion } from 'motion/react';

const projects: PortfolioItem[] = [
  {
    tag: 'Site Institucional',
    name: 'CorteFácil',
    description: 'Site moderno desenvolvido para barbearia premium, com foco em agendamentos online e fortalecimento da marca.',
    services: ['Design UI/UX', 'Copy Persuasiva', 'Integração WhatsApp', 'Performance Otimizada'],
    imageUrl: 'https://i.ibb.co/DHM632Lt/Captura-de-tela-2026-02-16-203220.png',
    link: 'https://siteteste-pied.vercel.app/'
  },
  {
    tag: 'Restaurante',
    name: 'Fuego Prime',
    description: 'Site estratégico para restaurante com cardápio digital e sistema de pedidos integrados.',
    services: ['Design Responsivo', 'Estrutura de Conversão', 'Integração de Pedidos', 'SEO Básico'],
    imageUrl: 'https://i.ibb.co/5gLbQ50q/Captura-de-tela-2026-02-16-203425.png',
    link: 'https://site-demo-5jen.vercel.app/'
  },
  {
    tag: 'Delivery',
    name: 'Brasa Burguer',
    description: 'Landing page otimizada para delivery de hambúrguer com foco em conversão e pedidos rápidos via WhatsApp.',
    services: ['Copywriting Estratégico', 'Botões de Conversão', 'Performance Otimizada', 'Integração WhatsApp'],
    imageUrl: 'https://i.ibb.co/PZyZFSFP/Captura-de-tela-2026-02-16-203557.png',
    link: 'https://site-demo-delivery.vercel.app/'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <span className="text-brand-accent font-bold tracking-wider uppercase text-xs md:text-sm mb-2 block">Portfólio</span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-blue mb-4 md:mb-6">
            Projetos que inspiram e vendem
          </h2>
          <p className="text-brand-text text-base md:text-lg">
            Confira alguns exemplos de projetos estratégicos que a Nexora Web desenvolve
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-brand-accent/30 transition-all duration-500 group transform hover:-translate-y-2 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Image Container */}
              <div className="relative h-48 md:h-64 overflow-hidden bg-gray-100 border-b border-gray-100">
                <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={`Projeto ${project.name}`}
                  className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
                />
                <div className="absolute top-3 right-3 md:top-4 md:right-4 z-20 bg-brand-blue/90 backdrop-blur-sm text-brand-accent border border-brand-accent/20 text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-neon transform group-hover:translate-y-1 transition-transform duration-300">
                  {project.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10 bg-white">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-brand-blue mb-2 md:mb-3 group-hover:text-brand-accent transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-brand-text text-sm mb-4 md:mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="mb-6 md:mb-8 space-y-2">
                  {project.services.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
                      <Check className="w-3 h-3 md:w-4 md:h-4 text-brand-accent" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex relative overflow-hidden items-center justify-center gap-2 w-full bg-brand-gray text-brand-blue font-bold py-3 rounded-xl transition-all duration-300 border border-transparent hover:border-brand-accent/20 hover:shadow-neon text-sm md:text-base group/btn"
                  >
                    <span className="absolute inset-0 w-full h-full bg-brand-accent origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></span>
                    <span className="relative z-10 group-hover/btn:text-brand-blue transition-colors duration-300">Ver Site</span>
                    <ExternalLink className="w-4 h-4 relative z-10" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;