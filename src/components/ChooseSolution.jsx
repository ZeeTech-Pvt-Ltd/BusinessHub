import Section from './Section';
import { SOLUTIONS } from '../data/content';

const images = [
  '/images/card-machine.jpg',
  '/images/epos-system.jpg',
  '/images/integrated.png',
];

export default function ChooseSolution({ onContextSelect }) {
  return (
    <Section id="solutions">
      <div className="section__header">
        <h2 className="section__title">What Does Your Business Need?</h2>
      </div>

      <div className="grid-3">
        {SOLUTIONS.map((sol, i) => (
          <div
            key={sol.id}
            className="solution-card"
            onClick={() =>
              onContextSelect({
                service: sol.id === 'integrated' ? 'Card Machine + EPOS' : sol.title,
              })
            }
          >
            <div className="solution-card__img">
              <img src={images[i]} alt={sol.title} />
            </div>

            <div className="solution-card__body">
              <h3>{sol.title}</h3>
              <p className="solution-card__subtitle">{sol.subtitle}</p>
              <p className="solution-card__desc">{sol.description}</p>

              {sol.features.length > 0 && (
                <ul className="check-list">
                  {sol.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
              )}

              <button
                className="btn btn--primary"
                onClick={(e) => {
                  e.stopPropagation();
                  onContextSelect({
                    service: sol.id === 'integrated' ? 'Card Machine + EPOS' : sol.title,
                  });
                }}
              >
                {sol.cta} →
              </button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
