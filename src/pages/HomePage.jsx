
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowDown, CheckCircle, Truck, Sparkles } from 'lucide-react';
import CollectionCard from '@/components/CollectionCard';

// A reusable component for animated text reveals
const AnimatedText = ({ children, className, delay = 0 }) => (
  <div className="overflow-hidden">
    <motion.div
      initial={{ y: '100%' }}
      whileInView={{ y: '0%' }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  </div>
);


const HomePage = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();

  const handleOrderClick = () => {
    navigate('/zamow');
    window.scrollTo(0, 0);
  };

  const collections = [
    {
      title: 'Choinki Premium',
      description: 'Najwyższej jakości, gęste, idealnie symetryczne drzewka.',
      image: 'https://images.unsplash.com/photo-1606934045022-ec9bbd3f15d0',
      imageAlt: 'Elegancka choinka premium z ciepłymi światłami w luksusowym salonie.'
    },
    {
      title: 'Świerk',
      description: 'Klasyczna, pachnąca choinka o intensywnym aromacie.',
      image: 'https://images.unsplash.com/photo-1607573981844-3a73b5313a21',
      imageAlt: 'Gęsty, naturalny świerk stojący w ośnieżonym lesie.'
    },
    {
      title: 'Jodła',
      description: 'Elegancka, trwała, o głębokiej zieleni igieł.',
      image: 'https://images.unsplash.com/photo-1542944758-d71f54545839',
      imageAlt: 'Zbliżenie na gałązki jodły kaukaskiej o głębokiej, zielonej barwie.'
    }
  ];

  const features = [
      "Starannie wyselekcjonowane drzewka",
      "Gwarancja świeżości i jakości",
      "Dostawa prosto pod Twoje drzwi",
      "Luksus w każdym detalu"
  ];
  
  const parallaxY = useTransform(scrollYProgress, [0, 0.25], ['0%', '25%']);

  return (
    <>
      <Helmet>
        <title>Luxtree - Choinki Premium | Naturalne Choinki z Dostawą</title>
        <meta name="description" content="Luxtree oferuje najwyższej jakości naturalne choinki z dostawą do domu. Premium, Świerk i Jodła - wybierz idealną choinkę na święta!" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden text-center">
          <motion.div 
            className="absolute inset-0 z-0" 
            style={{ y: parallaxY }}
          >
            <img
                className="w-full h-full object-cover"
                alt="Majestatyczna, oświetlona choinka w magicznym, ośnieżonym lesie nocą, tworząca świąteczny nastrój."
                src="https://images.unsplash.com/photo-1544632754-4456b3b3f234" />
            <div className="absolute inset-0 dark-gradient"></div>
          </motion.div>

          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedText className="text-6xl md:text-8xl lg:text-9xl font-serif mb-4 text-foreground">
                <h1>LuxTree</h1>
              </AnimatedText>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light text-muted-foreground"
              >
                Naturalne, pachnące i dostarczane prosto pod Twoje drzwi. Odkryj magię świąt z naszymi choinkami premium.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Button
                  onClick={handleOrderClick}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-12 py-7 text-base tracking-widest uppercase transition-all duration-300"
                >
                  Zamów swoją choinkę
                </Button>
              </motion.div>
            </div>
          </div>
          
           <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-primary"
            >
              <ArrowDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </section>

        {/* --- Unique Sections --- */}

        {/* Section 1: Parallax & Reveal */}
        <section className="py-24 px-4 bg-background relative overflow-hidden">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    className="relative aspect-square md:aspect-[4/5] rounded-xl overflow-hidden shadow-2xl"
                    initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
                    whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                >
                    <img className="w-full h-full object-cover" alt="Zbliżenie na idealną gałązkę choinki pokrytą świeżym śniegiem, skomponowane według złotej proporcji." src="https://images.unsplash.com/photo-1512120285918-7a388b450d4c" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent"></div>
                </motion.div>
                <div>
                    <AnimatedText className="text-4xl md:text-5xl font-serif text-foreground mb-6">
                        <h2>Perfekcja w każdym calu</h2>
                    </AnimatedText>
                    <motion.p 
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{ once: true }}
                        transition={{duration: 0.8, delay: 0.3}}
                        className="text-lg text-muted-foreground mb-8">
                        W Luxtree wierzymy, że idealna choinka to serce świątecznej atmosfery. Dlatego każde drzewko jest osobiście selekcjonowane, by zapewnić najwyższą jakość, symetrię i świeżość.
                    </motion.p>
                    <ul className="space-y-4 mb-10">
                        {features.map((feature, index) => (
                           <motion.li 
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                            className="flex items-center gap-3">
                               <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                               <span className="text-foreground">{feature}</span>
                           </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
        
        {/* Section 2: Full-width background & overlay */}
        <section className="py-32 px-4 relative flex items-center justify-center min-h-[80vh]">
            <div className="absolute inset-0 z-0">
                <img className="w-full h-full object-cover" alt="Stylowy van dostawczy z logo Luxtree zaparkowany przed nowoczesnym domem zimą." src="https://images.unsplash.com/photo-1658192844235-8035616cebc4" />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            </div>
            <div className="container mx-auto relative z-10 text-center">
                 <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-3xl mx-auto"
                 >
                    <Truck className="w-16 h-16 text-accent mx-auto mb-6" />
                    <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Wygoda i luksus dostawy</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Zapomnij o transporcie i bałaganie. Twoja wymarzona choinka dotrze prosto pod Twoje drzwi, gotowa by wnieść magię do Twojego domu. Dbamy o każdy detal, by Twoje przygotowania do świąt były czystą przyjemnością.
                    </p>
                    <Button onClick={handleOrderClick} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        Sprawdź warunki dostawy
                    </Button>
                </motion.div>
            </div>
        </section>

        {/* Section 3: Sticky Image */}
        <section className="py-24 px-4 bg-background relative">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
                <div className="md:sticky top-24 h-screen-3/4">
                     <motion.div 
                        className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <img className="w-full h-full object-cover" alt="Rodzina dekorująca piękną choinkę w przytulnym, świątecznym salonie." src="https://images.unsplash.com/photo-1576483591459-5a8235cec758" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </motion.div>
                </div>
                <div className="flex flex-col justify-center min-h-[50vh]">
                     <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                     >
                        <Sparkles className="w-12 h-12 text-accent mb-4" />
                        <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Stwórz niezapomniane chwile</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            Nasze choinki to więcej niż dekoracja – to tło dla najpiękniejszych wspomnień. Ciepło rodzinnych spotkań, radość dzieci i zapach świeżego lasu.
                        </p>
                         <p className="text-lg text-muted-foreground">
                            Wybierz Luxtree i poczuj prawdziwą magię świąt, która pozostanie w Waszych sercach na lata.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Collections Section */}
        <section className="py-24 px-4 collections-gradient">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
                Nasze Kolekcje
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Każde drzewko to obietnica jakości i świątecznej atmosfery. Wybierz to jedyne.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {collections.map((collection, index) => (
                <CollectionCard
                  key={collection.title}
                  {...collection}
                  index={index}
                  onOrder={handleOrderClick}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
