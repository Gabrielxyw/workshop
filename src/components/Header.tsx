import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Workshop', href: '#sobre' },
    { name: 'Dinâmica', href: '#dinamica' },
    { name: 'Público', href: '#publico' },
    { name: 'Comitê', href: '#organizadores' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white/80 backdrop-blur-xl border-gray-200 py-4 shadow-sm' : 'bg-transparent border-transparent py-6'}`}>
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        
        <a href="#" className="flex items-center gap-3">
           <img src="/logo.png" alt="WTwin" className="h-12 w-auto" />
           <span className="font-display font-bold text-xl text-gray-900 tracking-tight">WTwin</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-mono text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-widest font-semibold">
              {link.name}
            </a>
          ))}
        </nav>
        
        <a href="#chamada" className="hidden md:flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded text-sm font-bold hover:bg-gray-800 transition-colors shadow-sm">
          Submeter Artigo
        </a>

        <button className="md:hidden text-gray-900 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
             initial={{ opacity: 0, height: 0 }}
             animate={{ opacity: 1, height: 'auto' }}
             exit={{ opacity: 0, height: 0 }}
             className="md:hidden bg-white border-b border-gray-200 overflow-hidden shadow-xl"
          >
             <div className="flex flex-col px-6 py-6 gap-6">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-sm font-mono text-gray-600 uppercase tracking-widest font-semibold hover:text-gray-900">
                    {link.name}
                  </a>
                ))}
                <a href="#chamada" onClick={() => setMobileMenuOpen(false)} className="text-center bg-gray-900 text-white px-6 py-3 rounded text-sm font-bold">
                  Submeter Artigo
                </a>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
