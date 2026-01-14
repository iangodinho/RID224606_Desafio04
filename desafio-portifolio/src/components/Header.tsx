import { useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Nome */}
          <div className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Portfolio
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('projetos')}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('tecnologias')}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Tecnologias
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Sobre mim
            </button>
          </div>

          {/* Ícones Sociais Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Menu Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection('projetos')}
              className="block w-full text-left text-slate-300 hover:text-white transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('tecnologias')}
              className="block w-full text-left text-slate-300 hover:text-white transition-colors"
            >
              Tecnologias
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="block w-full text-left text-slate-300 hover:text-white transition-colors"
            >
              Sobre mim
            </button>
            <div className="flex items-center space-x-4 pt-4 border-t border-slate-800">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
