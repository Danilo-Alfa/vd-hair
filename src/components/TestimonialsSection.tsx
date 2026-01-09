import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useCallback, useRef } from "react";
import { TiltCard } from "@/components/ui/TiltCard";

const testimonials = [
  {
    name: "Ana Paula S.",
    role: "Cliente há 2 anos",
    content: "A Vera transformou meu cabelo! Depois de anos lutando com a queda, finalmente tenho fios saudáveis e volumosos. O atendimento é acolhedor e profissional.",
    rating: 5,
  },
  {
    name: "Mariana L.",
    role: "Cliente há 1 ano",
    content: "A progressiva VD Hair é incrível! Meus fios ficaram alinhados, com muito brilho e movimento natural. Recomendo de olhos fechados.",
    rating: 5,
  },
  {
    name: "Carla M.",
    role: "Cliente há 3 anos",
    content: "O ambiente da clínica é maravilhoso, você se sente cuidada desde o momento que entra. A terapia capilar mudou a saúde dos meus cabelos completamente.",
    rating: 5,
  },
  {
    name: "Fernanda R.",
    role: "Cliente há 6 meses",
    content: "Estava com o cabelo muito danificado por químicas anteriores. A reabilitação capilar da VD Hair salvou meus fios! Estão macios e brilhantes como nunca.",
    rating: 5,
  },
  {
    name: "Juliana P.",
    role: "Cliente há 1 ano",
    content: "Fiz micropigmentação de sobrancelhas e ficou perfeito! Resultado super natural e harmonioso com meu rosto. Amei o profissionalismo da Vera.",
    rating: 5,
  },
  {
    name: "Beatriz S.",
    role: "Cliente há 4 anos",
    content: "Sou cliente fiel há anos! A Vera conhece meu cabelo melhor que eu. Cada visita é um momento de autocuidado que faço questão de manter na minha rotina.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  // Number of visible cards based on screen size
  const getVisibleCards = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }
    return 3;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCards);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);

  return (
    <section ref={sectionRef} id="depoimentos" className="py-16 sm:py-20 lg:py-24 bg-gradient-warm relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute -top-10 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"
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
            Depoimentos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-4 sm:mb-6">
            O Que Nossas Clientes
            <span className="block text-gradient-gold">Dizem Sobre Nós</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg sm:text-xl">
            A satisfação das nossas clientes é nossa maior recompensa.
            Conheça algumas histórias de transformação.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-card border border-border rounded-full shadow-soft flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-card border border-border rounded-full shadow-soft flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden mx-2 sm:mx-10">
            <motion.div
              className="flex gap-4 sm:gap-6 lg:gap-8"
              animate={{ x: `-${currentIndex * (100 / visibleCards)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / visibleCards}% - ${(visibleCards - 1) * 16 / visibleCards}px)` }}
                >
                  <TiltCard maxTilt={5} spotlight={true} glare={false} className="h-full rounded-xl">
                    <Card className="h-full bg-card hover:shadow-medium transition-all duration-300 border-border">
                      <CardContent className="p-4 sm:p-6 lg:p-8">
                      {/* Quote Icon */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                        <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 mb-3 sm:mb-4 justify-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-foreground font-body text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 line-clamp-4 text-center">
                        "{testimonial.content}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-3 sm:gap-4 justify-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                          <span className="text-primary-foreground font-medium text-base sm:text-lg">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div className="text-left">
                          <p className="font-medium text-foreground text-base sm:text-lg">{testimonial.name}</p>
                          <p className="text-muted-foreground text-xs sm:text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                    </Card>
                  </TiltCard>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-6 sm:w-8"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
