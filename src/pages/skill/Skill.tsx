import './Skill.css';
import Card from '../../components/Card/Card';
import Reveal from '../../components/Reveal/Reveal';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { skills } from '../../data/content';

export default function Skill() {
  return (
    <section id="skills" className="section skill-section">
      <div className="section-inner">
        <SectionTitle
          eyebrow="Skills"
          title="A practical stack for modern products"
          description="My toolkit blends interface design, backend systems, automation, and security practices that support fast and reliable development."
          centered
        />

        <div className="skill-grid">
          {skills.map((group) => (
            <Reveal key={group.category}>
              <Card className="skill-card">
                <h3>{group.category}</h3>
                <div className="skill-list">
                  {group.items.map((item) => (
                    <div key={item.name} className="skill-item">
                      <div className="skill-item__meta">
                        <span>{item.name}</span>
                        <span>{item.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-bar__fill" style={{ width: `${item.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}