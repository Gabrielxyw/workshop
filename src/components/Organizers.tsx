import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Organizers() {
  // Dados dos organizadores, com espaço reservado para imagens e links
  const organizers = [
    { 
      name: "Ismar Frango Silveira", 
      inst: "Mackenzie (UPM)", 
      link: "#", 
      imageUrl: "" // Coloque a URL da foto aqui, ex: "/ismar.jpg" ou "https..."
    },
    { 
      name: "Alexandre G. de Siqueira", 
      inst: "University of Florida (UF)", 
      link: "#", 
      imageUrl: "" 
    },
    { 
      name: "Valéria Farinazzo Martins", 
      inst: "Mackenzie (UPM)", 
      link: "#", 
      imageUrl: "" 
    },
    { 
      name: "Maria Amélia Eliseo", 
      inst: "Mackenzie (UPM)", 
      link: "#", 
      imageUrl: "" 
    },
    { 
      name: "João Soares de O. Neto", 
      inst: "Universidade Fed. da Bahia", 
      link: "#", 
      imageUrl: "" 
    },
    { 
      name: "Alexandre Cardoso", 
      inst: "Universidade Fed. de Uberlândia", 
      link: "#", 
      imageUrl: "" 
    },
  ];

  return (
    <section id="organizadores" className="py-32 bg-white overflow-hidden relative border-t border-gray-200">
      {/* Background Graphic Elements */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-event-cyan/[0.03] to-transparent rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="max-w-4xl mb-24 md:mb-32">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-event-cyan text-sm uppercase tracking-[0.2em] mb-8 font-bold"
          >
            // Arquitetos do Evento
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-medium text-gray-900 mb-8 leading-[1.1] tracking-tight"
          >
            Comitê Organizador
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl"
          >
            Pesquisadores, professores e líderes acadêmicos na vanguarda da intersecção entre tecnologia avançada e educação.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-20 lg:gap-y-28">
          {organizers.map((org, index) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative flex flex-col items-start border-t border-gray-200 pt-8 hover:border-gray-400 transition-colors duration-500"
            >
              {/* Profile Image / Placeholder */}
              <div className="w-24 h-24 mb-8 rounded-full bg-[#fdfdfd] border border-gray-200 flex items-center justify-center overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 shadow-sm">
                {org.imageUrl ? (
                  <img src={org.imageUrl} alt={org.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="font-display font-medium text-2xl text-gray-300 group-hover:text-event-cyan transition-colors duration-500">
                    {org.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                  </span>
                )}
              </div>
              
              <h4 className="text-2xl lg:text-3xl font-display font-medium text-gray-900 mb-3 group-hover:text-event-cyan transition-colors duration-500">
                {org.name}
              </h4>
              <p className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-10">
                {org.inst}
              </p>
              
              {/* Minimal Text Link */}
              <a 
                href={org.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-auto inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-gray-400 group-hover:text-event-cyan transition-colors duration-500"
              >
                <span>Página Pessoal</span>
                <ArrowUpRight size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
