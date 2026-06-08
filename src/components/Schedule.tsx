import { motion } from 'motion/react';

export default function Schedule() {
  const phases = [
    {
      id: "01",
      name: "Palestras",
      time: "2h00",
      img: "/palestra.png",
      titleColor: "text-event-cyan",
      badge: "bg-event-cyan",
      glow: "bg-event-cyan/20",
      pill: "border-event-cyan/30 bg-event-cyan/10 text-event-blue",
      desc: "Nivelamento do estado-da-arte em Gêmeos Digitais e Humanos Virtuais. Conceitos técnicos e filosóficos seguidos de discussões abertas."
    },
    {
      id: "02",
      name: "Trabalhos",
      time: "1h30",
      img: "/trabalhos.png",
      titleColor: "text-event-orange",
      badge: "bg-event-orange",
      glow: "bg-event-orange/20",
      pill: "border-event-orange/30 bg-event-orange/10 text-event-orange",
      desc: "Apresentação de 6 a 8 trabalhos técnicos (curtos e longos), relatos de experiência e propostas inovadoras originadas da comunidade."
    },
    {
      id: "03",
      name: "Manifesto",
      time: "1h30",
      img: "/manifesro.png",
      titleColor: "text-event-gold",
      badge: "bg-event-gold",
      glow: "bg-event-gold/20",
      pill: "border-event-gold/40 bg-event-gold/10 text-event-navy",
      desc: "Construção de manifesto coletivo através de role-based writing, parágrafos rotativos e técnica 1-2-4-Todos. Uma dinâmica viva e descentralizada."
    }
  ];

  return (
    <section id="dinamica" className="py-32 relative overflow-hidden bg-gradient-to-b from-white via-event-cyan/5 to-event-orange/5">
      {/* Decorative color blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-event-cyan/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-event-orange/10 blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-event-cyan text-sm uppercase tracking-[0.2em] mb-6 font-bold"
            >
              // Workflow Progressivo
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-gray-900 leading-[1.1] tracking-tight"
            >
              Dinâmica de <br className="hidden md:block" />5 Horas
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 font-light leading-relaxed max-w-md"
          >
            O workshop atua como um pipeline contínuo: do nivelamento de conhecimento à produção intelectual fluida.
          </motion.p>
        </div>

        <div className="flex flex-col gap-16 md:gap-24 relative">
          {phases.map((phase, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`group flex flex-col gap-8 md:gap-16 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
               {/* Phase image */}
               <div className="md:w-2/5 w-full">
                 <div className="relative">
                   {/* Colored glow behind image */}
                   <div className={`absolute -inset-3 rounded-3xl  blur-2xl pointer-events-none`}></div>
                   <div className="relative rounded-[4rem] overflow-hidden aspect-4/3">
                     <img
                       src={phase.img}
                       alt={phase.name}
                       className="object-cover w-full h-full"
                       style={{
                         maskImage:
                           "linear-gradient(to right, transparent, black 20%, black 75%, transparent), linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
                         WebkitMaskImage:
                           "linear-gradient(to right, transparent, black 20%, black 75%, transparent), linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
                         maskComposite: "intersect",
                         WebkitMaskComposite: "source-in",
                       }}
                     />
                     {/* Tint filter harmonized with the section background */}
                     {/* <div className="absolute inset-0 bg-gradient-to-br from-event-cyan/30 to-event-orange/20 mix-blend-multiply pointer-events-none"></div> */}
                     {/* Number badge */}
                     {/* <div className={`absolute top-4 left-4 font-display font-black text-2xl md:text-3xl text-white drop-shadow-lg ${phase.badge} rounded-xl w-12 h-12 md:w-14 md:h-14 flex items-center justify-center`}>
                       {phase.id}
                     </div> */}
                   </div>
                 </div>
               </div>

               <div className="md:w-3/5 pt-2 md:pt-4">
                  <div className="mb-4 flex flex-col sm:flex-row sm:items-center gap-4">
                    <h3 className={`text-3xl md:text-4xl font-display font-bold ${phase.titleColor}`}>{phase.name}</h3>
                    <div className={`px-4 py-1.5 rounded-full border font-mono text-sm font-semibold w-fit ${phase.pill}`}>
                      ~ {phase.time}
                    </div>
                  </div>

                  <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-2xl">
                    {phase.desc}
                  </p>
               </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
