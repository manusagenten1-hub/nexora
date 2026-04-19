import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: 'Quanto tempo leva para o site ficar pronto?',
    answer: (
      <p>O prazo varia de acordo com a complexidade do projeto, mas a maioria dos sites é entregue entre <strong>3 a 10 dias úteis</strong>. Trabalhamos com agilidade sem abrir mão da qualidade e da estratégia.</p>
    )
  },
  {
    question: 'Eu preciso entender de tecnologia para usar o site ou dashboard?',
    answer: (
      <p><strong>Não.</strong> Tudo é desenvolvido para ser simples, intuitivo e fácil de usar, mesmo para quem não tem conhecimento técnico. Você terá total controle do seu negócio sem complicação.</p>
    )
  },
  {
    question: 'O site realmente ajuda a conseguir mais clientes?',
    answer: (
      <p><strong>Sim.</strong> Diferente de sites comuns, nossos projetos são construídos com estratégia de conversão, copy persuasiva e estrutura otimizada para transformar visitantes curiosos em contatos e vendas.</p>
    )
  },
  {
    question: 'O que está incluso no serviço?',
    answer: (
      <>
        <p className="mb-3">Dependendo da sua escolha, você recebe um projeto completo:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Site profissional personalizado com a sua marca</li>
          <li>Copywriting Persuasivo</li>
          <li>Integrações (WhatsApp, formulários, pedidos, etc.)</li>
          <li>Otimização de performance e SEO</li>
          <li>Domínio incluso</li>
          <li>Suporte após a entrega</li>
          <li>Design e hierarquia visual premium</li>
        </ul>
      </>
    )
  },
  {
    question: 'Posso pedir alterações depois que o site estiver pronto?',
    answer: (
      <p><strong>Sim.</strong> Fazemos ajustes finos após a entrega para garantir que tudo esteja alinhado com seu negócio. Além disso, oferecemos suporte para te ajudar no que precisar.</p>
    )
  },
  {
    question: 'Como funciona o pagamento?',
    answer: (
      <p>O pagamento é facilitado e pode ser ajustado conforme o projeto. Nosso objetivo é tornar o investimento acessível, sem comprometer a qualidade da entrega.</p>
    )
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 pt-20 md:py-24 pb-48 md:pb-64 bg-brand-gray relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <span className="text-brand-accent font-bold tracking-wider uppercase text-xs md:text-sm mb-2 block">FAQ</span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-blue mb-4 md:mb-6">
            Dúvidas? Veja algumas perguntas frequentes
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-brand-accent/30 transition-colors shadow-sm"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
              >
                <h3 className="font-heading font-bold text-brand-blue text-base md:text-lg group-hover:text-brand-accent transition-colors pr-4">
                  {faq.question}
                </h3>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${openIndex === index ? 'bg-brand-accent text-white rotate-180' : 'bg-brand-gray text-brand-blue group-hover:bg-brand-accent/10 group-hover:text-brand-accent'}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 md:px-8 md:pb-6 text-brand-text text-sm md:text-base border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
