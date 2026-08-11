import Section from './Section';
import { PAIN_POINTS } from '../data/content';

export default function PainPoints({ onContextSelect }) {
  return (
    <Section id="pain-points" alt>
      <div className="section__header">
        <p className="section__eyebrow">PAIN POINTS</p>
        <h2 className="section__title">
          Is Your Current Payment Setup Holding Your Business Back?
        </h2>
        <p className="section__subtitle">
          Many UK businesses are overpaying without realising it. See if any of these sound familiar.
        </p>
      </div>
      <div className="pain-grid">
        {PAIN_POINTS.map((item, i) => (
          <div key={i} className="pain-card">
            <div className="pain-card__icon-wrap">
              {item.icon}
            </div>
            <div className="pain-card__body">
              <h3 className="pain-card__title">{item.title}</h3>
              <p className="pain-card__desc">{item.description}</p>
              <button
                className="pain-card__cta"
                onClick={() => onContextSelect(item.context)}
              >
                {item.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
