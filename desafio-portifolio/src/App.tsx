import { Header } from "./components/Header";
import { Principal } from "./components/Principal";
import { ProjectCard } from "./components/ProjectCard";
import { TimelineItem } from "./components/TimelineItem";

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

  const timeline = [
    {
      year: '2019',
      description: 'Meu primeiro contato com computação, no mini-curso Facens Code. Aprendi conceitos básicos, como lógica de programação.',
    },
    {
      year: '2022',
      description: 'Primeiro ano de faculdade cursando Ciência da Computação. Início da minha trajetória acadêmica.',
    },
    {
      year: '2024',
      description: 'Meu primeiro estágio na área da computação. Aprendizado prático e desenvolvimento de habilidades técnicas.',
    },
    {
      year: '2025',
      description: 'Oportunidade de aprendizado através do bootcamp realizado em parceria da UBS com a DNC e a LANDtech.',
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

        <section id="sobre" className="py-24 bg-slate-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl mb-16 text-center">
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Sobre mim
              </span>
            </h2>
            <div className="relative max-w-6xl mx-auto">
              <div className="absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600/50 to-blue-600/50 hidden md:block" />
              <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-4 relative z-0">
                {timeline.map((item, index) => (
                  <TimelineItem
                    key={index}
                    year={item.year}
                    description={item.description}
                    isLast={index === timeline.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        
      </div>
  );
}

export default App;
