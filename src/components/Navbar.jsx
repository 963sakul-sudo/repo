
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Strona Główna', path: '/' },
  { name: 'Zamów', path: '/zamow' },
  { name: 'Kontakt', path: '/kontakt' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    setIsOpen(false);
  };
  
  const activeLinkStyle = {
    color: 'hsl(var(--foreground))',
  };

  const isHome = location.pathname === '/';
  const isScrolledOrNotHome = scrolled || !isHome || isOpen;

  return (
    <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolledOrNotHome ? "bg-card/70 backdrop-blur-xl shadow-lg" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavigate('/')}
          >
            <span className="text-2xl font-serif font-semibold text-foreground tracking-wider">LuxTree</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={(e) => { e.preventDefault(); handleNavigate(item.path); }}
                className="text-sm font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="h-6 w-6 text-foreground" />
            </Button>
          </div>
        </div>
      </div>
      
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-border"
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolledOrNotHome ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card fixed inset-0"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
               <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="absolute top-5 right-5">
                <X className="h-7 w-7 text-foreground" />
              </Button>
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={(e) => { e.preventDefault(); handleNavigate(item.path); }}
                  className="text-2xl font-semibold text-foreground"
                  style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
