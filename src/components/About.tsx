import { motion } from 'motion/react';

export default function About() {
  const features = [
    {
      title: "Gêmeos Digitais",
      subtitle: "Replicação & Predição",
      color: "text-google-blue",
      border: "border-google-blue/30",
      bg: "bg-google-blue/10",
      glow: "from-google-blue/20",
      desc: "Integração de IoT e Inteligência Artificial para espelhamento de sistemas reais. Análise preditiva em ambientes de aprendizagem híbridos antes de falhas no mundo físico."
    },
    {
      title: "Humanos Virtuais",
      subtitle: "Avatares & LLMs",
      color: "text-google-yellow",
      border: "border-google-yellow/30",
      bg: "bg-google-yellow/10",
      glow: "from-google-yellow/20",
      desc: "Agentes conversacionais potencializados por IA multimodal. Presença social que procura mimetizar comportamento humano para engajamento e personalização em escala."
    },
    {
      title: "Desafios Éticos",
      subtitle: "Confiança & Agência",
      color: "text-google-red",
      border: "border-google-red/30",
      bg: "bg-google-red/10",
      glow: "from-google-red/20",
      desc: "Enfrentando dilemas como transparência de dados, manipulação emocional, viés algorítmico e exclusão cultural na adoção destas complexas arquiteturas tecnológicas."
    }
  ];

  return (
    <section
      id="sobre"
      className="min-h-screen scroll-mt-0 flex flex-col justify-center py-24 border-b border-gray-200 relative bg-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/fundo_2.png')" }}
    >
      {/* Overlay for readability over the background image */}
      <div className="absolute inset-0 bg-white/40 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="mb-16">
          <p className="font-mono text-google-green text-sm uppercase tracking-[0.2em] mb-4 font-bold">// O Contexto</p>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-gray-900 max-w-3xl leading-tight">
            Transicionando simulações estáticas <br className="hidden md:block"/>para <span className="text-gray-400">ambientes vivos e bidirecionais.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group flex flex-col p-8 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-gray-300 hover:shadow-xl"
            >
              {/* Colored gradient background — intensifies on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feat.glow} via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

              {/* Soft corner glow */}
              <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full ${feat.bg} blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

              {/* Big index number as background graphic */}
              <span className={`absolute -bottom-6 -right-2 font-display font-black text-[10rem] leading-none ${feat.color} opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-500 select-none pointer-events-none`}>
                {i + 1}
              </span>

              {/* Top accent line — grows on hover */}
              <div className={`absolute top-0 left-0 h-1 w-16 ${feat.bg.replace('/10', '')} rounded-r-full transition-all duration-300 group-hover:w-full`}></div>

              <div className="relative">
                <p className={`font-mono text-xs uppercase tracking-widest ${feat.color} mb-3 font-semibold`}>{feat.subtitle}</p>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">{feat.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              {/* Bottom divider that fills on hover */}
              <div className="relative mt-auto pt-6">
                <div className="h-px w-full bg-gray-100"></div>
                <div className={`absolute bottom-0 left-0 h-px w-0 ${feat.bg.replace('/10', '')} transition-all duration-500 group-hover:w-full`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
