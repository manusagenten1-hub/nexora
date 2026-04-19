import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_LINKS, getWhatsAppLink } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 transform-gpu ${
        isScrolled 
          ? 'bg-brand-blue/90 backdrop-blur-xl shadow-neon border-b border-brand-accent/10 py-2' 
          : 'bg-transparent py-2 md:py-3'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 text-white group">
            <img 
              src="https://i.ibb.co/PvzNPZDC/Chat-GPT-Image-18-de-abr-de-2026-12-24-13.png" 
              alt="Nexora Web Logo" 
              className="h-14 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_0_8px_rgba(0,212,255,0.5)]" 
            />
            <span className="text-2xl font-heading font-bold tracking-tight group-hover:text-brand-accent transition-colors duration-500">Nexora Web</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="relative text-gray-300 hover:text-white font-medium py-2 transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-brand-accent origin-right scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>
              </a>
            ))}
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-quiz-modal'))}
              className="relative overflow-hidden group bg-brand-accent/10 border border-brand-accent text-brand-accent px-6 py-2.5 rounded-full font-semibold transition-all duration-500 hover:text-brand-blue hover:shadow-neon"
            >
              <span className="absolute inset-0 w-full h-full bg-brand-accent rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] origin-center"></span>
              <span className="relative z-10">Falar com Consultor</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-brand-accent p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={{ clipPath: 'inset(0 0 0% 0)' }}
              exit={{ clipPath: 'inset(0 0 100% 0)' }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="md:hidden absolute top-full left-0 w-full bg-brand-blue/95 backdrop-blur-xl border-t border-brand-accent/20 shadow-xl max-h-[85vh] overflow-y-auto"
            >
              <div className="flex flex-col p-6 gap-6">
                {NAVIGATION_LINKS.map((link, i) => (
                  <motion.a 
                    key={link.name} 
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="text-gray-300 hover:text-brand-accent text-xl font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.button 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => {
                    setIsOpen(false);
                    window.dispatchEvent(new CustomEvent('open-quiz-modal'));
                  }}
                  className="bg-brand-accent text-center text-brand-blue py-4 rounded-xl font-bold shadow-neon mt-4 w-full"
                >
                  Começar Meu Projeto
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Header;