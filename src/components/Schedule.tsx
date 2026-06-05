import { motion } from 'motion/react';
import { Presentation, FileText, PencilLine } from 'lucide-react';

export default function Schedule() {
  const steps = [
    {
      id: "01",
      title: "Palestras e Fundamentos",
      duration: "2 horas",
      description: "Duas palestras de 45 min situando o estado-da-arte em Gêmeos Digitais e Humanos Virtuais. Abordam conceitos fundamentais, aspectos teóricos, técnicos, éticos e cases práticos, seguidas de discussões.",
      icon: <Presentation size={24} />,
      color: "bg-google-blue",
      textColor: "text-google-blue",
      lightBg: "bg-blue-50"
    },
    {
      id: "02",
      title: "Apresentação de Trabalhos",
      duration: "1,5 a 2 horas",
      description: "Apresentação de 6 a 8 trabalhos selecionados (curtos ou longos). Inclui pesquisas originais, relatos de experiência, discussões éticas e estudos de caso na área.",
      icon: <FileText size={24} />,
      color: "bg-google-red",
      textColor: "text-google-red",
      lightBg: "bg-red-50"
    },
    {
      id: "03",
      title: "Construção Coletiva do Manifesto",
      duration: "1 a 1,5 hora",
      description: "Elaboração de um manifesto coletivo usando técnicas de escrita colaborativa: Ideação (escrita em cadeia), Organização (parágrafos rotativos, técnica 1-2-4-Todos) e Revisão coletiva crítica.",
      icon: <PencilLine size={24} />,
      color: "bg-google-yellow",
      textColor: "text-[#d49e00]", // Slightly darker yellow for text readability
      lightBg: "bg-yellow-50"
    }
  ];

  return (
    <section id="dinamica" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-google-red uppercase mb-3">Dinâmica do Evento</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            Três etapas de aprendizado, compartilhamento e colaboração.
          </h3>
          <p className="text-gray-600 text-lg">
            O workshop está desenhado para fomentar discussões profundas, combinando nivelamento de conhecimento e produção intelectual colaborativa ao longo de 5 horas.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow"
              >
                {/* Background Decor */}
                <div className={`absolute -right-12 -top-12 w-32 h-32 rounded-full ${step.lightBg} opacity-50 group-hover:scale-150 transition-transform duration-500 ease-out`}></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className={`w-14 h-14 rounded-2xl ${step.lightBg} ${step.textColor} flex items-center justify-center`}>
                      {step.icon}
                    </div>
                    <span className="text-5xl font-display font-black text-gray-100 select-none">
                      {step.id}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600 mb-4">
                    <span className={`w-2 h-2 rounded-full ${step.color}`}></span>
                    {step.duration}
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
