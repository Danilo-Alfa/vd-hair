import { motion, useScroll, useTransform } from "framer-motion";
import { Check, Shield, Users, Star, Clock, Leaf } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { useRef } from "react";

const reasons = [
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Cada cliente é único. Desenvolvemos protocolos específicos para suas necessidades capilares individuais.",
  },
  {
    icon: Star,
    title: "Produtos Exclusivos",
    description: "Linha própria VD Hair com fórmulas desenvolvidas para resultados excepcionais e duradouros.",
  },
  {
    icon: Shield,
    title: "Ambiente Seguro",
    description: "Espaço acolhedor com todos os protocolos de higiene e segurança para seu conforto total.",
  },
  {
    icon: Clock,
    title: "Métodos Modernos",
    description: "Técnicas atualizadas e equipamentos de última geração para tratamentos eficientes.",
  },
  {
    icon: Leaf,
    title: "Abordagem Integrativa",
    description: "Tratamos a causa, não apenas os sintomas. Visão holística da saúde capilar.",
  },
  {
    icon: Check,
    title: "Resultados Comprovados",
    description: "Anos de transformações documentadas e clientes satisfeitas são nossa maior prova.",
  },
];

const WhyChooseSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={sectionRef} id="diferenciais" className="py-16 sm:py-20 lg:py-24 bg-gradient-warm relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        style={{ y: parallaxY }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-80 h-80 bg-primary/3 rounded-full blur-3xl pointer-events-none"
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
            Por Que Nos Escolher
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-4 sm:mb-6">
            Excelência em
            <span className="block text-gradient-gold">Cada Detalhe</span>
          </h2>
          <p className="text-muted-foreground font-body text-base sm:text-lg">
            Nosso compromisso é oferecer uma experiência única de cuidado e transformação, 
            onde cada detalhe é pensado para você.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <SpotlightCard
                className="bg-card p-5 sm:p-6 lg:p-8 rounded-2xl border border-border hover:shadow-medium transition-all duration-300 h-full"
                spotlightSize={350}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-medium text-foreground mb-1 sm:mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm sm:text-base leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
