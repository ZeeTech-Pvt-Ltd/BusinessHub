import { useState } from 'react';
import Section from './Section';
import { SWITCHER_FUNNEL } from '../data/content';

export default function SwitcherMicroFunnel({ onFormSubmit }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    currentProvider: '',
    turnover: '',
    improvement: '',
    name: '',
    phone: '',
    email: '',
    postcode: '',
  });

  const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onFormSubmit) {
      onFormSubmit();
    }
  };

  return (
    <Section id="switcher-funnel" alt>
      <div className="section__header">
        <h2 className="section__title">{SWITCHER_FUNNEL.headline}</h2>
        <p className="section__subtitle">{SWITCHER_FUNNEL.subtext}</p>
      </div>

      <div className="switcher-funnel">
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                style={{
                  flex: 1,
                  height: 4,
                  borderRadius: 2,
                  background: s <= step ? 'var(--color-primary)' : '#e0e0e0',
                }}
              />
            ))}
          </div>

          {step === 1 && (
            <div className="form-step">
              <h4 style={{ marginBottom: 16 }}>Who is your current provider?</h4>
              <div className="form-group">
                <select
                  value={form.currentProvider}
                  onChange={(e) => update('currentProvider', e.target.value)}
                >
                  <option value="">Select provider...</option>
                  {SWITCHER_FUNNEL.step3.options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="form-step">
              <h4 style={{ marginBottom: 16 }}>{SWITCHER_FUNNEL.step4.question}</h4>
              <div className="radio-cards">
                {SWITCHER_FUNNEL.step4.options.map((opt) => (
                  <label
                    key={opt}
                    className={`radio-card ${form.turnover === opt ? 'radio-card--selected' : ''}`}
                    onClick={() => update('turnover', opt)}
                  >
                    <span className="radio-card__indicator" />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="form-step">
              <h4 style={{ marginBottom: 16 }}>{SWITCHER_FUNNEL.step5.question}</h4>
              <div className="radio-cards">
                {SWITCHER_FUNNEL.step5.options.map((opt) => (
                  <label
                    key={opt}
                    className={`radio-card ${form.improvement === opt ? 'radio-card--selected' : ''}`}
                    onClick={() => update('improvement', opt)}
                  >
                    <span className="radio-card__indicator" />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="form-step">
              <h4 style={{ marginBottom: 16 }}>Your Details</h4>
              {['name', 'phone', 'email', 'postcode'].map((field) => (
                <div className="form-group" key={field}>
                  <label>
                    {field === 'postcode'
                      ? 'Postcode'
                      : field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    placeholder={
                      field === 'email'
                        ? 'your@email.com'
                        : field === 'phone'
                        ? 'Your phone number'
                        : field === 'postcode'
                        ? 'e.g. B1 1AA'
                        : 'Your full name'
                    }
                    value={form[field]}
                    onChange={(e) => update(field, e.target.value)}
                  />
                </div>
              ))}
              <button
                type="submit"
                className="btn btn--primary btn--lg"
                disabled={
                  !form.name.trim() ||
                  !form.phone.trim() ||
                  !form.email.trim() ||
                  !form.postcode.trim()
                }
                style={{ width: '100%', marginTop: 8 }}
              >
                Review My Current Setup
              </button>
              <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#777', marginTop: 12 }}>
                Free • No obligation • We will not contact your existing provider
              </p>
            </div>
          )}

          {step < 4 && (
            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              {step > 1 && (
                <button type="button" className="btn btn--secondary" onClick={() => setStep(step - 1)}>
                  Back
                </button>
              )}
              <button
                type="button"
                className="btn btn--primary"
                style={{ flex: 1 }}
                onClick={() => setStep(step + 1)}
              >
                Continue →
              </button>
            </div>
          )}
        </form>
      </div>
    </Section>
  );
}
