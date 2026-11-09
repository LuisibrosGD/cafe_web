import { brand } from '../data/site';
import { getShopStatus } from '../lib/hours';
import Stamp from './Stamp';

export default function Hero() {
  const status = getShopStatus();

  return (
    <section className="hero" id="inicio">
      <div className="shell hero__grid">
        <h1 className="hero__title">
          <span className="line">
            <span>Tueste lento,</span>
          </span>
          <span className="line">
            <span>sobremesa larga.</span>
          </span>
        </h1>

        <div className="hero__copy">
          <p className="hero__lede">
            Tostamos en casa granos de Cusco y Cajamarca, molemos al momento y servimos sin prisa.
            Si te quedas hasta las cinco, mejor.
          </p>

          <div className="hero__actions">
            <a className="btn btn--solid" href="#carta">
              Ver la carta
            </a>
            <a className="btn btn--text" href="#reservar">
              Reservar mesa
            </a>
          </div>

          <div className="hero__meta">
            <p className="hero__address">
              {brand.street}, {brand.district}
            </p>
            <p className="hero__hours">
              Hoy, {status.today.open}–{status.today.close}
            </p>
          </div>
        </div>

        <figure className="hero__figure">
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&h=1040&q=80"
            alt="Tres capuchinos con latte art entre plantas, sobre una mesa de madera"
            width="800"
            height="1040"
            fetchPriority="high"
          />
          <Stamp />
        </figure>
      </div>
    </section>
  );
}
