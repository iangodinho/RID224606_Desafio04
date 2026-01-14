import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-2 text-slate-400">
              <Phone className="w-5 h-5" />
              <span>(15) 98157-1876</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Mail className="w-5 h-5" />
              <span>maxian.godinho@gmail.com</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/iangodinho"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/iangodinho"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
