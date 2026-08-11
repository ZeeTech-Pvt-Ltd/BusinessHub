import Section from './Section';
import { CARD_MACHINE_TYPES } from '../data/content';

const terminalIcons = [
  <svg key="1" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>,
  <svg key="2" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="2" width="18" height="20" rx="3"/><line x1="3" y1="8" x2="21" y2="8"/><line x1="7" y1="16" x2="17" y2="16"/></svg>,
  <svg key="3" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="5" y1="6" x2="19" y2="6"/><line x1="9" y1="16" x2="15" y2="16"/></svg>,
];

export default function CardMachineTypes({ onContextSelect }) {
  return (
    <Section id="card-machines">
      <div className="section__header">
        <p className="section__eyebrow">TERMINAL TYPES</p>
        <h2 className="section__title">
          Choose a Terminal That Matches How You Take Payments
        </h2>
      </div>

      <div className="terminal-grid">
        {CARD_MACHINE_TYPES.map((type, i) => (
          <div
            key={type.id}
            className="terminal-card"
            onClick={() => onContextSelect({ service: type.title })}
          >
            <div className="terminal-card__header">
              <div className="terminal-card__icon">{terminalIcons[i]}</div>
              <div>
                <h3>{type.title}</h3>
                <p className="terminal-card__tagline">{type.subtitle}</p>
              </div>
            </div>

            {type.description && (
              <p className="terminal-card__desc">{type.description}</p>
            )}

            {type.idealFor.length > 0 && (
              <div className="terminal-card__tags">
                {type.idealFor.map((item, j) => (
                  <span key={j} className="terminal-tag">{item}</span>
                ))}
              </div>
            )}

            <button
              className="btn btn--primary"
              onClick={(e) => {
                e.stopPropagation();
                onContextSelect({ service: type.title });
              }}
            >
              {type.cta} →
            </button>
          </div>
        ))}
      </div>

      <div className="conversion-break">
        <h3>Not Sure Which Machine Fits Your Business?</h3>
        <p>
          Tell us how you take payments and we'll help identify suitable options.
        </p>
        <button
          className="btn btn--accent btn--lg"
          onClick={() => onContextSelect({ service: 'Help Me Choose' })}
        >
          Help Me Choose →
        </button>
      </div>
    </Section>
  );
}
