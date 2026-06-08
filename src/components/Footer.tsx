export default function Footer() {
  return (
    <footer className="py-1 border-t border-gray-200 bg-white relative z-20">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="WTwin" className="h-20 w-auto" />
          <span className="font-display font-bold text-xl text-gray-900 tracking-tight">WTwin <span className="font-mono font-normal text-sm text-gray-400">_2026</span></span>
        </div>

        <div className="text-gray-500 text-sm font-mono text-center md:text-left">
          Workshops CBIE • Congresso Brasileiro de Informática na Educação
        </div>
        
        <div className="flex gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-google-blue/80"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-google-red/80"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-google-yellow/80"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-google-green/80"></div>
        </div>

      </div>
    </footer>
  );
}
