import { useState } from 'react';
import Section from './Section';
import { FAQS } from '../data/content';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Section id="faq">
      <div className="section__header">
        <h2 className="section__title">Questions Before You Get Started?</h2>
      </div>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        {FAQS.map((faq, i) => (
          <div key={i} className="accordion">
            <button
              className="accordion__trigger"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span>{faq.q}</span>
              <span
                className={`accordion__icon ${openIndex === i ? 'accordion__icon--open' : ''}`}
              >
                +
              </span>
            </button>
            <div
              className={`accordion__content ${openIndex === i ? 'accordion__content--open' : ''}`}
            >
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
