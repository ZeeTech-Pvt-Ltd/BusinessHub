import { FINAL_CTA } from '../data/content';

export default function FinalCTA({ onContextSelect }) {
  return (
    <section className="final-cta" id="final-cta">
      <div className="container">
        <div className="final-cta__grid">
          <div className="final-cta__left">
            <p className="section__eyebrow" style={{ color: 'var(--color-accent)' }}>
              GET STARTED TODAY
            </p>
            <h2>{FINAL_CTA.headline}</h2>
            <p className="final-cta__lead">
              Whether you need your first card machine, want a better EPOS, or are paying too much — start with a free consultation.
            </p>

            <div className="final-cta__checks">
              {FINAL_CTA.reassurances.map((r, i) => (
                <div key={i} className="final-cta__check-item">
                  <span className="final-cta__check-icon">✓</span>
                  {r}
                </div>
              ))}
            </div>
          </div>

          <div className="final-cta__right">
            <div className="final-cta__card">
              <h3>Ready to Compare Your Options?</h3>
              <div className="final-cta__actions">
                <button
                  className="btn btn--accent btn--lg"
                  style={{ width: '100%' }}
                  onClick={() => onContextSelect({ service: 'General Enquiry' })}
                >
                  {FINAL_CTA.primaryCTA}
                </button>
                <button
                  className="btn btn--outline-white btn--lg"
                  style={{ width: '100%' }}
                  onClick={() => onContextSelect({ service: 'Review Current Provider' })}
                >
                  {FINAL_CTA.secondaryCTA}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
