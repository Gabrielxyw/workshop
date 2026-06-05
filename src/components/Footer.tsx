export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div className="mb-8">
          <h2 className="font-display font-bold text-2xl tracking-tight text-gray-900 mb-2">WTwin 2026</h2>
          <p className="text-gray-500">Workshop de Gêmeos Digitais e Humanos Virtuais na Educação e Treinamento</p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-12">
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-google-blue transition-colors">Anais (Disponível em breve)</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-google-blue transition-colors">Call for Papers</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-google-blue transition-colors">Contato</a>
        </div>

        <div className="flex justify-center mb-8">
            <div className="flex space-x-2">
              <div className="w-8 h-2 rounded-full bg-google-blue opacity-80"></div>
              <div className="w-8 h-2 rounded-full bg-google-red opacity-80"></div>
              <div className="w-8 h-2 rounded-full bg-google-yellow opacity-80"></div>
              <div className="w-8 h-2 rounded-full bg-google-green opacity-80"></div>
            </div>
        </div>

        <p className="text-gray-400 text-xs">
          Evento filiado ao CBIE (Congresso Brasileiro de Informática na Educação).
        </p>
      </div>
    </footer>
  );
}
