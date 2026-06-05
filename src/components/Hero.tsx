import { motion } from 'motion/react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Abstract Google Design Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[10%] w-64 h-64 bg-google-blue/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-10 left-[5%] w-80 h-80 bg-google-red/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 left-[20%] w-40 h-40 bg-google-yellow/20 rounded-full blur-2xl"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-1/2 right-[20%] w-56 h-56 bg-google-green/10 rounded-full blur-3xl"
        />

        {/* Floating geometric shapes (Google Event style) */}
        <motion.div
           initial={{ opacity: 0, scale: 0 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.2 }}
           className="absolute top-32 left-[15%] w-12 h-12 border-4 border-google-red rounded-full opacity-20 hidden md:block"
        />
        <motion.div
           initial={{ opacity: 0, scale: 0 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.4 }}
           className="absolute bottom-40 right-[15%] w-16 h-16 bg-google-yellow rounded-lg opacity-20 rotate-12 hidden md:block"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-google-green"></span>
            <span className="text-sm font-medium text-gray-600">Parte do CBIE 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-gray-900 tracking-tight leading-tight mb-6"
          >
            Gêmeos Digitais e <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-google-blue via-google-red to-google-yellow">
              Humanos Virtuais
            </span>
            <br />
            na Educação
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10"
          >
            O WTwin explora a convergência entre simulações avançadas e agentes conversacionais humanizados para transformar processos de ensino, aprendizagem e treinamento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#chamada"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group"
            >
              Submeter Trabalho
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#sobre"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-gray-900 border border-gray-200 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              Conheça o Workshop
            </a>
          </motion.div>

          {/* Quick Info Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mt-16 pt-8 border-t border-gray-100"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
              <Calendar size={18} className="text-google-blue" />
              Durante o CBIE 2026
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
              <MapPin size={18} className="text-google-red" />
              Localização (a definir)
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
