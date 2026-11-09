import { brand } from '../data/site';
import { HOURS, getShopStatus } from '../lib/hours';
import MapCard from './MapCard';

export default function Visit() {
  const status = getShopStatus();

  return (
    <section className="visit section" id="visitanos">
      <div className="shell">
        <div className="visit__head">
          <h2>Visítanos</h2>
          <p>
            A cinco minutos de la Plaza de Barranco. No tenemos estacionamiento propio: en la
            cuadra 3 de Unión hay una cochera que cobra por hora.
          </p>
        </div>

        <div className="visit__grid">
          <div className="visit__info">
            <table className="hours">
              <caption className="visually-hidden">Horario de atención</caption>
              <tbody>
                {HOURS.map((row) => {
                  const isToday = row.key === status.todayKey;
                  return (
                    <tr key={row.key} data-today={isToday}>
                      <th scope="row">
                        {row.label}
                        {isToday ? <span className="hours__today">hoy</span> : null}
                      </th>
                      <td>
                        {row.open} – {row.close}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <address className="visit__address">
              <span>{brand.street}</span>
              <span>{brand.district}</span>
              <a href={brand.mapsUrl} target="_blank" rel="noreferrer">
                Cómo llegar
              </a>
            </address>

            <div className="visit__contact">
              <a href={`tel:+${brand.whatsapp}`}>{brand.phone}</a>
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
            </div>

            <p className="visit__note">
              Para grupos de nueve o más, escríbenos por WhatsApp y armamos la mesa larga.
            </p>
          </div>

          <div className="visit__map">
            <MapCard />
            <p className="visit__map-note">
              Calle Berlín 245, a dos cuadras de la plaza. La puerta es la de madera verde.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
