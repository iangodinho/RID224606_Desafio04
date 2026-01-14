import { useEffect, useState } from 'react';

export function Principal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 to-slate-900 pt-20">
      <div className="container mx-auto px-6">
        <div
          className={`max-w-3xl transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl mb-6 text-white leading-tight">
            Ian Godinho | {' '}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Desenvolvedor Full Stack
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 leading-relaxed">
            Transformo ideias em experiências digitais únicas. Especializado em criar
            soluções web modernas, funcionais e esteticamente impecáveis.
          </p>
          <button
            onClick={() => scrollToSection('projetos')}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
          >
            Saber mais
          </button>
        </div>
      </div>
    </section>
  );
}
