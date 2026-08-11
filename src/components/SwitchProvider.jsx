import Section from './Section';
import { SWITCHER_INTRO, SWITCH_PAIN_POINTS } from '../data/content';

export default function SwitchProvider({ onContextSelect }) {
  return (
    <Section id="switch-provider" alt>
      <div className="section__header">
        <p className="section__eyebrow">SWITCHING PROVIDER?</p>
        <h2 className="section__title">{SWITCHER_INTRO.headline}</h2>
        <p className="section__subtitle">{SWITCHER_INTRO.subheadline}</p>
      </div>

      <div className="switch-layout">
        <div className="switch-left">
          <p className="switch-intro">{SWITCHER_INTRO.body[0]}</p>
          <p className="switch-label">{SWITCHER_INTRO.body[1]}</p>

          <div className="switch-checklist">
            {SWITCHER_INTRO.painList.map((item, i) => (
              <div key={i} className="switch-check-item">
                <span className="switch-check-dot" />
                {item}
              </div>
            ))}
          </div>

          <div className="switch-warning">
            <span className="switch-warning-icon">!</span>
            <p>{SWITCHER_INTRO.warning}</p>
          </div>
        </div>

        <div className="switch-right">
          {SWITCH_PAIN_POINTS.map((item, i) => (
            <div key={i} className="switch-card">
              <div className="switch-card__num">0{i + 1}</div>
              <h3>{item.title}</h3>
              <p className="switch-card__problem">{item.problem}</p>
              <div className="switch-card__solution">
                <span className="switch-card__solution-icon">→</span>
                {item.solution}
              </div>
              <button
                className="switch-card__cta"
                onClick={() => onContextSelect(item.context)}
              >
                {item.cta} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
