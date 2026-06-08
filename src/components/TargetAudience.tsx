import { motion } from 'motion/react';
import { Users, GraduationCap, Code2, Building2 } from 'lucide-react';

export default function TargetAudience() {
  const audiences = [
    {
      icon: GraduationCap,
      hoverClass: "group-hover:text-event-cyan",
      staticClass: "text-event-cyan",
      title: "Academia e Pesquisa",
      desc: "Investigadores, estudantes e professores focados em inovação pedagógica e avaliação na EdTech."
    },
    {
      icon: Code2,
      hoverClass: "group-hover:text-event-orange",
      staticClass: "text-event-orange",
      title: "Desenvolvedores & Tech",
      desc: "Engenheiros de software, designers e arquitetos criando os sistemas simulados do futuro."
    },
    {
      icon: Building2,
      hoverClass: "group-hover:text-event-blue",
      staticClass: "text-event-blue",
      title: "Indústria Corporativa",
      desc: "Profissionais de T&D, Recursos Humanos e operações escalando a imersão na capacitação técnica."
    },
    {
      icon: Users,
      hoverClass: "group-hover:text-event-gold",
      staticClass: "text-event-gold",
      title: "Lentes Multidisciplinares",
      desc: "Especialistas focados na psicologia da aprendizagem e sociólogos analisando impactos éticos."
    }
  ];

  return (
    <section
      id="publico"
      className="py-32 relative overflow-hidden bg-[#fafafa]"
    >
      {/* Dot-grid pattern background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      ></div>
      {/* Soft fade so the grid melts into the section edges */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#fafafa] via-transparent to-[#fafafa]"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="max-w-4xl mb-24 md:mb-32">
             <motion.p 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="font-mono text-event-orange text-sm uppercase tracking-[0.2em] mb-8 font-bold"
             >
               // Visão de Comunidade
             </motion.p>
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-4xl md:text-5xl lg:text-7xl font-display font-medium text-gray-900 mb-8 leading-[1.1] tracking-tight"
             >
               Para quem estamos construindo?
             </motion.h2>
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl"
             >
               Acreditamos que os Gêmeos Digitais na educação só entregam valor real quando aliamos rigor computacional a diretrizes humanas, éticas e pedagógicas duradouras. 
             </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-24 lg:gap-y-32">
           {audiences.map((item, i) => {
             const Icon = item.icon;
             return (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.7, delay: i * 0.1 }}
               className="group relative cursor-default"
             >
                {/* Oversized Background Icon (always visible) */}
                <div className={`absolute -top-16 -left-8 md:-left-12 opacity-5 scale-110 pointer-events-none ${item.staticClass}`}>
                  <Icon size={280} strokeWidth={0.5} />
                </div>

                <div className="border-t border-gray-400 pt-8 relative z-10 block">
                  <div className={`mb-8 ${item.staticClass}`}>
                    <Icon size={48} strokeWidth={1} />
                  </div>
                  <h4 className="text-3xl lg:text-4xl font-display font-medium text-gray-900 mb-6">{item.title}</h4>
                  <p className="text-xl lg:text-2xl text-gray-700 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
             </motion.div>
           )})}
        </div>

      </div>
    </section>
  );
}
