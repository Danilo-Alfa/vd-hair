import { motion } from "framer-motion";
import { useState } from "react";
import treatment1 from "@/assets/treatment-1.jpg";
import treatment2 from "@/assets/treatment-2.jpg";
import treatment3 from "@/assets/treatment-3.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const galleryImages = [
  { src: treatment1, alt: "Tratamento capilar em andamento", category: "Tratamentos" },
  { src: treatment2, alt: "Relaxamento e cuidado no spa", category: "Ambiente" },
  { src: treatment3, alt: "Resultado de transformação capilar", category: "Resultados" },
  { src: clinicInterior, alt: "Interior da clínica VD Hair", category: "Espaço" },
  { src: heroBg, alt: "Cabelos saudáveis e brilhantes", category: "Resultados" },
  { src: treatment1, alt: "Cuidado profissional", category: "Tratamentos" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-16 sm:py-20 lg:py-24 bg-background">
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
            Nossa Galeria
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-4 sm:mb-6">
            Ambiente e
            <span className="block text-gradient-gold">Transformações</span>
          </h2>
          <p className="text-muted-foreground font-body text-base sm:text-lg">
            Conheça nosso espaço acolhedor e veja algumas das transformações 
            que realizamos com zelo e profissionalismo.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer group ${
                index === 0 || index === 4 ? "row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 || index === 4 ? "h-48 sm:h-64 lg:h-full" : "h-40 sm:h-48 lg:h-64"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium bg-primary text-primary-foreground rounded-full">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-xs sm:text-sm mt-6 sm:mt-8 italic"
        >
          * As imagens podem ser facilmente substituídas por fotos reais da clínica e resultados de tratamentos.
        </motion.p>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-charcoal/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={selectedImage}
            alt="Imagem ampliada"
            className="max-w-full max-h-[90vh] rounded-xl object-contain"
          />
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;
