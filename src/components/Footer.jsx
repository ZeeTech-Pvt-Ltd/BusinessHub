import { FOOTER } from '../data/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <img
            src="https://britsbusinesshub.net/wp-content/uploads/2026/07/BBH-logoo-footer-2.webp"
            alt="Brits Business Hub"
            style={{ height: 50, margin: '0 auto' }}
          />
        </div>
        <div className="footer__disclaimer">
          <p>{FOOTER.disclaimer}</p>
          <p style={{ marginTop: 16 }}>
            <a href="https://britsbusinesshub.net/privacy-policy/" target="_blank" rel="noopener noreferrer" style={{ color: '#aaa', textDecoration: 'underline' }}>
              Privacy Policy
            </a>
            {' '}·{' '}
            © {new Date().getFullYear()} Brits Business Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
