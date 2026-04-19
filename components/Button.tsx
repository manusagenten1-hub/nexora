import React from 'react';
import { getWhatsAppLink } from '../constants';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import Magnetic from './Magnetic';
import { cn } from '../lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'outline';
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
  icon?: 'whatsapp' | 'arrow' | 'none';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  fullWidth = false,
  onClick,
  icon = 'none'
}) => {
  const baseStyles = "relative overflow-hidden group inline-flex items-center justify-center gap-1.5 md:gap-2 px-5 py-3 md:px-8 md:py-4 rounded-full font-heading font-semibold transition-all duration-300";
  
  const variants = {
    primary: "bg-brand-accent text-brand-blue",
    success: "bg-brand-green text-white",
    outline: "border-2 border-brand-accent text-brand-accent"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.dispatchEvent(new CustomEvent('open-quiz-modal'));
    }
  };

  const buttonContent = (
    <button 
      onClick={handleClick}
      className={cn(baseStyles, variants[variant], widthClass, className)}
    >
      {/* Background Hover Effect */}
      <span className="absolute inset-0 w-full h-full bg-white rounded-full scale-0 group-hover:scale-110 group-hover:opacity-100 opacity-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" origin-center="true"></span>
      
      {/* Content wrapper to stay above background */}
      <span className="relative z-10 flex items-center gap-2 group-hover:text-brand-blue transition-colors duration-300">
        {icon === 'whatsapp' && (
          <div className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
            <MessageCircle className="w-5 h-5" />
          </div>
        )}
        <span>{children}</span>
        {icon === 'arrow' && (
          <div className="transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight className="w-5 h-5" />
          </div>
        )}
      </span>
    </button>
  );

  return (
    <Magnetic intensity={0.2}>
      {buttonContent}
    </Magnetic>
  );
};

export default Button;