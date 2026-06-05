import { motion } from 'motion/react';

export default function Organizers() {
  const organizers = [
    { name: "Ismar Frango Silveira", inst: "UPM", color: "bg-google-blue" },
    { name: "Alexandre G. de Siqueira", inst: "University of Florida", color: "bg-google-red" },
    { name: "Valéria Farinazzo Martins", inst: "UPM", color: "bg-google-yellow" },
    { name: "Maria Amélia Eliseo", inst: "UPM", color: "bg-google-green" },
    { name: "João Soares de O. Neto", inst: "UFBA", color: "bg-google-blue" },
    { name: "Alexandre Cardoso", inst: "UFU", color: "bg-google-red" },
  ];

  return (
    <section id="organizadores" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-google-green uppercase mb-3">Comitê Organizador</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 leading-tight">
            Pesquisadores e Acadêmicos
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {organizers.map((org, index) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center gap-4 group hover:shadow-md transition-all"
            >
              {/* Avatar Placeholder */}
              <div className={`w-16 h-16 rounded-full ${org.color} p-1`}>
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center font-display font-bold text-xl text-gray-800">
                  {org.name.charAt(0)}
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-900 group-hover:text-google-blue transition-colors text-sm sm:text-base">{org.name}</h4>
                <p className="text-xs text-gray-500">{org.inst}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
