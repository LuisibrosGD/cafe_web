import { quotes } from '../data/site';

export default function Testimonials() {
  const [lead, ...rest] = quotes;

  return (
    <section className="quotes">
      <div className="shell quotes__grid">
        <div className="quotes__lead">
          <figure>
            <blockquote>{lead.text}</blockquote>
            <figcaption>
              {lead.name}, <span>{lead.origin}</span>
            </figcaption>
          </figure>
          <p className="quotes__rating">
            4,8 en Google, con 312 reseñas.{' '}
            <a href="https://www.google.com/maps" target="_blank" rel="noreferrer">
              Leerlas
            </a>
          </p>
        </div>

        <div className="quotes__side">
          {rest.map((quote) => (
            <figure key={quote.name}>
              <blockquote>{quote.text}</blockquote>
              <figcaption>
                {quote.name}, <span>{quote.origin}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
