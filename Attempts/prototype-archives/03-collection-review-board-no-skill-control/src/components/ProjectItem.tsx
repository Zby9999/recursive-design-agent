import { EditorialText } from "./EditorialText";
import { PortfolioImage } from "./PortfolioImage";
import type { Project } from "../data/projects";

export function ProjectItem(project: Project) {
  if (project.variant === "featured") {
    return (
      <section
        className="project-item project-item--featured"
        aria-label={`Amelie Dupont project ${project.number}`}
        data-node-id={project.dataNodeId}
        data-name={project.name}
      >
        <PortfolioImage
          src={project.image.src}
          alt={project.image.alt}
          href={project.href}
          variant="full"
          dataNodeId={project.image.dataNodeId}
        />
        <a className="project-item__featured-meta" href={project.href} data-node-id={project.metaDataNodeId}>
          <EditorialText as="span" variant="projectMeta">
            {project.number}
          </EditorialText>
          <EditorialText as="span" variant="projectMeta" align="center">
            {project.title}
          </EditorialText>
          <EditorialText as="span" variant="projectMeta" align="right">
            {project.season}
          </EditorialText>
        </a>
      </section>
    );
  }

  const media = (
    <PortfolioImage
      src={project.image.src}
      alt={project.image.alt}
      href={project.href}
      variant="split"
      crop={project.image.crop}
      dataNodeId={project.image.dataNodeId}
    />
  );

  const text = (
    <a className="project-item__text" href={project.href} data-node-id={project.metaDataNodeId}>
      <EditorialText as="span" variant="projectMeta" dataNodeId={project.numberDataNodeId}>
        {project.number}
      </EditorialText>
      <span className="project-item__title-group" data-node-id={project.titleDataNodeId}>
        <EditorialText as="span" variant="projectMeta">
          {project.title}
        </EditorialText>
        <EditorialText as="span" variant="projectMeta">
          {project.season}
        </EditorialText>
      </span>
    </a>
  );

  return (
    <section
      className="project-item project-item--split"
      aria-label={`Amelie Dupont project ${project.number}`}
      data-node-id={project.dataNodeId}
      data-name={project.name}
    >
      {project.mediaSide === "left" ? media : text}
      {project.mediaSide === "left" ? text : media}
    </section>
  );
}
