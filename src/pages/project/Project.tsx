import './Project.css';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Reveal from '../../components/Reveal/Reveal';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { projects } from '../../data/content';

export default function Project() {
  return (
    <section id="projects" className="section project-section">
      <div className="section-inner">
        <SectionTitle
          eyebrow="Projects"
          title="Selected work that can understand the behaviour of the system and the network."
          description="These builds focus on clarity, performance, and maintainable code while balancing product polish with technical depth."
        />

        <div className="project-grid">
          {projects.map((project) => (
            <Reveal key={project.title}>
              <Card className="project-card">
                <img src={project.image} alt={project.title} className="project-card__image" />
                <div className="project-card__body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-card__tags">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-card__actions">
                    <Button href={project.github} external variant="secondary">GitHub</Button>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}