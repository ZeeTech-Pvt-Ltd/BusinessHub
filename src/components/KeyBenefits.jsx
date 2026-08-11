import Section from './Section';
import { KEY_BENEFITS } from '../data/content';

export default function KeyBenefits({ onContextSelect }) {
  return (
    <Section id="benefits" alt>
      <div className="section__header">
        <p className="section__eyebrow">WHY IT MATTERS</p>
        <h2 className="section__title">
          One Payment Setup. Less Everyday Friction.
        </h2>
      </div>

      <div className="benefits-grid">
        {KEY_BENEFITS.map((benefit, i) => (
          <div key={i} className="benefit-card">
            <div className="benefit-card__icon">
              <span>{benefit.icon}</span>
            </div>
            <div className="benefit-card__content">
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
            <div className="benefit-card__number">{String(i + 1).padStart(2, '0')}</div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 48 }}>
        <button
          className="btn btn--primary btn--lg"
          onClick={() => onContextSelect({ service: 'General Enquiry' })}
        >
          Find the Right Setup →
        </button>
      </div>
    </Section>
  );
}
