import React from 'react';
import { Laptop, Zap, Target, Search, Server, Globe, UserCheck, LayoutDashboard } from 'lucide-react';
import { ServiceItem } from '../types';
import { motion } from 'motion/react';

const features: ServiceItem[] = [
  { icon: Laptop, title: 'Sites Profissionais', description: 'Layouts exclusivos e personalizados, alinhados à identidade da sua marca.' },
  { icon: Zap, title: 'Ultra Rápidos', description: 'Performance otimizada para não perder visitantes por lentidão.' },
  { icon: Target, title: 'Foco em Conversão', description: 'Estrutura visual e textual pensada para gerar mais contatos e vendas.' },
  { icon: UserCheck, title: 'Páginas de Vendas para Autônomos', description: 'Foco em transformar autoridade em vendas diretas de infoprodutos ou serviços físicos.' },
  { icon: LayoutDashboard, title: 'Dashboard Administrativo', description: 'Painel de controle para gerenciar pedidos, clientes, agendamentos e métricas num único lugar, sem complexidade técnica.' },
  { icon: Globe, title: 'Domínio Incluso', description: 'Registro do seu domínio profissional (.com ou .com.br).' },
];

const Features: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-brand-gray relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          
          {/* Left Content */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-brand-accent font-bold tracking-wider uppercase text-xs md:text-sm mb-2 block">Entrega Completa</span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-blue mb-4 md:mb-6">
                Tudo o que seu negócio precisa para vender online
              </h2>
              <motion.div 
                initial={{ scaleX: 0 }} 
                whileInView={{ scaleX: 1 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="h-1.5 w-16 md:w-24 bg-brand-accent rounded-full mb-6 md:mb-8 shadow-neon origin-left"
              ></motion.div>
              <p className="text-brand-text text-base md:text-lg leading-relaxed">
                Você não precisa se preocupar com nada técnico. A <strong className="text-brand-accent">Nexora Web</strong> cuida de tudo para você ter um site profissional, pronto para gerar clientes.
              </p>
            </motion.div>
          </div>

          {/* Right Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border-l-4 border-transparent hover:border-brand-accent group transform hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-accent/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-brand-accent transition-colors duration-500">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-brand-blue group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-lg md:text-xl font-heading font-bold text-brand-blue mb-2 md:mb-3 relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-brand-text text-sm md:text-base leading-relaxed relative z-10 group-hover:text-gray-600 transition-colors duration-300">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;