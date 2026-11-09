import { ticker } from '../data/site';

export default function Ticker() {
  return (
    <div className="ticker" role="region" aria-label="Hoy en la barra">
      <div className="ticker__inner">
        <p className="ticker__label">Hoy en la barra</p>
        <div className="ticker__window">
          <div className="ticker__track">
            {[0, 1].map((copy) => (
              <ul className="ticker__list" key={copy} aria-hidden={copy === 1}>
                {ticker.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
