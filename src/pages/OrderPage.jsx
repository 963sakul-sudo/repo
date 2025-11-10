
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Send } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const OrderPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    treeType: 'premium', height: '1.0', width: '0.6', thickness: 'srednia',
    accessories: { stojak: false, bombki: false, lampki: false, ozdoby: false },
    delivery: 'dostawa', assembly: { montaz: false, utylizacja: false },
    decoration: 'wlasna', rental: false, message: '',
    name: '', email: '', phone: '', address: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const [group, item] = name.split('.');
      if (item) {
        setFormData(prev => ({
          ...prev,
          [group]: { ...prev[group], [item]: checked }
        }));
      } else {
        setFormData(prev => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleRadioChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    setStep(2);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/dziekujemy');
    }, 1500);
  };

  const generateOptions = (start, end, step, unit) => {
    const options = [];
    for (let i = start; i <= end; i = i + step) {
      options.push(
        <option key={i.toFixed(1)} value={i.toFixed(1)}>
          {i.toFixed(1)} {unit}
        </option>
      );
    }
    return options;
  };
  
  const generateWidthOptions = (start, end, step, unit) => {
      const options = [];
      for (let i = start; i <= end; i += step) {
          options.push(
              <option key={i.toFixed(2)} value={i.toFixed(2)}>
                  {i.toFixed(2)} {unit}
              </option>
          );
      }
      return options;
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <>
      <Helmet>
        <title>Zamów Choinkę - Luxtree | Formularz Zamówienia</title>
        <meta name="description" content="Zamów swoją idealną choinkę od Luxtree. Wypełnij prosty formularz, a my dostarczymy ją prosto pod Twoje drzwi!" />
      </Helmet>

      <div className="min-h-screen bg-background pt-32 pb-16">
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <div className="bg-card rounded-xl shadow-2xl shadow-black/30 border border-border p-8 md:p-12 overflow-hidden">
              <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
                  Formularz zamówienia
                </h1>
                <p className="text-lg text-muted-foreground">
                  Etap {step} z 2: {step === 1 ? 'Specyfikacja choinki' : 'Dane dostawy'}
                </p>
              </div>

              <AnimatePresence mode="wait">
                <motion.form
                  key={step}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={formVariants}
                  transition={{ duration: 0.5 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  {step === 1 && (
                    <>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="treeType">Rodzaj choinki</Label>
                          <select id="treeType" name="treeType" value={formData.treeType} onChange={handleChange} className="w-full bg-input px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-colors">
                            <option value="premium">Choinka Premium</option>
                            <option value="swierk">Świerk</option>
                            <option value="jodla">Jodła</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="thickness">Grubość</Label>
                          <select id="thickness" name="thickness" value={formData.thickness} onChange={handleChange} className="w-full bg-input px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-colors">
                            <option value="mala">Mała</option>
                            <option value="srednia">Średnia</option>
                            <option value="duza">Duża</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="height">Wysokość</Label>
                          <select id="height" name="height" value={formData.height} onChange={handleChange} className="w-full bg-input px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-colors">
                            {generateOptions(1, 10, 0.2, 'm')}
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="width">Szerokość</Label>
                          <select id="width" name="width" value={formData.width} onChange={handleChange} className="w-full bg-input px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-colors">
                            {generateWidthOptions(0.6, 5, 0.2, 'm')}
                          </select>
                        </div>
                      </div>
                      <div className="space-y-4 pt-2">
                        <Label>Akcesoria dodatkowe</Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {Object.keys(formData.accessories).map(key => (
                            <div key={key} className="flex items-center space-x-3 bg-background border border-border rounded-lg px-4 py-3">
                              <Checkbox id={`acc-${key}`} name={`accessories.${key}`} checked={formData.accessories[key]} onCheckedChange={(checked) => handleChange({ target: { name: `accessories.${key}`, checked, type: 'checkbox' } })} />
                              <label htmlFor={`acc-${key}`} className="text-sm font-medium leading-none capitalize text-foreground">{key}</label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                        <div className="space-y-3">
                          <Label>Dostawa</Label>
                          <RadioGroup name="delivery" value={formData.delivery} onValueChange={(value) => handleRadioChange('delivery', value)} className="space-y-3">
                            <div className="flex items-center space-x-3 bg-background border border-border rounded-lg px-4 py-3"><RadioGroupItem value="dostawa" id="dostawa" /><Label htmlFor="dostawa" className="w-full">Dostawa</Label></div>
                            <div className="flex items-center space-x-3 bg-background border border-border rounded-lg px-4 py-3"><RadioGroupItem value="odbior" id="odbior" /><Label htmlFor="odbior" className="w-full">Odbiór osobisty</Label></div>
                          </RadioGroup>
                        </div>
                        <div className="space-y-3">
                          <Label>Dekoracja</Label>
                          <RadioGroup name="decoration" value={formData.decoration} onValueChange={(value) => handleRadioChange('decoration', value)} className="space-y-3">
                            <div className="flex items-center space-x-3 bg-background border border-border rounded-lg px-4 py-3"><RadioGroupItem value="wlasna" id="wlasna" /><Label htmlFor="wlasna" className="w-full">Własna</Label></div>
                            <div className="flex items-center space-x-3 bg-background border border-border rounded-lg px-4 py-3"><RadioGroupItem value="zakup" id="zakup" /><Label htmlFor="zakup" className="w-full">Zakup Dekoracji</Label></div>
                          </RadioGroup>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                        <div className="space-y-3">
                          <Label>Usługi dodatkowe</Label>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3 bg-background border border-border rounded-lg px-4 py-3"><Checkbox id="montaz" name="assembly.montaz" checked={formData.assembly.montaz} onCheckedChange={(checked) => handleChange({ target: { name: 'assembly.montaz', checked, type: 'checkbox' } })} /><Label htmlFor="montaz" className="w-full">Montaż</Label></div>
                            <div className="flex items-center space-x-3 bg-background border border-border rounded-lg px-4 py-3"><Checkbox id="utylizacja" name="assembly.utylizacja" checked={formData.assembly.utylizacja} onCheckedChange={(checked) => handleChange({ target: { name: 'assembly.utylizacja', checked, type: 'checkbox' } })} /><Label htmlFor="utylizacja" className="w-full">Utylizacja</Label></div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <Label>Wynajem</Label>
                           <div className="flex items-center space-x-3 bg-background border border-border rounded-lg px-4 py-3"><Checkbox id="rental" name="rental" checked={formData.rental} onCheckedChange={(checked) => handleChange({ target: { name: 'rental', checked, type: 'checkbox' } })} /><Label htmlFor="rental" className="w-full">Chcę wynająć choinkę</Label></div>
                        </div>
                      </div>
                       <div className="space-y-2 pt-2">
                        <Label htmlFor="message">Dodatkowe informacje</Label>
                        <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Twoje specjalne życzenia." rows={3} />
                      </div>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button type="button" onClick={handleNextStep} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg rounded-full transition-transform">
                          Dalej <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </motion.div>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="name">Imię i nazwisko / Nazwa firmy *</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Jan Kowalski" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="jan@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefon *</Label>
                          <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required placeholder="+48 123 456 789" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Adres *</Label>
                        <Input id="address" name="address" value={formData.address} onChange={handleChange} required placeholder="ul. Przykładowa 123, 00-000 Warszawa" />
                      </div>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button type="submit" disabled={isSubmitting} variant="secondary" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-lg rounded-full transition-transform">
                          {isSubmitting ? (
                            <>
                              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-current border-t-transparent rounded-full mr-2" />
                              Wysyłanie...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5 md:mr-2" />
                              <span className="hidden md:inline">Wyślij zamówienie</span>
                              <span className="md:hidden">Wyślij</span>
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </>
                  )}
                </motion.form>
              </AnimatePresence>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OrderPage;
