import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Droplets, Scissors, Eye, Leaf, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TiltCard } from "@/components/ui/TiltCard";
import { useRef } from "react";

const treatments = [
  {
    icon: Sparkles,
    title: "Terapia Capilar Integrativa",
    description: "Tratamento completo que une técnicas avançadas para restaurar a saúde do couro cabeludo e dos fios.",
    benefits: ["Fortalecimento", "Crescimento", "Brilho intenso"],
  },
  {
    icon: Droplets,
    title: "Reabilitação Capilar",
    description: "Protocolo intensivo para cabelos danificados, devolvendo hidratação profunda, leveza e brilho excepcional.",
    benefits: ["Hidratação profunda", "Reconstrução", "Maciez"],
  },
  {
    icon: Zap,
    title: "Progressiva VD Hair",
    description: "Fórmula exclusiva da marca que alinha os fios com brilho, movimento e naturalidade incomparáveis.",
    benefits: ["Alinhamento", "Movimento natural", "Durabilidade"],
  },
  {
    icon: Leaf,
    title: "Esfoliação Capilar",
    description: "Limpeza profunda do couro cabeludo, removendo impurezas e preparando os fios para tratamentos intensivos.",
    benefits: ["Purificação", "Oxigenação", "Renovação"],
  },
  {
    icon: Eye,
    title: "Design de Sobrancelha",
    description: "Técnica precisa que valoriza seu olhar, harmonizando as sobrancelhas com seus traços faciais únicos.",
    benefits: ["Harmonização", "Precisão", "Naturalidade"],
  },
  {
    icon: Scissors,
    title: "Micropigmentação",
    description: "Arte aplicada à beleza, criando definição e preenchimento natural para sobrancelhas perfeitas.",
    benefits: ["Definição", "Preenchimento", "Longa duração"],
  },
];

const TreatmentsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={sectionRef} id="tratamentos" className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        className="absolute -top-20 -right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        style={{ y: backgroundY }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none"
        style={{ y: backgroundY }}
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
            Nossos Tratamentos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-4 sm:mb-6">
            Transforme Seus Cabelos
            <span className="block text-gradient-gold">Com Expertise e Zelo</span>
          </h2>
          <p className="text-muted-foreground font-body text-base sm:text-lg">
            Cada tratamento é personalizado para atender às necessidades únicas dos seus fios, 
            garantindo resultados surpreendentes e duradouros.
          </p>
        </motion.div>

        {/* Treatment Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <TiltCard
                maxTilt={6}
                spotlight={true}
                glare={true}
                className="h-full rounded-2xl"
              >
                <Card className="h-full bg-card hover:shadow-medium transition-all duration-300 border-border group overflow-hidden">
                  <CardContent className="p-5 sm:p-6 lg:p-8">
                    {/* Icon */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <treatment.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-display text-xl sm:text-2xl font-medium text-foreground mb-2 sm:mb-3">
                      {treatment.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                      {treatment.description}
                    </p>

                    {/* Benefits */}
                    <div className="flex flex-wrap gap-2">
                      {treatment.benefits.map((benefit) => (
                        <span
                          key={benefit}
                          className="inline-block px-2 sm:px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
