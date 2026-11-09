import { useState } from 'react';
import { brand } from '../data/site';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }
    setDone(true);
  };

  return (
    <section className="letters section">
      <div className="shell letters__grid">
        <div className="letters__copy">
          <h2>Cartas de la casa</h2>
          <p>
            Un correo al mes: qué grano entró, qué se horneó y qué taller hay. Nada más, y se
            puede responder.
          </p>
        </div>

        <div className="letters__side">
          {done ? (
            <p className="letters__done" role="status">
              Listo. Te escribimos el primer martes del mes, cuando sale el tueste nuevo.
            </p>
          ) : (
            <form className="letters__form" onSubmit={handleSubmit}>
              <label className="visually-hidden" htmlFor="news-email">
                Tu correo
              </label>
              <input
                id="news-email"
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="tu@correo.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button type="submit" className="btn btn--solid">
                Suscribirme
              </button>
            </form>
          )}

          <p className="letters__ig">
            También colgamos todo en{' '}
            <a href={brand.instagramUrl} target="_blank" rel="noreferrer">
              Instagram, {brand.instagram}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
