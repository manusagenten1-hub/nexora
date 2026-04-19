import React from 'react';
import { CheckCircle } from 'lucide-react';
import Button from './Button';
import { motion } from 'motion/react';

const benefits = [
  "Estrutura estratégica de conversão",
  "Design moderno que transmite autoridade",
  "Comunicação direta e sem burocracia",
  "Entrega ágil e profissional",
  "Hospedagem e domínio inclusos",
  "Suporte dedicado após a entrega"
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
          
          {/* Content Side */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-brand-accent font-bold tracking-wider uppercase text-xs md:text-sm mb-2 block">Vantagens</span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-blue mb-6 md:mb-8 leading-tight">
                Sites pensados para vender, não apenas para <span className="text-brand-accent drop-shadow-[0_0_3px_rgba(0,212,255,0.5)]">"existir"</span>.
              </h2>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              className="space-y-3 md:space-y-4 mb-8 md:mb-10"
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
                  }}
                  key={index} 
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-brand-gray/30 hover:bg-brand-gray/60 transition-colors border border-transparent hover:border-brand-accent/20 group cursor-default"
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-brand-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <p className="text-brand-blue font-medium text-base md:text-lg">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="block"
            >
                <Button variant="primary" icon="arrow" fullWidth={true} className="md:w-auto">
                    Quero meu site estratégico
                </Button>
            </motion.div>
          </div>

          {/* Visual Side */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <motion.div 
              initial={{ clipPath: "inset(0 0 100% 0)", scale: 0.8 }}
              whileInView={{ clipPath: "inset(0 0 0% 0)", scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              className="relative w-full max-w-sm md:max-w-lg aspect-square flex items-center justify-center p-4"
            >
              {/* Decorative blobs behind */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-blue/20 to-brand-accent/20 rounded-full blur-3xl -z-10"
              ></motion.div>

              {/* Main Card */}
              <div className="bg-white p-8 md:p-14 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.2)] border border-gray-100 text-center relative z-10 w-full group overflow-hidden">
                  <motion.div 
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <h3 className="font-heading font-black text-transparent bg-clip-text bg-gradient-to-br from-brand-blue to-blue-800 text-6xl md:text-9xl mb-3 md:mb-4 tracking-tighter drop-shadow-sm group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]">
                      100%
                    </h3>
                  </motion.div>
                  <motion.div 
                     initial={{ scaleX: 0 }}
                     whileInView={{ scaleX: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 1, delay: 0.8, ease: "anticipate" }}
                     className="h-1.5 w-12 md:w-16 bg-brand-accent mx-auto rounded-full mb-4 md:mb-6 shadow-neon group-hover:w-32 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] origin-center"
                  ></motion.div>
                  <motion.p 
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 1, delay: 1 }}
                     className="text-brand-text text-lg md:text-2xl font-medium leading-relaxed group-hover:text-brand-blue transition-colors duration-300"
                  >
                    Foco absoluto no resultado e expansão do seu negócio.
                  </motion.p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;