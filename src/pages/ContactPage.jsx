import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      toast({
        title: 'Wiadomość wysłana! 🚀',
        description: 'Dziękujemy za kontakt. Odpowiemy jak najszybciej.',
      });
    }, 1500);
  };

  const contactInfo = [
    { icon: Mail, text: 'kontakt@luxtree.pl', href: 'mailto:kontakt@luxtree.pl' },
    { icon: Phone, text: '+48 123 456 789', href: 'tel:+48123456789' },
    { icon: MapPin, text: 'ul. Świąteczna 1, 00-001 Warszawa', href: '#' },
  ];

  return (
    <>
      <Helmet>
        <title>Kontakt - Luxtree</title>
        <meta name="description" content="Skontaktuj się z Luxtree. Znajdziesz tu nasz adres, e-mail, telefon oraz formularz kontaktowy." />
      </Helmet>

      <div className="min-h-screen bg-background pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Skontaktuj się z nami</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Masz pytania lub specjalne życzenia? Jesteśmy tu, by pomóc!</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card rounded-xl shadow-2xl shadow-black/30 border border-border p-8 md:p-10"
            >
              <h2 className="text-2xl font-serif text-foreground mb-6">Napisz do nas</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Imię i nazwisko</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Twoje imię i nazwisko" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="Twój adres email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Wiadomość</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Jak możemy Ci pomóc?" rows={4} />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-4 text-base rounded-full transition-transform">
                    {isSubmitting ? (
                      <>
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-current border-t-transparent rounded-full mr-2" />
                        Wysyłanie...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Wyślij wiadomość
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8 mt-12 md:mt-0"
            >
              <h2 className="text-2xl font-serif text-foreground mb-6">Nasze dane</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="bg-card text-accent p-4 rounded-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors shadow-sm border border-border">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-lg text-foreground">{item.text}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
               <div className="mt-10 pt-8 border-t border-border">
                <h3 className="text-xl font-serif text-foreground mb-4">Godziny otwarcia</h3>
                <p className="text-muted-foreground">Poniedziałek - Piątek: 9:00 - 18:00</p>
                <p className="text-muted-foreground">Sobota: 10:00 - 15:00</p>
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;