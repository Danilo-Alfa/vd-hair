import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, MapPin } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useRef } from "react";

const WHATSAPP_NUMBER = "5511999999999";

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const handleScheduleClick = () => {
    const message = "Olá! Gostaria de agendar uma avaliação na VD Hair.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleWhatsAppClick = () => {
    const message = "Olá! Vim pelo site e gostaria de saber mais sobre os tratamentos.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleMapClick = () => {
    window.open("https://www.google.com/maps/search/?api=1&query=Rua+Domingos+Rosolia+289+Jardim+São+Jorge+São+Paulo+SP", "_blank");
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-cta-section relative overflow-hidden">
      {/* Background Pattern with Parallax */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-primary rounded-full blur-3xl"
          style={{ y: parallaxY }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary rounded-full blur-3xl"
          style={{ y: parallaxY }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-white/90 mb-4 sm:mb-6 leading-tight">
            Chegou a Hora de
            <span className="block text-gradient-gold">Cuidar de Você</span>
          </h2>
          <p className="text-white/70 font-body text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-10 leading-relaxed px-4">
            Há quanto tempo você não tira um tempo para si? Agende sua avaliação
            e descubra como podemos transformar seus cabelos e restaurar sua autoestima.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 sm:mb-12 px-4">
            <MagneticButton strength={0.2} as="div" className="w-full sm:w-auto">
              <Button
                size="lg"
                onClick={handleScheduleClick}
                className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90 transition-all duration-300 shadow-gold font-body font-medium text-lg px-8 py-6"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Avaliação
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.2} as="div" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 border-primary-foreground/30 text-white hover:bg-green-800 hover:text-white font-body font-medium text-lg px-8 py-6"
              >
                <MessageCircle className="mr-1 h-5 w-5" />
                WhatsApp
              </Button>
            </MagneticButton>
          </div>

          {/* Location */}
          <motion.button
            onClick={handleMapClick}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-primary-foreground/70 hover:text-primary-foreground/90 transition-colors px-4 mx-auto group"
          >
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-white/60 group-hover:text-white/80 transition-colors" />
            <span className="font-body text-white/60 hover:text-white/80 transition-colors sm:text-lg text-center underline-offset-4 group-hover:underline">
              Rua Domingos Rosolia, 289 - Jardim São Jorge, São Paulo - SP
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
