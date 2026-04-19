import React from 'react';
import { Stethoscope, Utensils, Scissors, Store, Truck, Wrench, User, AlertTriangle, ArrowRight } from 'lucide-react';
import { AudienceItem } from '../types';
import { motion } from 'motion/react';

const audiences: AudienceItem[] = [
  { label: 'Clínicas e Consultórios', icon: Stethoscope },
  { label: 'Restaurantes e Delivery', icon: Utensils },
  { label: 'Barbearias e Salões', icon: Scissors },
  { label: 'Logística e Entregas', icon: Truck },
  { label: 'Prestadores de Serviço', icon: Wrench },
  { label: 'Profissionais Autônomos', icon: User },
  { label: 'Sites antigos ou lentos', icon: AlertTriangle },
  { label: 'Todos os tipos de empresas', icon: Store },
];

const TargetAudience: React.FC = () => {
  return (
    <section id="audience" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-5xl font-heading font-bold text-brand-blue mb-4 md:mb-6">
            Ideal para negócios que querem crescer no digital
          </h2>
          <p className="text-brand-text text-base md:text-xl leading-relaxed">
            Atendemos desde pequenos empreendedores até empresas consolidadas que precisam de presença digital estratégica para atrair mais clientes e gerar resultados reais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12">
          {audiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
                key={index}
                className="group p-6 rounded-2xl border border-gray-100 bg-brand-gray hover:bg-white hover:border-brand-accent hover:shadow-neon transition-all duration-500 flex flex-col items-center text-center cursor-default transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center mb-4 md:mb-6 text-brand-accent shadow-sm group-hover:bg-brand-accent group-hover:text-brand-blue transition-colors duration-500 transform group-hover:rotate-6 group-hover:scale-110">
                  <Icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="font-heading font-semibold text-brand-blue text-base md:text-lg group-hover:text-brand-accent transition-colors duration-300">
                  {item.label}
                </h3>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-8 max-w-3xl mx-auto"
        >
          <p className="text-gray-500 text-sm md:text-base italic">
            *Estes são apenas alguns exemplos. A Nexora Web desenvolve projetos personalizados e estratégicos para <strong>qualquer</strong> segmento de mercado.
          </p>
        </motion.div>

        {/* Final Phrase & CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="group bg-gradient-to-r from-brand-blue to-[#0a1a35] rounded-3xl p-6 md:p-12 text-center relative overflow-hidden border border-brand-accent/20 shadow-xl"
        >
           <div className="absolute inset-0 w-full h-full bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
           
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
              <div className="text-center md:text-left">
                <p className="text-white text-base md:text-xl font-medium mb-1 relative overflow-hidden">
                  <motion.span 
                    initial={{ y: "100%" }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="block"
                  >
                    Independentemente do tamanho do seu negócio,
                  </motion.span>
                </p>
                <p className="text-brand-accent font-heading font-bold text-lg md:text-2xl drop-shadow-[0_0_5px_rgba(0,212,255,0.5)] relative overflow-hidden">
                  <motion.span 
                    initial={{ y: "100%" }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="block"
                  >
                    sua presença digital precisa transmitir autoridade.
                  </motion.span>
                </p>
              </div>
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-quiz-modal'))}
                className="w-full md:w-auto overflow-hidden relative inline-flex justify-center items-center gap-2 bg-brand-accent text-brand-blue px-5 py-3 md:px-8 md:py-4 rounded-xl font-bold transition-all shadow-neon group/btn text-sm md:text-base"
              >
                <span className="absolute inset-0 w-full h-full bg-white origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></span>
                <span className="relative z-10 whitespace-normal text-center md:whitespace-nowrap">Vamos conversar</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1 shrink-0" />
              </button>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudience;