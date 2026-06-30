import './SectionTitle.css';

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
};

export default function SectionTitle({ eyebrow, title, description, centered = false }: SectionTitleProps) {
  return (
    <div className={`section-title ${centered ? 'section-title--centered' : ''}`.trim()}>
      <p className="section-title__eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
