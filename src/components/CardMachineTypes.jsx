import Section from './Section';
import { CARD_MACHINE_TYPES } from '../data/content';

const images = [
  '/images/countertop-card.webp',
  '/images/portable-card.webp',
  '/images/mobile-card.jpg',
];

export default function CardMachineTypes({ onContextSelect }) {
  return (
    <Section id="card-machines">
      <div className="section__header">
        <h2 className="section__title">
          Which Card Machine Is Right for Your Business?
        </h2>
        <p className="section__subtitle">
          The right machine depends on how and where you take payments. Choose from countertop, portable, or mobile options.
        </p>
      </div>

      <div className="terminal-grid">
        {CARD_MACHINE_TYPES.map((type, i) => (
          <div
            key={type.id}
            className="terminal-card"
            onClick={() => onContextSelect({ service: type.title })}
          >
            <div className="terminal-card__img">
              <img src={images[i]} alt={type.title} />
            </div>

            <div className="terminal-card__header">
              <h3>{type.title}</h3>
              <p className="terminal-card__tagline">{type.subtitle}</p>
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
