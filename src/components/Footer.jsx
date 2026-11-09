import { brand } from '../data/site';
import { HOURS } from '../lib/hours';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__grid">
          <div className="footer__intro">
            <p className="footer__claim">
              Café de tueste propio en Barranco desde {brand.since}.
            </p>
            <a className="footer__ig" href={brand.instagramUrl} target="_blank" rel="noreferrer">
              Seguimos en {brand.instagram}
            </a>
          </div>

          <div className="footer__col">
            <h3>Dirección</h3>
            <p>
              {brand.street}
              <br />
              {brand.district}
            </p>
            <a href={brand.mapsUrl} target="_blank" rel="noreferrer">
              Cómo llegar
            </a>
          </div>

          <div className="footer__col">
            <h3>Horario</h3>
            <p>
              {HOURS.map((row) => (
                <span key={row.key}>
                  {row.short} {row.open}–{row.close}
                  <br />
                </span>
              ))}
            </p>
          </div>

          <div className="footer__col">
            <h3>Contacto</h3>
            <a href={`tel:+${brand.whatsapp}`}>{brand.phone}</a>
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
          </div>
        </div>

        <p className="footer__wordmark" aria-hidden="true">
          {brand.name}
        </p>

        <div className="footer__legal">
          <p>© {new Date().getFullYear()} Lumbre. Tostado en Barranco, Lima.</p>
          <p>Cusco, Cajamarca y Amazonas, en tandas pequeñas.</p>
        </div>
      </div>
    </footer>
  );
}
