import './Background.css';
import Card from '../../components/Card/Card';
import Reveal from '../../components/Reveal/Reveal';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { backgroundItems } from '../../data/content';

export default function Background() {
  return (
    <section id="about" className="section background-section">
      <div className="section-inner">
        <SectionTitle
          eyebrow="About"
          title="A calm builder with a strong technical foundation"
          description="I combine product thinking with engineering discipline to create polished apps, secure APIs, and dependable developer workflows."
        />

        <div className="about-grid">
          <Reveal>
            <Card className="about-card">
              <div className="timeline-grid">
                {backgroundItems.map((item) => (
                  <div key={item.title} className="timeline-item">
                    <p className="timeline-item__title">{item.title}</p>
                    <p className="timeline-item__date">{item.date}</p>
                    <p className="timeline-item__text">{item.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal>
            <Card className="about-bio">
              <p className="about-bio__eyebrow">Biography</p>
              <p>
                I am a curious engineer passionate about transforming ideas into reliable, high-quality digital products. My expertise spans modern API architecture, Linux environments, and penetration testing, enabling me to build secure, scalable systems while identifying and addressing vulnerabilities before they become risks. I combine a problem-solving mindset with a strong focus on performance, security, and maintainable design to create technology that users and organizations can depend on.
              </p>
              <div className="about-bio__note">
                Focused on clarity, maintainability, and thoughtful detail in every build.
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}