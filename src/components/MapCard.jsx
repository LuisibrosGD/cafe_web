import { brand } from '../data/site';

export default function MapCard() {
  return (
    <div className="map-card" data-reveal>
      <div className="map-card__canvas">
        <svg
          viewBox="0 0 600 380"
          role="img"
          aria-label="Mapa ilustrado: Calle Berlín 245, a dos cuadras de la Plaza de Barranco y cerca del malecón."
        >
          <rect width="600" height="380" fill="#f6eddb" />

          <path d="M0 0h104c14 74-28 142-8 214 14 52-18 104-4 166H0Z" fill="#d9e2d7" />
          <path
            d="M104 0c14 74-28 142-8 214 14 52-18 104-4 166"
            fill="none"
            stroke="#c6d1c4"
            strokeWidth="1.5"
          />
          <path d="M92 332l38-12M92 344l38-12" stroke="#c6d1c4" strokeWidth="2" />

          <g stroke="#e6d3b0" strokeWidth="15" strokeLinecap="square">
            <path d="M92 380 522 0" />
            <path d="M60 88h540" />
            <path d="M50 200h550" />
            <path d="M44 312h556" />
          </g>

          <g stroke="#e2cfab" strokeWidth="8" strokeLinecap="square">
            <path d="M195 0v380" />
            <path d="M330 0v380" />
            <path d="M470 0v380" />
          </g>

          <g stroke="#eeddbe" strokeWidth="5" strokeLinecap="square">
            <path d="M262 0v380" />
            <path d="M400 0v380" />
            <path d="M545 0v380" />
            <path d="M60 145h540" />
            <path d="M50 256h550" />
            <path d="M44 352h556" />
          </g>

          <rect x="342" y="96" width="66" height="48" rx="4" fill="#e0cfac" />
          <circle cx="358" cy="112" r="5.5" fill="#a4b399" />
          <circle cx="380" cy="132" r="4.5" fill="#a4b399" />

          <g fill="#5d4738" fontFamily="Karla, sans-serif" letterSpacing="1.8">
            <text x="212" y="318" fontSize="11.5" transform="rotate(-42 212 318)">
              Calle Berlín
            </text>
            <text x="330" y="74" fontSize="10" letterSpacing="1.2">
              Plaza de Barranco
            </text>
            <text x="392" y="272" fontSize="12" letterSpacing="3.6" opacity="0.6">
              Barranco
            </text>
            <text
              x="40"
              y="238"
              transform="rotate(-82 40 238)"
              fontSize="9.5"
              letterSpacing="1.8"
              opacity="0.75"
            >
              Malecón
            </text>
          </g>

          <g transform="translate(307 192)">
            <ellipse cx="0" cy="1" rx="9" ry="3" fill="rgba(36,26,18,0.14)" />
            <path
              d="M0 0C-8.5-11-11.5-17-11.5-23a11.5 11.5 0 0 1 23 0c0 6-3 12-11.5 23Z"
              fill="#6b2a21"
            />
            <circle cx="0" cy="-23" r="4.2" fill="#f7efe1" />
          </g>
        </svg>
      </div>

      <div className="map-card__foot">
        <p>{brand.street}, Barranco</p>
        <a href={brand.mapsUrl} target="_blank" rel="noreferrer">
          Abrir en Google Maps
        </a>
      </div>
    </div>
  );
}
