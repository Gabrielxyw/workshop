import { motion } from 'motion/react';
import { ArrowRight, ArrowLeftRight, Activity } from 'lucide-react';

export default function Hero() {
  const submissionUrl = 'https://jems3.sbc.org.br/events/685';

  return (
    <section
      className="relative flex h-[100svh] items-center justify-center overflow-hidden border-b border-gray-200 bg-white bg-cover bg-center bg-no-repeat px-0 pt-20 pb-6"
      style={{ backgroundImage: "url('/fundo.png')" }}
    >

      {/* Overlay for readability over the background image */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] pointer-events-none z-0" />

      {/* Abstract CSS Twins Background */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden opacity-30 md:opacity-20 z-0">
         {/* Human/Warm Side */}
         <motion.div 
           animate={{ x: [0, 50, 0], scale: [1, 1.1, 1] }}
           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
           className="w-[60vw] h-[60vw] md:w-[700px] md:h-[700px] bg-gradient-to-br from-event-orange to-event-gold rounded-full blur-[100px] mix-blend-multiply absolute -translate-x-[25%]"
         />
         {/* Digital/Cold Side */}
         <motion.div 
           animate={{ x: [0, -50, 0], scale: [1, 1.1, 1] }}
           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
           className="w-[60vw] h-[60vw] md:w-[700px] md:h-[700px] bg-gradient-to-bl from-event-blue to-event-cyan rounded-full blur-[100px] mix-blend-multiply absolute translate-x-[25%]"
         />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex h-full max-w-5xl flex-col items-center justify-center text-center">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="group relative mb-6 flex items-center gap-3 overflow-hidden rounded-full border border-event-cyan/30 bg-white/80 px-5 py-2.5 shadow-lg shadow-event-blue/10 backdrop-blur-md"
        >
           <div className="absolute inset-0 bg-gradient-to-r from-event-cyan/15 via-event-gold/15 to-event-orange/15 opacity-90"></div>
           <Activity size={16} className="relative z-10 text-event-orange animate-pulse" />
           <span className="relative z-10 bg-gradient-to-r from-event-blue via-event-cyan to-event-orange bg-clip-text text-xs md:text-sm font-mono tracking-widest uppercase text-transparent font-bold">
             CBIE 2026
           </span>
        </motion.div>

        {/* Massive WTwin Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6 w-full"
        >
          <h1 className="font-display font-black text-[clamp(4.5rem,15vw,11rem)] leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-event-navy to-[#183457] drop-shadow-sm">
            WTwin
          </h1>
          
          {/* Intersection Connection Decoration */}
          <div className="absolute top-1/2 left-0 w-full flex items-center justify-center gap-2 md:gap-4 -translate-y-1/2 pointer-events-none opacity-90 md:block hidden">
            <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent to-event-orange max-w-[200px]"></div>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-[4px] border-white bg-gradient-to-br from-event-orange to-event-cyan shadow-xl flex items-center justify-center rotate-45 transform z-20">
              <ArrowLeftRight size={24} className="text-white -rotate-45" />
            </div>
            <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent to-event-cyan max-w-[200px]"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mb-7 relative z-20"
        >
          <h2 className="text-2xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-gray-900 leading-tight mb-4">
            Workshop de <span className="text-transparent bg-clip-text bg-gradient-to-r from-event-orange to-event-gold whitespace-nowrap">Gêmeos Digitais</span> e <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-event-cyan to-event-blue whitespace-nowrap">Humanos Virtuais</span> <br className="hidden md:block" /> na Educação e Treinamento
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            Convergência entre simulações imersivas e presença social interativa em ambientes de educação e treinamento
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-2 font-mono uppercase tracking-widest text-event-navy">
            <p className="text-sm md:text-base font-bold">
              WTwin em{' '}
              <span className="font-display text-2xl md:text-3xl normal-case tracking-tight text-event-cyan">5/10</span>{' '}
              no{' '}
              <span className="bg-gradient-to-r from-event-blue via-event-cyan to-event-orange bg-clip-text font-display text-xl md:text-2xl normal-case tracking-tight text-transparent">
                CBIE 2026
              </span>
            </p>

            <div className="h-px w-24 bg-gradient-to-r from-transparent via-event-orange to-transparent"></div>
            <p className="text-sm md:text-base font-bold">
              Submissões até{' '}
              <span className="text-gray-400 line-through">1/7</span>{' '}
              <span className="font-display text-2xl md:text-3xl tracking-tight text-event-orange">15/7</span>
            </p>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a href={submissionUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 md:py-5 rounded-full bg-event-navy text-white font-bold hover:bg-event-blue shadow-lg shadow-event-navy/20 transition-all flex items-center justify-center gap-2 group text-lg border border-event-navy">
            Submeter Trabalho
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#sobre" className="w-full sm:w-auto px-8 py-4 md:py-5 rounded-full border-[2px] border-gray-200 bg-white text-gray-800 font-bold hover:border-gray-300 hover:bg-gray-50 shadow-sm transition-all flex items-center justify-center text-lg">
            Explorar Temática
          </a>
        </motion.div>

      </div>
    </section>
  );
}
