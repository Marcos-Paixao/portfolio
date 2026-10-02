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
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <ul className="technology-list">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            Ver projeto
          </a>
        )}

        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          Ver no GitHub
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
