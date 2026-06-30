import './Certificate.css';
import { useState } from 'react';
import Card from '../../components/Card/Card';
import Reveal from '../../components/Reveal/Reveal';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { certificates } from '../../data/content';

export default function Certifcate() {
  const [activeCertificate, setActiveCertificate] = useState<(typeof certificates)[number] | null>(null);

  return (
    <section id="certificates" className="section certificate-section">
      <div className="section-inner">
        <SectionTitle
          eyebrow="Certificates"
          title="A growing record of focused learning"
          description="Each credential reflects a focused step in my growth across software engineering, data, and security."
        />

        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <Reveal key={certificate.title}>
              <button type="button" className="certificate-card__button" onClick={() => setActiveCertificate(certificate)}>
                <Card className="certificate-card">
                  <img src={certificate.image} alt={certificate.title} className="certificate-card__image" />
                  <div className="certificate-card__body">
                    <p className="certificate-card__title">{certificate.title}</p>
                    <p className="certificate-card__issuer">{certificate.issuer}</p>
                  </div>
                </Card>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeCertificate ? (
        <div className="modal-backdrop" onClick={() => setActiveCertificate(null)}>
          <div className="modal-card" onClick={(event) => event.stopPropagation()}>
            <div className="modal-card__header">
              <p>{activeCertificate.title}</p>
              <button type="button" onClick={() => setActiveCertificate(null)}>
                Close
              </button>
            </div>
            <img src={activeCertificate.image} alt={activeCertificate.title} className="modal-card__image" />
            <p className="modal-card__description">{activeCertificate.description}</p>
          </div>
        </div>
      ) : null}
    </section>
  );
}