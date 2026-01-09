import { motion, useScroll, useTransform } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { useRef } from "react";

const faqs = [
  {
    question: "Quanto tempo dura uma sessão de terapia capilar?",
    answer: "A duração varia de acordo com o tratamento escolhido. Uma avaliação inicial leva cerca de 30 minutos, enquanto tratamentos completos podem durar de 1 a 3 horas, dependendo do protocolo personalizado para suas necessidades.",
  },
  {
    question: "Preciso fazer uma avaliação antes de iniciar o tratamento?",
    answer: "Sim! A avaliação é fundamental para entendermos as necessidades específicas do seu cabelo e couro cabeludo. Assim, podemos criar um protocolo personalizado que traga os melhores resultados para você.",
  },
  {
    question: "A progressiva VD Hair danifica os fios?",
    answer: "Não! A Progressiva VD Hair foi desenvolvida com uma fórmula exclusiva que alinha os fios sem agredir a estrutura capilar. Além de alisar, o tratamento também hidrata e fortalece os cabelos.",
  },
  {
    question: "Com que frequência devo fazer tratamentos capilares?",
    answer: "A frequência depende do seu tipo de cabelo e do tratamento realizado. Geralmente, recomendamos sessões de manutenção a cada 15-30 dias para manter os resultados. Na avaliação, definimos juntas o cronograma ideal.",
  },
  {
    question: "Os produtos utilizados são seguros?",
    answer: "Absolutamente! Utilizamos apenas produtos de alta qualidade, incluindo nossa linha exclusiva VD Hair, desenvolvida com ingredientes seguros e eficazes. Todos os produtos são testados dermatologicamente.",
  },
  {
    question: "Como faço para agendar uma avaliação?",
    answer: "Você pode agendar sua avaliação pelo nosso WhatsApp ou ligando para nossa clínica. Basta clicar no botão 'Agendar Avaliação' em qualquer lugar do site ou no ícone do WhatsApp que aparece na tela.",
  },
];

const FAQSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={sectionRef} id="faq" className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute -top-20 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        style={{ y: parallaxY }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-xs font-medium tracking-widest uppercase bg-primary/10 text-primary rounded-full">
            Dúvidas Frequentes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-4 sm:mb-6">
            Perguntas
            <span className="block text-gradient-gold">Frequentes</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg sm:text-xl">
            Tire suas dúvidas sobre nossos tratamentos e serviços.
            Estamos aqui para ajudar!
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <SpotlightCard
                key={index}
                className="rounded-xl"
                spotlightSize={500}
                borderGlow={false}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-soft transition-shadow"
                >
                  <AccordionTrigger className="text-left font-display text-lg sm:text-xl font-medium text-foreground hover:text-primary py-5 [&[data-state=open]]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-body text-base sm:text-lg pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </SpotlightCard>
            ))}
          </Accordion>
        </motion.div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10 sm:mt-12"
        >
          <p className="text-muted-foreground font-body text-base sm:text-lg">
            Ainda tem dúvidas?{" "}
            <a
              href="https://wa.me/5511999999999?text=Olá! Tenho uma dúvida sobre os tratamentos da VD Hair."
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Fale conosco pelo WhatsApp
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
