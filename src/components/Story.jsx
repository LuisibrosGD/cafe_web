import { facts } from '../data/site';

export default function Story() {
  return (
    <section className="story section" id="casa">
      <div className="shell story__grid">
        <div className="story__copy">
          <h2>Una mesa larga y una tostadora de segunda mano.</h2>
          <p>
            En 2016 alquilamos un local con piso de madera gastada en la esquina de Berlín.
            Trajimos una tostadora usada, dos molinos y una mesa de pino que Rosa rescató de una
            quinta en Chorrillos.
          </p>
          <p>
            Hoy tostamos cada martes lotes pequeños de Cusco, Cajamarca y Amazonas. La carta cambia
            con la cosecha, no con la temporada de marketing.
          </p>

          <blockquote className="story__quote">
            «El café no se apura. Nosotros tampoco.»
            <cite>Rosa Quispe, barista y dueña</cite>
          </blockquote>

          <ul className="story__facts">
            {facts.map(([label, value]) => (
              <li key={label}>
                <span>{label}</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>

        <figure className="story__figure" data-reveal>
          <img
            src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=900&h=1100&q=80"
            alt="La barra de Lumbre, con su pizarra de tiza y lámparas colgantes"
            width="900"
            height="1100"
            loading="lazy"
          />
          <figcaption>La barra, un martes antes de abrir.</figcaption>
        </figure>
      </div>
    </section>
  );
}
