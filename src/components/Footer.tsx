import { motion } from "framer-motion";
import { Instagram, Phone, Mail, MapPin, Heart } from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999";
const INSTAGRAM_URL = "https://instagram.com/vdhair_ofc";
const EMAIL = "contato@vdhair.com.br";

const Footer = () => {
  const handlePhoneClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${EMAIL}`;
  };

  const handleMapClick = () => {
    window.open("https://www.google.com/maps/search/?api=1&query=Rua+Domingos+Rosolia+289+Jardim+São+Jorge+São+Paulo+SP", "_blank");
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

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
            <p className="text-muted-foreground font-body text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
              Clínica de Terapia Capilar Integrativa.
              Um espaço dedicado ao cuidado e restauração da beleza dos seus cabelos.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Seguir no Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <button
                onClick={handlePhoneClick}
                className="w-9 h-9 sm:w-10 sm:h-10 bg-whatsapp/20 rounded-full flex items-center justify-center hover:bg-whatsapp hover:text-white transition-all duration-300 text-whatsapp"
                aria-label="Entrar em contato pelo WhatsApp"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={handleEmailClick}
                className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Enviar email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
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
              {[
                { label: "Sobre", href: "#sobre" },
                { label: "Tratamentos", href: "#tratamentos" },
                { label: "Diferenciais", href: "#diferenciais" },
                { label: "Galeria", href: "#galeria" },
                { label: "Depoimentos", href: "#depoimentos" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors font-body text-base sm:text-lg"
                  >
                    {link.label}
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
              <li>
                <button
                  onClick={handleMapClick}
                  className="flex items-start gap-2 sm:gap-3 text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0 text-primary" />
                  <span className="font-body text-base sm:text-lg">
                    Rua Domingos Rosolia, 289<br />
                    Jardim São Jorge, São Paulo - SP
                  </span>
                </button>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-primary" />
                  <span className="font-body text-base sm:text-lg">@vdhair_ofc</span>
                </a>
              </li>
              <li>
                <button
                  onClick={handlePhoneClick}
                  className="flex items-center gap-2 sm:gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-whatsapp" />
                  <span className="font-body text-base sm:text-lg">WhatsApp</span>
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-display text-lg sm:text-xl font-medium text-foreground mb-3 sm:mb-4">
              Horário de Atendimento
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-muted-foreground font-body text-base sm:text-lg">
              <li className="flex justify-between">
                <span>Segunda a Sexta</span>
                <span className="text-foreground">9h - 19h</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado</span>
                <span className="text-foreground">9h - 17h</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span className="text-foreground">Fechado</span>
              </li>
            </ul>

            {/* CTA */}
            <button
              onClick={handlePhoneClick}
              className="mt-4 sm:mt-6 w-full py-3 px-4 bg-gradient-gold text-primary-foreground rounded-lg font-body font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Agendar Avaliação
            </button>
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
