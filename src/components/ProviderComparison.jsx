import Section from './Section';
import { PROVIDER_COMPARISON } from '../data/content';

export default function ProviderComparison({ onContextSelect }) {
  return (
    <Section id="provider-comparison">
      <div className="section__header">
        <h2 className="section__title">What Could You Improve?</h2>
      </div>

      <div className="compare-box">
        <div className="compare-box__header">
          <span>Current Setup</span>
          <span className="compare-box__vs">VS</span>
          <span>Alternative</span>
        </div>
        <div className="compare-box__body">
          {PROVIDER_COMPARISON.map((row, i) => (
            <div key={i} className="compare-line">
              <span className="compare-line__current">{row.current}</span>
              <span className="compare-line__arrow">→</span>
              <span className="compare-line__better">{row.alternative}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <button
          className="btn btn--primary btn--lg"
          onClick={() =>
            onContextSelect({ service: 'Compare My Current Provider' })
          }
        >
          Compare My Current Provider →
        </button>
        <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: 10 }}>
          Free review • No obligation to switch
        </p>
      </div>
    </Section>
  );
}
