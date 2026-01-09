import { motion } from "framer-motion";
import { Heart, Award, Sparkles } from "lucide-react";
import clinicInterior from "@/assets/clinic-interior.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-24 bg-gradient-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-medium">
              <img
                src={clinicInterior}
                alt="Interior da clínica VD Hair"
                loading="lazy"
                className="w-full h-64 sm:h-80 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-6 bg-card p-4 sm:p-6 rounded-xl shadow-medium border border-border"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display text-xl sm:text-2xl font-semibold text-foreground">+4 Anos</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">de Excelência</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-4 py-2 mb-4 text-xs font-medium tracking-widest uppercase bg-primary/10 text-primary rounded-full">
              Sobre Nós
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight">
              Vera Dias
              <span className="block text-gradient-gold">Terapeuta Capilar</span>
            </h2>
            <div className="space-y-4 sm:space-y-6 text-muted-foreground font-body text-lg sm:text-xl leading-relaxed">
              <p>
                <span className="text-foreground font-medium">"Um espaço que cuida de você!"</span> — 
                Este é o princípio que guia a VD Hair desde sua fundação. Mais que um salão, 
                somos uma clínica de terapia capilar integrativa dedicada à restauração da 
                saúde e beleza dos seus cabelos.
              </p>
              <p>
                Com mais de 4 anos de experiência, Vera Dias construiu um legado de 
                transformações capilares. Sua formação especializada e dedicação ao 
                cuidado personalizado garantem que cada cliente receba um tratamento 
                único, pensado exclusivamente para suas necessidades.
              </p>
              <p className="italic text-foreground">
                "Se você não cuidar de você, uma hora não cuidará de mais ninguém. 
                Máquina sem manutenção para!"
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
              {[
                { icon: Heart, label: "Cuidado Humanizado" },
                { icon: Award, label: "Excelência Técnica" },
                { icon: Sparkles, label: "Resultados Reais" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 sm:p-4 bg-card rounded-lg border border-border"
                >
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-base font-medium text-foreground">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
