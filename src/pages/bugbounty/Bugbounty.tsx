import './BugBounty.css';
import Card from '../../components/Card/Card';
import Reveal from '../../components/Reveal/Reveal';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { bugBountyReports } from '../../data/content';

export default function Bugbounty() {
  return (
    <section id="bug-bounty" className="section bounty-section">
      <div className="section-inner">
        <SectionTitle
          eyebrow="Bug Bounty"
          title="Security reports and responsible disclosure"
          description="A short timeline of findings and the impact they helped improve."
        />

        <div className="bounty-grid">
          {bugBountyReports.map((item) => (
            <Reveal key={item.platform}>
              <Card className="bounty-card">
                <img src={item.image} alt={`${item.platform} logo`} className="bounty-card__image" />
                <div className="bounty-card__body">
                  <div className="bounty-card__header">
                    <h3>{item.platform}</h3>
                    <span className="bounty-card__severity">{item.severity}</span>
                  </div>
                  <p className="bounty-card__description">{item.description}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}