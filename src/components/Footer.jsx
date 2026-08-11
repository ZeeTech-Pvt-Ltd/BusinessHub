import { SITE_INFO, FOOTER } from '../data/content';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer__grid">
          <div>
            <img
              src="https://britsbusinesshub.net/wp-content/uploads/2026/07/BBH-logoo-footer-2.webp"
              alt="Brits Business Hub"
              style={{ height: 50, marginBottom: 16 }}
            />
            <p style={{ fontSize: '0.9rem', marginBottom: 12 }}>
              Card Machines & EPOS for UK Businesses
            </p>
            <p style={{ fontSize: '0.9rem' }}>
              📞 <a href={`tel:${SITE_INFO.phone}`} style={{ display: 'inline', color: '#ccc' }}>{SITE_INFO.phone}</a>
            </p>
            <p style={{ fontSize: '0.9rem' }}>
              ✉️ <a href={`mailto:${SITE_INFO.email}`} style={{ display: 'inline', color: '#ccc' }}>{SITE_INFO.email}</a>
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#card-machines">Card Machines</a>
            <a href="#epos-systems">EPOS Systems</a>
            <a href="#about">About Us</a>
          </div>

          <div>
            <h4>Solutions</h4>
            <a href="#solutions">Card Machines</a>
            <a href="#solutions">EPOS Systems</a>
            <a href="#integrated-epos">Integrated EPOS</a>
            <a href="#switch-provider">Switch Provider</a>
          </div>

          <div>
            <h4>Legal</h4>
            {FOOTER.policies.map((p) => (
              <a key={p.label} href={p.href}>
                {p.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__disclaimer">
          <p>{FOOTER.disclaimer}</p>
          <p style={{ marginTop: 12 }}>
            © {new Date().getFullYear()} {SITE_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
