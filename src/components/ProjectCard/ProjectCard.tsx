import type { Project } from "../../types/Project";
import "./ProjectCard.css";

interface Props {
  project: Project;
}

function ProjectCard({ project }: Props) {
  return (
    <article className="project-card">
      <img
        className="project-image"
        src={project.image}
        alt={`Imagem do projeto ${project.title}`}
      />

      <div className="project-card-content">
        {project.id === 4 && (
          <span className="project-featured">Projeto em destaque</span>
        )}
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <ul className="technology-list">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-links">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-primary"
            >
              Ver projeto
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-secondary"
          >
            Ver no GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
