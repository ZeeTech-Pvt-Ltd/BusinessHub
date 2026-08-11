import { HOW_IT_WORKS } from '../data/content';

export default function HowItWorks({ onContextSelect }) {
  return (
    <div className="steps-section">
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">HOW IT WORKS</p>
          <h2 className="section__title">Get Started in Four Simple Steps</h2>
        </div>

        <div className="steps-row">
          {HOW_IT_WORKS.map((item, i) => (
            <div key={item.step} className="step-block">
              <div className="step-block__num">{item.step}</div>
              <div className="step-block__content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              {i < HOW_IT_WORKS.length - 1 && (
                <div className="step-block__connector">
                  <span className="step-block__arrow">→</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <button
            className="btn btn--accent btn--lg"
            onClick={() => onContextSelect({ service: 'General Enquiry' })}
          >
            Start My Free Consultation →
          </button>
        </div>
      </div>
    </div>
  );
}
