import ProjectCard from "./components/ProjectCard/ProjectCard";
import { projects } from "./data/projects";

import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <h1>Marcos Morais</h1>

        <nav>
          <a href="#about">Sobre mim</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="hero-label">
            TECNOLOGIA • SUPORTE • DESENVOLVIMENTO WEB
          </p>

          <h2>
            Olá, eu sou <span>Marcos</span>.
          </h2>

          <p className="hero-description">
            Profissional em transição para a área de tecnologia, formado em
            Ciência da Computação, com experiência em suporte técnico e
            desenvolvimento de projetos web.
          </p>

          <div className="hero-technologies">
            <span>React</span>
            <span>TypeScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>

          <div className="hero-buttons">
            <a href="#projects">Ver meus projetos</a>

            <a href="#contact">Entre em contato</a>
          </div>
        </section>

        <section id="about">
          <h2>Sobre mim</h2>

          <p>
            Sou formado em Ciência da Computação e estou em transição para a
            área de tecnologia. Tenho experiência em suporte técnico e venho
            desenvolvendo projetos para aprimorar minhas habilidades em
            desenvolvimento web.
          </p>

          <p>
            Atualmente trabalho com HTML, CSS, JavaScript, React e TypeScript,
            buscando unir conhecimento técnico, organização e foco na
            experiência do usuário.
          </p>
        </section>

        <section id="projects">
          <h2>Projetos</h2>

          <p>
            Alguns dos projetos que desenvolvi durante minha jornada de
            aprendizado em tecnologia.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="contact">
          <h2>Contato</h2>

          <p>
            Estou aberto a oportunidades na área de tecnologia. Entre em contato
            comigo através dos canais abaixo.
          </p>

          <div className="contact-links">
            <a href="mailto:morais.mpx@gmail.com">E-mail</a>

            <a
              href="https://www.linkedin.com/in/marcospx/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Marcos-Paixao"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
