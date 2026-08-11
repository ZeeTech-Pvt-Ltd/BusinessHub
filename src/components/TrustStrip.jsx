import { TRUST_STRIP } from '../data/content';

export default function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="container">
        <div className="trust-strip__row">
          {TRUST_STRIP.indicators.map((ind, i) => (
            <div key={i} className="trust-item">
              <span className="trust-item__check">✓</span>
              {ind}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
