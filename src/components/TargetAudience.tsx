import { motion } from 'motion/react';
import { Users, BookOpen } from 'lucide-react';

export default function TargetAudience() {
  return (
    <section id="publico" className="py-20 bg-gray-900 text-white overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-google-blue rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-google-green rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
          
          <div className="md:w-1/2">
            <h2 className="text-sm font-bold tracking-widest text-google-yellow uppercase mb-3">Público-Alvo</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Para quem é o WTwin?
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              O evento destina-se a um público diverso de aproximadamente 50 pessoas, visando gerar ricas discussões transdisciplinares sobre o futuro das tecnologias imersivas.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-google-blue flex-shrink-0"></div>
                <p className="text-gray-300 text-sm">Pesquisadores e Professores focados em edtech</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-google-red flex-shrink-0"></div>
                <p className="text-gray-300 text-sm">Estudantes de computação e áreas correlatas</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-google-yellow flex-shrink-0"></div>
                <p className="text-gray-300 text-sm">Desenvolvedores de soluções educacionais (Indústria)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-google-green flex-shrink-0"></div>
                <p className="text-gray-300 text-sm">Engenheiros de manutenção, operação e treinamento</p>
              </div>
            </div>
          </div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="md:w-5/12 bg-gray-800/50 backdrop-blur-md rounded-3xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                <Users className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Lotação Ideal</h4>
                <p className="text-gray-400 text-sm">~ 50 Participantes</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                <BookOpen className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Temas de Submissão</h4>
                <p className="text-gray-400 text-sm">UX, IA, OAs e REAs Imersivos, Ética, Acessibilidade e Efeito Uncanny Valley.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
