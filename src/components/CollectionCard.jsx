
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CollectionCard = ({ title, description, image, imageAlt, index, onOrder }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
      className="group relative rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden aspect-[4/5]"
    >
      <img 
        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
        alt={imageAlt}
        src={image} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      <div className="relative h-full p-6 flex flex-col justify-end">
        <div className="glass-effect p-6 rounded-lg">
          <h3 className="text-2xl font-serif text-foreground mb-2">
            {title}
          </h3>

          <p className="text-muted-foreground mb-4 text-sm">
            {description}
          </p>

          <Button
            onClick={onOrder}
            variant="secondary"
            className="w-full mt-auto bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Zamów
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default CollectionCard;
