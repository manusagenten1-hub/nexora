import React, { useRef } from 'react';
import Button from './Button';
import { CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 1.2 // Synchronizes with Preloader exit
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: "150%", rotate: 6 },
    visible: { 
      opacity: 1, 
      y: "0%", 
      rotate: 0,
      transition: { 
        type: 'spring', 
        damping: 20, 
        stiffness: 100, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  const phraseVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 1.5 // Added delay so it triggers after page load
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { 
        type: 'spring', 
        damping: 12, 
        stiffness: 200 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  return (
    <section ref={containerRef} id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 bg-brand-blue overflow-hidden">
      
      {/* Background Gradients/Glows with Parallax */}
      <motion.div 
        style={{ y: blob1Y }}
        className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-accent/10 rounded-full blur-[60px] md:blur-[100px] -translate-y-1/2 pointer-events-none"
      />
      <motion.div 
        style={{ y: blob2Y }}
        className="absolute bottom-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-brand-accent/5 rounded-full blur-[80px] md:blur-[120px] translate-y-1/3 pointer-events-none"
      />

      {/* Background Character Image */}
      <motion.div 
        style={{ y: blob1Y }}
        className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none opacity-40"
      >
        <div className="relative w-full max-w-[900px] h-full flex items-end md:items-center justify-center md:justify-end">
          <img 
            src="https://i.ibb.co/bM4PhY8q/Chat-GPT-Image-18-de-abr-de-2026-17-54-28-removebg-preview.png" 
            alt="Personagem Nexora"
            className="w-[120%] sm:w-[80%] md:w-[90%] h-auto max-h-[90vh] object-contain object-bottom md:object-center translate-y-12 md:translate-y-0 translate-x-0 md:-translate-x-12"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-5xl mx-auto text-center"
        >
          
          {/* Content */}
          <div className="w-full">
            <h1 className="flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-3 mb-4 md:mb-6">
              {["Sistemas", "Digitais", "que", "Vendem", "por", "Você:"].map((word, i) => (
                <span key={i} className="overflow-hidden inline-flex pb-1 sm:pb-3">
                  <motion.span variants={wordVariants} className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-[1.1] drop-shadow-lg origin-bottom-left">
                    {word}
                  </motion.span>
                </span>
              ))}
              <span className="overflow-hidden flex flex-wrap pb-1 sm:pb-3 w-full justify-center mt-1 sm:mt-2 text-3xl sm:text-4xl md:text-5xl font-heading font-bold leading-[1.2] text-brand-accent drop-shadow-[0_0_15px_rgba(0,212,255,0.6)] px-2">
                <motion.span variants={phraseVariants} initial="hidden" animate="visible" className="flex flex-wrap justify-center gap-x-2 sm:gap-x-3" style={{ perspective: "1000px" }}>
                  {"Estruturas de Elite com Dashboard Exclusivo e Copy de Alta Conversão".split(' ').map((word, index) => (
                    <motion.span key={index} variants={letterVariants} className="inline-block origin-bottom">
                      {word}
                    </motion.span>
                  ))}
                </motion.span>
              </span>
            </h1>
            
            <motion.h2 variants={itemVariants} className="text-lg md:text-2xl text-white/90 font-medium mb-4 px-2 max-w-4xl mx-auto">
              Desenvolvemos sites estratégicos para empresas, infoprodutores e profissionais autônomos.
            </motion.h2>

            <motion.p variants={itemVariants} className="text-sm md:text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed px-2">
              Tenha o controle total do seu negócio com um dashboard administrativo personalizado e páginas focadas em lucro real.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-10 md:mb-12 w-full sm:w-auto px-4 sm:px-0">
              <Button variant="primary" icon="arrow" onClick={() => window.dispatchEvent(new CustomEvent('open-quiz-modal'))} className="w-full sm:w-auto text-base md:text-lg px-6 py-3 md:px-8 md:py-4">
                Começar Meu Projeto
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 text-gray-400 text-xs md:text-sm border-t border-brand-accent/20 pt-6 md:pt-8 max-w-4xl mx-auto w-fit sm:w-full">
              {[
                "Entregas rápidas",
                "Suporte humanizado",
                "Pagamento facilitado",
                "Pequenos e grandes negócios"
              ].map((text, i) => (
                <div key={i} className="flex items-center justify-start gap-2">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-brand-accent flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;