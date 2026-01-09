import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, ChevronDown } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import heroBg from "@/assets/hero-bg.jpg";
import { useRef } from "react";

const WHATSAPP_NUMBER = "5511999999999";

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleScheduleClick = () => {
    const message = "Olá! Gostaria de agendar uma avaliação na VD Hair.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleContactClick = () => {
    const message = "Olá! Gostaria de mais informações sobre os tratamentos da VD Hair.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const scrollToAbout = () => {
    document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: `url(${heroBg})`,
          y: backgroundY,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </motion.div>

      {/* Content - centered with flex-grow */}
      <motion.div
        className="relative z-10 flex-grow flex items-center"
        style={{ y: contentY, opacity }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 mb-6 text-xs sm:text-sm font-medium tracking-widest uppercase bg-primary/30 text-white rounded-full border border-primary/50"
            >
              Clínica de Terapia Capilar Integrativa
            </motion.span>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight mb-6"
            >
              Restaure a Beleza
              <span className="block text-gradient-gold mt-2">e a Confiança</span>
              <span className="block text-white">dos Seus Cabelos</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-body text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed px-4"
            >
              Um espaço dedicado ao cuidado integral dos seus fios.
              Tratamentos personalizados que devolvem vida, brilho e saúde ao seu cabelo.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
            >
              <MagneticButton strength={0.2} as="div" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="hero"
                  onClick={handleScheduleClick}
                  className="w-full font-body font-medium text-lg px-8 py-6 rounded-xl"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Avaliação
                </Button>
              </MagneticButton>
              <MagneticButton strength={0.2} as="div" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  onClick={handleContactClick}
                  className="w-full font-body font-medium text-lg px-8 py-6 rounded-xl border-2 border-white/60 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Fale Conosco
                </Button>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - positioned at bottom, outside content container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="relative z-10 pb-8 flex justify-center"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white/80 transition-colors cursor-pointer"
          aria-label="Rolar para próxima seção"
        >
          <span className="text-xs font-medium tracking-wider uppercase text-white/60">Saiba mais</span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
