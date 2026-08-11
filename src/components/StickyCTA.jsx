import { SITE_INFO } from '../data/content';

export default function StickyCTA({ onContextSelect }) {
  return (
    <div className="sticky-cta">
      <div className="sticky-cta--desktop">
        <a
          href="#card-machines"
          style={{ fontWeight: 600, fontSize: '0.9rem', color: '#555' }}
        >
          Card Machines
        </a>
        <a
          href="#epos-systems"
          style={{ fontWeight: 600, fontSize: '0.9rem', color: '#555' }}
        >
          EPOS
        </a>
        <button
          className="btn btn--secondary btn--sm"
          onClick={() => onContextSelect({ service: 'Review Current Provider' })}
        >
          Review My Provider
        </button>
        <button
          className="btn btn--primary"
          onClick={() => onContextSelect({ service: 'General Enquiry' })}
        >
          Get Free Quote
        </button>
      </div>

      <div className="sticky-cta--mobile">
        <button
          className="btn btn--primary"
          style={{ flex: 1 }}
          onClick={() => onContextSelect({ service: 'General Enquiry' })}
        >
          Get Free Quote
        </button>
        <a
          href={`https://wa.me/${SITE_INFO.phone.replace(/^0/, '44')}`}
          className="btn btn--whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          style={{ flexShrink: 0 }}
        >
          💬 WhatsApp
        </a>
      </div>
    </div>
  );
}
