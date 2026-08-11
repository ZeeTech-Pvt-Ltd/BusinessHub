import { useState } from 'react';
import { FORM_STEPS } from '../data/content';

export default function MultiStepForm({
  prefill = {},
  onClose,
  compact = false,
}) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    service: prefill.service || prefill.machineType || '',
    businessType: prefill.businessType || '',
    postcode: '',
    turnover: '',
    legalEntity: '',
    fullName: '',
    phone: '',
    email: '',
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canContinue = () => {
    if (step === 1) return !!formData.service;
    if (step === 2) return !!formData.businessType;
    if (step === 3) {
      return (
        formData.postcode.trim().length > 0 &&
        !!formData.turnover &&
        !!formData.legalEntity
      );
    }
    if (step === 4) {
      return (
        formData.fullName.trim().length > 0 &&
        formData.phone.trim().length > 0 &&
        formData.email.trim().length > 0
      );
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const renderStep1 = () => (
    <div className="form-step">
      <h4 style={{ marginBottom: 16 }}>{FORM_STEPS.step1.question}</h4>
      <div className="radio-cards">
        {FORM_STEPS.step1.options.map((opt) => (
          <label
            key={opt}
            className={`radio-card ${formData.service === opt ? 'radio-card--selected' : ''}`}
            onClick={() => updateField('service', opt)}
          >
            <span className="radio-card__indicator" />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="form-step">
      <h4 style={{ marginBottom: 16 }}>{FORM_STEPS.step2.question}</h4>
      <div className="radio-cards">
        {FORM_STEPS.step2.options.map((opt) => (
          <label
            key={opt}
            className={`radio-card ${formData.businessType === opt ? 'radio-card--selected' : ''}`}
            onClick={() => updateField('businessType', opt)}
          >
            <span className="radio-card__indicator" />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="form-step">
      <h4 style={{ marginBottom: 16 }}>Where is your business?</h4>
      <div className="form-group">
        <label>Postcode</label>
        <input
          type="text"
          placeholder="e.g. B1 1AA"
          value={formData.postcode}
          onChange={(e) => updateField('postcode', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Approx. Monthly Turnover</label>
        <select
          value={formData.turnover}
          onChange={(e) => updateField('turnover', e.target.value)}
        >
          <option value="">Approx. Monthly Turnover</option>
          <option value="Under £5,000">Under £5,000</option>
          <option value="£5,000 - £10,000">£5,000 - £10,000</option>
          <option value="£10,000–£25,000">£10,000–£25,000</option>
          <option value="£25,000+">£25,000+</option>
          <option value="New business / not sure">New business / not sure</option>
        </select>
      </div>
      <div className="form-group">
        <label>Legal Entity</label>
        <select
          value={formData.legalEntity}
          onChange={(e) => updateField('legalEntity', e.target.value)}
        >
          <option value="">Legal Entity</option>
          <option value="Sole Traders">Sole Traders</option>
          <option value="Limited Companies (Ltd)">Limited Companies (Ltd)</option>
          <option value="Partnerships">Partnerships</option>
          <option value="Limited Liability Partnerships (LLPs)">Limited Liability Partnerships (LLPs)</option>
          <option value="Small and Medium-sized Enterprises (SMEs)">Small and Medium-sized Enterprises (SMEs)</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="form-step">
      <h4 style={{ marginBottom: 16 }}>Where should we send your options?</h4>
      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Your full name"
          value={formData.fullName}
          onChange={(e) => updateField('fullName', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          type="tel"
          placeholder="Your phone number"
          value={formData.phone}
          onChange={(e) => updateField('phone', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="btn btn--primary btn--lg"
        style={{ width: '100%', marginTop: 8 }}
        disabled={!canContinue()}
      >
        Get My Free Quote
      </button>
      <p
        style={{
          textAlign: 'center',
          fontSize: '0.8rem',
          color: '#777',
          marginTop: 12,
        }}
      >
        Free consultation. No obligation to proceed.
      </p>
    </div>
  );

  const renderCurrentStep = () => {
    switch (step) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      default:
        return null;
    }
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '20px 0' }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: 'var(--color-accent)',
            color: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            margin: '0 auto 16px',
          }}
        >
          ✓
        </div>
        <h4 style={{ marginBottom: 8, color: 'var(--color-text)' }}>
          Thank You!
        </h4>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
          Your enquiry has been received. We'll be in touch shortly to discuss
          suitable options.
        </p>
        {onClose && (
          <button
            className="btn btn--primary"
            style={{ marginTop: 20 }}
            onClick={onClose}
          >
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {!compact && (
        <div
          style={{
            display: 'flex',
            gap: 8,
            marginBottom: 20,
          }}
        >
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              style={{
                flex: 1,
                height: 4,
                borderRadius: 2,
                background: s <= step ? 'var(--color-primary)' : '#e0e0e0',
                transition: 'background 0.3s',
              }}
            />
          ))}
        </div>
      )}

      {renderCurrentStep()}

      {step < 4 && (
        <div
          style={{
            display: 'flex',
            gap: 12,
            marginTop: 24,
          }}
        >
          {step > 1 && (
            <button
              type="button"
              className="btn btn--secondary"
              onClick={() => setStep(step - 1)}
            >
              Back
            </button>
          )}
          <button
            type="button"
            className="btn btn--primary"
            style={{ flex: 1 }}
            disabled={!canContinue()}
            onClick={() => setStep(step + 1)}
          >
            {step === 3 ? 'See My Options →' : 'Continue →'}
          </button>
        </div>
      )}
    </form>
  );
}
