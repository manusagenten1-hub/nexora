import React, { useRef } from 'react';
import { MessageSquare, Brain, Layout, Rocket } from 'lucide-react';
import { StepItem } from '../types';
import { motion, useScroll, useTransform } from 'motion/react';

const steps: StepItem[] = [
  { 
    number: '01',
    title: 'Diagnóstico Inicial',
    description: 'Entendemos seu negócio, objetivos e público-alvo.',
    icon: MessageSquare
  },
  { 
    number: '02',
    title: 'Planejamento Estratégico',
    description: 'Definimos estrutura, posicionamento e jornada do usuário.',
    icon: Brain
  },
  { 
    number: '03',
    title: 'Desenvolvimento Premium',
    description: 'Criamos seu site com design moderno e estrutura persuasiva.',
    icon: Layout
  },
  { 
    number: '04',
    title: 'Lançamento e Suporte',
    description: 'Seu site entra no ar pronto para gerar resultados.',
    icon: Rocket
  }
];

const Process: React.FC = () => {
  const processRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);

  return (
    <section ref={processRef} id="process" className="py-16 md:py-32 bg-brand-blue text-white relative overflow-hidden">
      
      {/* Massive Background Scroll Text (Ravi Klaassens Style) */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none z-0 opacity-[0.03] overflow-hidden select-none">
        <motion.div style={{ x: x1 }} className="whitespace-nowrap pb-4 md:pb-8 flex">
          <span className="text-[100px] md:text-[200px] font-heading font-black uppercase leading-[0.8] tracking-tighter shrink-0 min-w-max">
            DIGITAL EXPERIENCES EXCELLENCE DIGITAL EXPERIENCES EXCELLENCE
          </span>
        </motion.div>
        <motion.div style={{ x: x2 }} className="whitespace-nowrap flex">
          <span className="text-[100px] md:text-[200px] font-heading font-black uppercase leading-[0.8] tracking-tighter shrink-0 min-w-max text-transparent" style={{ WebkitTextStroke: '1px white' }}>
            NEXORA WEB STRATEGY DESIGN NEXORA WEB STRATEGY DESIGN
          </span>
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none z-0">
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
           className="absolute right-0 top-1/4 w-40 h-40 md:w-64 md:h-64 border-4 border-brand-accent/20 rounded-full blur-xl"
         ></motion.div>
         <motion.div 
           animate={{ rotate: -360 }}
           transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
           className="absolute left-0 bottom-1/4 w-60 h-60 md:w-96 md:h-96 border-8 border-brand-accent/10 rounded-full blur-2xl"
         ></motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-brand-accent font-bold tracking-wider uppercase text-xs md:text-sm mb-2 block drop-shadow-[0_0_5px_rgba(0,212,255,0.8)]">Como Trabalhamos</span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold">
            Processo simples, estratégico e eficiente
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mb-12 md:mb-16">
          {/* Connector Line (Desktop) */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "anticipate" }}
            className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-800 -z-10 bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent origin-left"
          ></motion.div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-6 md:mb-8">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-blue border-2 border-brand-accent flex items-center justify-center z-10 relative group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] shadow-[0_0_15px_rgba(0,212,255,0.2)] group-hover:shadow-neon group-hover:bg-brand-accent">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-brand-accent group-hover:text-brand-blue transition-colors duration-500" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-brand-blue border border-brand-accent flex items-center justify-center text-brand-accent font-bold text-xs md:text-sm shadow-sm group-hover:bg-brand-accent group-hover:text-brand-blue transition-colors duration-500">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-lg md:text-xl font-heading font-bold mb-2 md:mb-3 group-hover:text-brand-accent transition-colors duration-300">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed px-2 transition-colors duration-300 group-hover:text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-16 md:mt-24"
        >
            <p className="text-xl md:text-3xl font-medium text-white/90 px-4 max-w-3xl mx-auto leading-relaxed">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 drop-shadow-xl">100% focados</span> no crescimento digital do seu negócio.
            </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;