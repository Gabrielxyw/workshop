import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Workshop', href: '#sobre' },
    { name: 'Dinâmica', href: '#dinamica' },
    { name: 'Público-Alvo', href: '#publico' },
    { name: 'Organizadores', href: '#organizadores' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="flex -space-x-1">
            <div className="w-4 h-4 rounded-full bg-google-blue mix-blend-multiply opacity-90 group-hover:scale-110 transition-transform"></div>
            <div className="w-4 h-4 rounded-full bg-google-red mix-blend-multiply opacity-90 group-hover:scale-110 transition-transform delay-75"></div>
            <div className="w-4 h-4 rounded-full bg-google-yellow mix-blend-multiply opacity-90 group-hover:scale-110 transition-transform delay-100"></div>
            <div className="w-4 h-4 rounded-full bg-google-green mix-blend-multiply opacity-90 group-hover:scale-110 transition-transform delay-150"></div>
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-gray-900 ml-1">
            WTwin
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-google-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#chamada"
            className="px-5 py-2.5 rounded-full bg-google-blue text-white text-sm font-medium hover:bg-blue-600 hover:shadow-md transition-all active:scale-95"
          >
            Submeter Artigo
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-600 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg absolute top-full left-0 w-full"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-gray-800 hover:text-google-blue"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#chamada"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center mt-2 px-5 py-3 rounded-full bg-google-blue text-white font-medium active:bg-blue-600"
              >
                Submeter Artigo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
