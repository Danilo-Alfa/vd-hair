import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, MapPin } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-primary-foreground mb-4 sm:mb-6 leading-tight">
            Chegou a Hora de
            <span className="block text-gradient-gold">Cuidar de Você</span>
          </h2>
          <p className="text-primary-foreground/80 font-body text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 leading-relaxed px-4">
            Há quanto tempo você não tira um tempo para si? Agende sua avaliação 
            e descubra como podemos transformar seus cabelos e restaurar sua autoestima.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 sm:mb-12 px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-gold text-primary-foreground hover:opacity-90 transition-all duration-300 shadow-gold font-body font-medium text-base px-8 py-6"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Avaliação
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-body font-medium text-base px-8 py-6"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-primary-foreground/70 px-4"
          >
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="font-body text-sm sm:text-base text-center">
              Rua Domingos Rosolia, 289 - Jardim São Jorge, São Paulo - SP
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
