import { useState } from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

export function ProjectCard({ image, title, description, link }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 transition-all duration-300 ${
        isHovered ? 'transform -translate-y-2 shadow-2xl shadow-purple-500/20' : 'shadow-lg'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl mb-3 text-white">{title}</h3>
        <p className="text-slate-400 mb-6 leading-relaxed">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
        >
          Clique aqui
        </a>
      </div>
    </div>
  );
}
