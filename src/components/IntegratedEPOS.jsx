import Section from './Section';
import { INTEGRATED_EPOS } from '../data/content';

export default function IntegratedEPOS({ onContextSelect }) {
  return (
    <Section id="integrated-epos">
      <div className="section__header">
        <h2 className="section__title">Still Entering Every Payment Twice?</h2>
      </div>

      <div className="epos-flow">
        <div className="epos-flow__col epos-flow__col--without">
          <h3>Without Integrated Payments</h3>
          <ul className="epos-flow__list">
            {INTEGRATED_EPOS.withoutSteps.map((step, i) => (
              <li key={i}>
                <span className="epos-flow__dot" />
                {step}
              </li>
            ))}
          </ul>
        </div>

        <div className="epos-flow__arrow-col">
          <div className="epos-flow__big-arrow">→</div>
        </div>

        <div className="epos-flow__col epos-flow__col--with">
          <h3>With Integrated EPOS</h3>
          <ul className="epos-flow__list epos-flow__list--with">
            {INTEGRATED_EPOS.withSteps.map((step, i) => (
              <li key={i}>
                <span className="epos-flow__check">✓</span>
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="epos-outcome-box">
        <span className="epos-outcome-box__icon">⚡</span>
        <p>{INTEGRATED_EPOS.outcome}</p>
      </div>

      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <button
          className="btn btn--primary btn--lg"
          onClick={() => onContextSelect({ service: 'Integrated EPOS' })}
        >
          {INTEGRATED_EPOS.cta} →
        </button>
      </div>
    </Section>
  );
}
