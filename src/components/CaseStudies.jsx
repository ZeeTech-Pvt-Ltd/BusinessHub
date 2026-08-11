import Section from './Section';
import { CASE_STUDIES } from '../data/content';

export default function CaseStudies({ onContextSelect }) {
  return (
    <Section id="case-studies" alt>
      <div className="section__header">
        <p className="section__eyebrow">CASE STUDIES</p>
        <h2 className="section__title">
          Real Businesses. Real Payment Challenges. Better Setups.
        </h2>
      </div>

      <div className="case-grid">
        {CASE_STUDIES.map((cs, i) => (
          <div
            key={i}
            className="case-card"
            onClick={() =>
              onContextSelect({
                businessType: cs.businessType,
                service: `${cs.location} ${cs.businessType}`,
              })
            }
          >
            <div className="case-card__location">
              <span className="case-card__pin">📍</span>
              {cs.location} — {cs.businessType}
            </div>

            <div className="case-card__section">
              <span className="case-card__label case-card__label--problem">Problem</span>
              <p>{cs.challenge}</p>
            </div>

            <div className="case-card__section">
              <span className="case-card__label case-card__label--solution">Solution</span>
              <p>{cs.solution}</p>
            </div>

            <div className="case-card__outcome">
              <span className="case-card__outcome-icon">✓</span>
              <p>{cs.outcome}</p>
            </div>

            <button
              className="case-card__cta"
              onClick={(e) => {
                e.stopPropagation();
                onContextSelect({
                  businessType: cs.businessType,
                  service: `${cs.location} ${cs.businessType}`,
                });
              }}
            >
              {cs.cta} →
            </button>
          </div>
        ))}
      </div>
    </Section>
  );
}
