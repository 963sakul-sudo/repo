import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  const handleScrollAndNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-card text-foreground py-16 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10 text-center md:text-left">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif tracking-wider mb-4 cursor-pointer" onClick={() => handleScrollAndNavigate('/')}>Luxtree</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Dostarczamy najpiękniejsze, naturalne choinki prosto do Twojego domu. Jakość i świeżość gwarantowana!
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold uppercase tracking-wider mb-4 text-muted-foreground">Kontakt</h4>
            <div className="space-y-3">
              <a href="mailto:kontakt@luxtree.pl" className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-5 h-5" />
                <span className="text-sm">kontakt@luxtree.pl</span>
              </a>
              <a href="tel:+48123456789" className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-5 h-5" />
                <span className="text-sm">+48 123 456 789</span>
              </a>
              <div className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span className="text-sm">Warszawa, Polska</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold uppercase tracking-wider mb-4 text-muted-foreground">Szybkie Linki</h4>
            <div className="flex flex-col items-center md:items-start space-y-3">
              <button
                onClick={() => handleScrollAndNavigate('/')}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Strona główna
              </button>
              <button
                onClick={() => handleScrollAndNavigate('/zamow')}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Zamów
              </button>
              <button
                onClick={() => handleScrollAndNavigate('/kontakt')}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Kontakt
              </button>
              <div className="flex gap-4 pt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary hover:bg-border rounded-full flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary hover:bg-border rounded-full flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="border-t border-border pt-8 text-center"
        >
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Luxtree. Wszystkie prawa zastrzeżone.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;