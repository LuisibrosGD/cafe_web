import { menu } from '../data/site';
import { waLink } from '../lib/links';

const GRAIN_MESSAGE =
  'Hola Lumbre, quiero pedir una bolsa de 250 g. ¿Qué tueste tienen esta semana?';

export default function MenuSection() {
  return (
    <section className="menu-block" id="carta">
      <div className="shell">
        <div className="menu-block__head">
          <h2>La carta</h2>
          <p>
            Cambia con la cosecha. Si es tu primera vez, pide el filtrado del día y pregunta de
            dónde viene: alguien te va a contar todo.
          </p>
        </div>

        <div className="menu-block__body">
          <div className="menu-block__groups">
            {menu.map((group) => (
              <section className="menu-group" key={group.key}>
                <h3>{group.title}</h3>
                <p className="menu-group__note">{group.note}</p>
                <ul className="dishes">
                  {group.items.map((item) => (
                    <li className="dish" key={item.name}>
                      <div className="dish__row">
                        <span className="dish__name">{item.name}</span>
                        <span className="dish__leader" aria-hidden="true" />
                        <span className="dish__price">{item.price}</span>
                      </div>
                      {item.note ? <p className="dish__note">{item.note}</p> : null}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <aside className="grain-card" data-reveal>
            <img
              src="https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&w=700&h=560&q=80"
              alt="Saco de yute abierto con granos de café recién tostados"
              width="700"
              height="560"
              loading="lazy"
            />
            <div className="grain-card__body">
              <h3>Grano para casa</h3>
              <p>Tostado esta semana. Bolsa de 250 g en grano o molida a pedido.</p>
              <p className="grain-card__price">S/ 38</p>
              <a
                className="btn btn--light"
                href={waLink(GRAIN_MESSAGE)}
                target="_blank"
                rel="noreferrer"
              >
                Pedir por WhatsApp
              </a>
            </div>
          </aside>
        </div>

        <p className="menu-block__foot">
          Leche de avena o almendra, +2. Precios en soles, IGV incluido.
        </p>
      </div>
    </section>
  );
}
