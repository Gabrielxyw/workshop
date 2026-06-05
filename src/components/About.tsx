import { motion } from 'motion/react';
import { Target, Lightbulb, Users, ArrowRight } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="sobre" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-google-blue uppercase mb-3">O Workshop</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 leading-tight mb-6">
              Transicionando de simulações estáticas para ambientes "vivos".
            </h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              O WTwin visa explorar o desenvolvimento, aplicações e o potencial transformador dos Gêmeos Digitais (Digital Twins) e dos Humanos Virtuais como ferramentas pedagógicas.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Enquanto simulações tradicionais oferecem ambientes controlados, os Gêmeos Digitais elevam o potencial ao integrar IoT e IA, permitindo espelhamento de sistemas em tempo real. Paralelamente, Humanos Virtuais introduzem agentes capazes de interações humanizadas e suporte emocional no aprendizado adaptativo em escala.
            </p>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm border-l-4 border-l-google-red">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Lightbulb size={20} className="text-google-red" />
                Desafio Crítico
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                A complexidade técnica é acompanhada por dilemas éticos: transparência de dados, confiança excessiva, manipulação emocional, viés algorítmico e perda de agência do aluno frente à hiper-personalização.
              </p>
            </div>
          </motion.div>

          {/* Right Visual/Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 gap-4"
          >
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 aspect-square flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-google-blue/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="w-12 h-12 bg-google-blue/10 rounded-xl flex items-center justify-center mb-4 text-google-blue">
                <Target size={24} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Ambientes Híbridos</h4>
              <p className="text-sm text-gray-500">Experimentação de hipóteses com alta fidelidade de dados e análise preditiva.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 aspect-square flex flex-col justify-center relative overflow-hidden group sm:translate-y-8">
              <div className="absolute top-0 right-0 w-24 h-24 bg-google-yellow/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="w-12 h-12 bg-google-yellow/10 rounded-xl flex items-center justify-center mb-4 text-google-yellow">
                <Users size={24} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Presença Social</h4>
              <p className="text-sm text-gray-500">Avatares mimetizam o comportamento humano para engajamento e personalização.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 aspect-square flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-google-green/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="w-12 h-12 bg-google-green/10 rounded-xl flex items-center justify-center mb-4 text-google-green">
                <Lightbulb size={24} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Ética & Inclusão</h4>
              <p className="text-sm text-gray-500">Garantir sistemas eticamente orientados e pedagogicamente ancorados.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-google-blue p-6 rounded-3xl shadow-md text-white aspect-square flex flex-col justify-end relative overflow-hidden group sm:translate-y-8">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700"></div>
              <div className="relative z-10">
                <h4 className="font-bold text-xl mb-2">O CBIE</h4>
                <p className="text-sm text-white/80 mb-4">Fomentando pesquisa e tecnologia na América Latina.</p>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:text-google-blue transition-colors cursor-pointer">
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
