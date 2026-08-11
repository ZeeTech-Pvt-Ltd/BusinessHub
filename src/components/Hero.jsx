import { HERO } from '../data/content';
import MultiStepForm from './MultiStepForm';

export default function Hero({ onOpenModal, onContextSelect }) {
  return (
    <section className="hero" id="home">
      <div className="hero__video-wrapper">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster=""
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay" />
      </div>

      <div className="hero__glow" />

      <div className="container hero__container">
        <div className="hero__inner">
          <div className="hero__content">
            <span className="hero__badge">
              <span className="hero__badge-dot" />
              Trusted by UK Businesses
            </span>

            <h1>{HERO.headline}</h1>

            <p className="hero__lead">{HERO.subtext}</p>

            <p className="hero__subtext-secondary">
              {HERO.subtextSecondary}
            </p>

            <div className="hero__divider">
              <span />
            </div>

            <ul className="hero__benefits">
              {HERO.benefits.map((b, i) => (
                <li key={i}>
                  <span className="hero__check">✓</span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="hero__ctas">
              <button
                className="btn btn--accent btn--lg"
                onClick={() =>
                  onContextSelect({ service: 'General Enquiry' })
                }
              >
                {HERO.primaryCTA}
              </button>
              <button
                className="btn btn--outline-white btn--lg"
                onClick={() =>
                  onContextSelect({ service: 'Review Current Provider' })
                }
              >
                {HERO.secondaryCTA}
              </button>
            </div>

            <p className="hero__reassurance">
              {HERO.reassurance}
            </p>

            <div className="hero__review-badges">
              <img
                src="https://britsbusinesshub.net/wp-content/uploads/2026/07/google-reviews-1-scaled_11zon-1.webp"
                alt="Google Reviews"
                className="hero__review-badge"
              />
              <img
                src="https://britsbusinesshub.net/wp-content/uploads/2026/07/trust-reviews-1.webp"
                alt="Trustpilot Reviews"
                className="hero__review-badge"
              />
            </div>
          </div>

          <div className="hero__form-col">
            <div className="hero__form-badge">
              ⚡ Takes less than 60 seconds
            </div>
            <div className="hero__form-wrapper">
              <h3>Get Your Free Quote</h3>
              <p className="hero__form-subtitle">
                Answer a few quick questions and we'll find the best options for your business.
              </p>
              <MultiStepForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
