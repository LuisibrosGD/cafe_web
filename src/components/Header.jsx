import { useEffect, useRef, useState } from 'react';
import { brand } from '../data/site';
import { getShopStatus } from '../lib/hours';

const LINKS = [
  { href: '#carta', label: 'Carta' },
  { href: '#casa', label: 'La casa' },
  { href: '#lugar', label: 'El lugar' },
  { href: '#visitanos', label: 'Visítanos' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [status] = useState(() => getShopStatus());
  const panelRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const previous = document.activeElement;
    document.body.classList.add('is-locked');
    panelRef.current?.querySelector('a, button')?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('is-locked');
      if (previous instanceof HTMLElement && previous !== document.body) previous.focus();
      else toggleRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <div className="site-header__bar shell">
          <a className="brand" href="#inicio" aria-label={`${brand.name}, ir al inicio`}>
            <svg className="brand__mark" viewBox="0 0 100 100" aria-hidden="true">
              <ellipse cx="50" cy="50" rx="16" ry="23" transform="rotate(-32 50 50)" />
              <path d="M50 27c-6 8 6 13 0 23s6 13 0 23" />
            </svg>
            <span className="brand__name">{brand.name}</span>
          </a>

          <nav className="site-nav" aria-label="Principal">
            <ul>
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-header__actions">
            <p className={`status ${status.isOpen ? 'is-open' : ''}`}>
              <span className="status__dot" aria-hidden="true" />
              {status.label}
            </p>
            <a className="btn btn--solid btn--sm site-header__cta" href="#reservar">
              Reservar mesa
            </a>
            <button
              ref={toggleRef}
              type="button"
              className="nav-toggle"
              aria-expanded={open}
              aria-controls="nav-movil"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? 'Cerrar' : 'Menú'}
            </button>
          </div>
        </div>
      </header>

      <div
        ref={panelRef}
        id="nav-movil"
        className={`nav-panel ${open ? 'is-open' : ''}`}
        hidden={!open}
      >
        <ul className="nav-panel__links">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#reservar" onClick={() => setOpen(false)}>
              Reservar mesa
            </a>
          </li>
        </ul>

        <div className="nav-panel__foot">
          <p>{status.label}</p>
          <p>
            {brand.street}, {brand.district}
          </p>
          <a href={`mailto:${brand.email}`}>{brand.email}</a>
        </div>
      </div>
    </>
  );
}
