import { Header } from "./components/Header";
import { Principal } from "./components/Principal";
import { ProjectCard } from "./components/ProjectCard";

function App() {
  const projects = [
    {
      id: 1,
      image: '../../public/img/img_projeto_1.png',
      title: 'Jogo Da Forca',
      description: 'Jogo da forca desenvolvido em Typescript, um dos primeiros projetos que fiz, para testar os conhecimentos obtidos no estágio.',
      link: 'https://github.com/iangodinho/JogoDaForca',
    },
    {
      id: 2,
      image: '../../public/img/img_projeto_4.jpeg',
      title: 'Portifólio Responsivo',
      description: 'Projeto responsivo em HTML e CSS, praticado através do curso da Alura.',
      link: 'https://github.com/iangodinho/portifolio-responsivo-alura',
    },
    {
      id: 3,
      image: '../../public/img/img_projeto_2.jpeg',
      title: 'Landing Page',
      description: 'Projeto em HTML e CSS de uma Landing Page para a Alura Plus, praticando através do curso da Alura.',
      link: 'https://github.com/iangodinho/landingpage-alura/tree/main/img',
    },
    {
      id: 4,
      image: '../../public/img/img_projeto_3.jpeg',
      title: 'Plataforma Online Responsiva',
      description: 'Plataforma de livros online feita com HTML e CSS responsivo, praticando através do curso da Alura.',
      link: 'https://github.com/iangodinho/plataforma-responsiva-alura',
    },
  ];

  return (
      <div className="min-h-screen bg-slate-950 text-white">
        <Header />

        <Principal />

        <section id="projetos" className="py-24 bg-slate-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl mb-16 text-center">
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Projetos
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                />
              ))}
            </div>
          </div>
        </section>

      </div>
  );
}

export default App;
