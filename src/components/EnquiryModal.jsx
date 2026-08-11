import MultiStepForm from './MultiStepForm';

export default function EnquiryModal({ prefill, onClose, onFormSubmit }) {
  if (!prefill) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          ✕
        </button>
        <h3 style={{ marginBottom: 8 }}>Get Your Free Quote</h3>
        {prefill.service && (
          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--color-primary)',
              fontWeight: 600,
              marginBottom: 20,
            }}
          >
            You selected: {prefill.service}
          </p>
        )}
        {prefill.businessType && (
          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--color-primary)',
              fontWeight: 600,
              marginBottom: 20,
            }}
          >
            Business type: {prefill.businessType}
          </p>
        )}
        {prefill.reason && (
          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--color-primary)',
              fontWeight: 600,
              marginBottom: 20,
            }}
          >
            Reason: {prefill.reason}
          </p>
        )}
        <MultiStepForm prefill={prefill} onClose={onClose} compact onFormSubmit={onFormSubmit} />
      </div>
    </div>
  );
}
