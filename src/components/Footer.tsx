import { motion } from "framer-motion";
import { Instagram, Phone, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-1"
          >
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-gradient-gold mb-3 sm:mb-4">
              VD Hair
            </h3>
            <p className="text-muted-foreground font-body text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
              Clínica de Terapia Capilar Integrativa. 
              Um espaço dedicado ao cuidado e restauração da beleza dos seus cabelos.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://instagram.com/vdhair_ofc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="tel:+5511999999999"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:contato@vdhair.com.br"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display text-lg sm:text-xl font-medium text-foreground mb-3 sm:mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {["Sobre", "Tratamentos", "Diferenciais", "Galeria", "Depoimentos"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors font-body text-sm sm:text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display text-lg sm:text-xl font-medium text-foreground mb-3 sm:mb-4">
              Contato
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0 text-primary" />
                <span className="font-body text-sm sm:text-base">
                  Rua Domingos Rosolia, 289<br />
                  Jardim São Jorge, São Paulo - SP
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-muted-foreground">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-primary" />
                <span className="font-body text-sm sm:text-base">@vdhair_ofc</span>
              </li>
            </ul>
          </motion.div>

          {/* Developer & Partner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-display text-lg sm:text-xl font-medium text-foreground mb-3 sm:mb-4">
              Desenvolvimento
            </h4>
            <div className="space-y-4 sm:space-y-6">
              {/* Developer */}
              <div className="p-3 sm:p-4 bg-secondary/50 rounded-lg">
                <p className="text-xs text-muted-foreground mb-1 sm:mb-2">Site desenvolvido por</p>
                <p className="font-medium text-foreground text-sm sm:text-base">[Seu Nome / Marca]</p>
                <div className="flex gap-2 mt-2">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Partner */}
              <div className="p-3 sm:p-4 bg-secondary/50 rounded-lg">
                <p className="text-xs text-muted-foreground mb-1 sm:mb-2">Parceiro de captação</p>
                <p className="font-medium text-foreground text-sm sm:text-base">[Nome do Parceiro]</p>
                <p className="text-xs text-muted-foreground mt-1">Responsável pelo agendamento</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
            <p className="text-muted-foreground font-body text-xs sm:text-sm">
              © {new Date().getFullYear()} VD Hair - Clínica de Terapia Capilar. Todos os direitos reservados.
            </p>
            <p className="text-muted-foreground font-body text-xs sm:text-sm flex items-center gap-1">
              Feito com <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-primary fill-primary" /> em São Paulo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
