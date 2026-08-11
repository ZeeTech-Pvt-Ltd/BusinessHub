import { COMMERCIAL_OFFERS } from '../data/content';

export default function CommercialOffer({ onContextSelect }) {
  return (
    <div className="offers-section">
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow" style={{ color: 'var(--color-accent)' }}>PRICING & OPTIONS</p>
          <h2 className="section__title" style={{ color: '#fff' }}>
            Payment Options Built Around Your Business
          </h2>
        </div>

        <div className="offer-grid">
          {COMMERCIAL_OFFERS.map((offer, i) => (
            <div
              key={i}
              className="offer-card"
              onClick={() => onContextSelect({ service: offer.title })}
            >
              <h3 className="offer-card__title">{offer.title}</h3>
              <p className="offer-card__subtitle">Available options can include:</p>
              <ul className="offer-card__list">
                {offer.features.map((f, j) => (
                  <li key={j}>
                    <span className="offer-card__check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className="btn btn--accent"
                onClick={(e) => {
                  e.stopPropagation();
                  onContextSelect({ service: offer.title });
                }}
              >
                {offer.cta} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
