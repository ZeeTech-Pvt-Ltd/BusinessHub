import { SITE_INFO } from '../data/content';

export default function ThankYou({ onBack }) {
  return (
    <div className="thankyou">
      <div className="container">
        <div className="thankyou__card">
          <div className="thankyou__check">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h1>Thank You!</h1>
          <p className="thankyou__subtitle">
            Your enquiry has been received. One of our payment specialists will review your requirements and get back to you shortly.
          </p>

          <div className="thankyou__info">
            <div className="thankyou__info-item">
              <span className="thankyou__label">What happens next?</span>
              <p>We'll review your business needs and match you with suitable card machine or EPOS options. You'll receive a call or email within 1-2 business days.</p>
            </div>
            <div className="thankyou__info-item">
              <span className="thankyou__label">No obligation</span>
              <p>The consultation is completely free and there is no obligation to proceed with any provider.</p>
            </div>
          </div>

          <div className="thankyou__actions">
            <button className="btn btn--primary btn--lg" onClick={onBack}>
              ← Back to Home
            </button>
            <a href={`tel:${SITE_INFO.phone}`} className="btn btn--accent btn--lg">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call {SITE_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
