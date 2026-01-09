import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-16 sm:py-20 lg:py-24 bg-gradient-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
          <p className="text-muted-foreground font-body text-base sm:text-lg">
            A satisfação das nossas clientes é nossa maior recompensa. 
            Conheça algumas histórias de transformação.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <Card className="h-full bg-card hover:shadow-medium transition-all duration-300 border-border">
                <CardContent className="p-5 sm:p-6 lg:p-8">
                  {/* Quote Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground font-body text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-medium text-base sm:text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm sm:text-base">{testimonial.name}</p>
                      <p className="text-muted-foreground text-xs sm:text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
