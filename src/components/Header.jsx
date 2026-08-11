import { SITE_INFO } from '../data/content';

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#home" className="header__logo">
          <img
            src="https://britsbusinesshub.net/wp-content/uploads/2026/07/BBH-logo-1.webp"
            alt="Brits Business Hub"
            className="header__logo-img"
          />
        </a>

        <a href={`tel:${SITE_INFO.phone}`} className="header__phone">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          {SITE_INFO.phone}
        </a>
      </div>
    </header>
  );
}
