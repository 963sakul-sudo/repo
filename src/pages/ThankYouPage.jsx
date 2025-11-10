import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PartyPopper } from 'lucide-react';

const ThankYouPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
      window.scrollTo(0, 0);
    }, 7000); // 7 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleGoHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Helmet>
        <title>Dziękujemy za zamówienie! - Luxtree</title>
        <meta name="description" content="Potwierdzenie złożenia zamówienia w Luxtree." />
      </Helmet>

      <div className="min-h-screen w-full flex items-center justify-center bg-background text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-card rounded-2xl shadow-2xl shadow-black/30 border border-border p-8 md:p-16 max-w-2xl w-full"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 10 }}
            className="mx-auto w-24 h-24 flex items-center justify-center rounded-full bg-accent/10 mb-8"
          >
            <PartyPopper className="w-12 h-12 text-accent" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif text-foreground mb-4"
          >
            Dziękujemy za złożenie zamówienia!
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-muted-foreground mb-10"
          >
            Skontaktujemy się z Tobą jak najszybciej, aby potwierdzić szczegóły.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Button onClick={handleGoHome} variant="outline" className="border-border text-foreground hover:bg-secondary hover:text-foreground py-4 px-8 text-base rounded-full">
              Powrót
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ThankYouPage;