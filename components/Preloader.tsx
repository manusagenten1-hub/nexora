import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Preloader: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Obtenha controle de scroll para não mexer enquanto a tela entra
        document.body.style.overflow = 'hidden';
        
        const timer = setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = '';
        }, 1200);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="lusion-preloader"
                    className="fixed inset-0 z-[100] flex flex-col justify-center items-center bg-[#020018] pointer-events-none"
                    initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
                    exit={{ 
                        clipPath: "inset(0% 0% 100% 0%)",
                        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
                    }}
                >
                    <div className="overflow-hidden relative z-10 flex items-center gap-4">
                        <motion.img 
                            initial={{ y: "100%", opacity: 0, rotate: 15 }}
                            animate={{ y: "0%", opacity: 1, rotate: 0 }}
                            exit={{ y: "-100%", opacity: 0, rotate: -15, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            src="https://i.ibb.co/PvzNPZDC/Chat-GPT-Image-18-de-abr-de-2026-12-24-13.png" 
                            className="h-16 w-auto md:h-24 drop-shadow-[0_0_15px_rgba(0,212,255,0.8)] object-contain" 
                            alt="Nexora Logo" 
                        />
                        <div className="overflow-hidden">
                            <motion.span 
                                initial={{ y: "150%", opacity: 0, rotate: 10 }}
                                animate={{ y: "0%", opacity: 1, rotate: 0 }}
                                exit={{ y: "-100%", opacity: 0, rotate: -10, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.05 } }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                                className="block text-3xl md:text-5xl font-heading font-medium text-white tracking-tight origin-left"
                            >
                                Nexora Web
                            </motion.span>
                        </div>
                    </div>
                    
                    {/* Linha Fina de Progresso Estilizada */}
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.2, ease: "linear" }}
                        className="absolute bottom-0 left-0 w-full h-1 bg-brand-accent origin-left"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
