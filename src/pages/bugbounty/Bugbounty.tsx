import './BugBounty.css';
import Card from '../../components/Card/Card';
import Reveal from '../../components/Reveal/Reveal';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { bugBountyReports } from '../../data/content';
import securityReportImage from '../../assets/images/bugbounty/security-report.svg';

export default function Bugbounty() {
  return (
    <section id="bug-bounty" className="section bounty-section">
      <div className="section-inner">
        <SectionTitle
          eyebrow="Bug Bounty"
          title="Security reports and responsible disclosure"
          description="A short timeline of findings and the impact they helped improve."
        />

        <div className="bounty-hero">
          <img
            src={securityReportImage}
            alt="Security reports and responsible disclosure illustration"
            className="bounty-hero__image"
          />
        </div>

        <div className="bounty-list">
          {bugBountyReports.map((item) => (
            <Reveal key={item.platform}>
              <Card className="bounty-card">
                <img src={item.image} alt={`${item.platform} logo`} className="bounty-card__image" />
                <div className="bounty-card__main">
                  <div className="bounty-card__title-row">
                    <p className="bounty-card__platform">{item.platform}</p>
                    <span className="bounty-card__severity">{item.severity}</span>
                  </div>
                  <p className="bounty-card__date">{item.date}</p>
                  <p className="bounty-card__description">{item.description}</p>
                </div>
                <div className="bounty-card__reward">Reward {item.reward}</div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}