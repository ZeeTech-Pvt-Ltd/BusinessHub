import Section from './Section';
import { WHY_CHOOSE_US } from '../data/content';

export default function WhyChooseUs({ onContextSelect }) {
  return (
    <Section id="about" alt>
      <div className="section__header">
        <p className="section__eyebrow">WHY BRITS BUSINESS HUB</p>
        <h2 className="section__title">
          Payment Solutions Without Unnecessary Complexity.
        </h2>
      </div>

      <div className="why-list">
        {WHY_CHOOSE_US.map((item, i) => (
          <div key={i} className={`why-item ${i % 2 === 1 ? 'why-item--reverse' : ''}`}>
            <div className="why-item__icon">
              <span>{item.icon}</span>
            </div>
            <div className="why-item__content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 48 }}>
        <button
          className="btn btn--primary btn--lg"
          onClick={() => onContextSelect({ service: 'General Enquiry' })}
        >
          Talk to a Payment Specialist →
        </button>
      </div>
    </Section>
  );
}
