import { useRef, useState } from 'react';
import { brand } from '../data/site';
import { formatLimaDate, todayInLima } from '../lib/hours';
import { waLink } from '../lib/links';

const TIMES = Array.from({ length: 26 }, (_, index) => {
  const minutes = 7 * 60 + index * 30;
  const hours = String(Math.floor(minutes / 60)).padStart(2, '0');
  const rest = String(minutes % 60).padStart(2, '0');
  return `${hours}:${rest}`;
});

const PEOPLE = ['1', '2', '3', '4', '5', '6', '7', '8', '9 o más'];

export default function Reserve() {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: '',
    people: '2',
    date: '',
    time: '10:00',
    note: '',
  });
  const [sent, setSent] = useState(false);
  const [waUrl, setWaUrl] = useState('');

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formRef.current?.checkValidity()) {
      formRef.current?.reportValidity();
      return;
    }

    const lines = [
      'Hola Lumbre, quiero reservar una mesa.',
      '',
      `Nombre: ${form.name.trim()}`,
      `Personas: ${form.people}`,
      `Día: ${formatLimaDate(form.date)}`,
      `Hora: ${form.time}`,
    ];

    if (form.note.trim()) lines.push(`Nota: ${form.note.trim()}`);

    const url = waLink(lines.join('\n'));
    setWaUrl(url);
    setSent(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const reset = () => {
    setSent(false);
    setForm({ name: '', people: '2', date: '', time: '10:00', note: '' });
  };

  const firstName = form.name.trim().split(' ')[0];

  return (
    <section className="reserve section" id="reservar">
      <div className="shell reserve__grid">
        <div className="reserve__copy">
          <h2>Guardamos tu mesa.</h2>
          <p>
            Déjanos los datos y te confirmamos por WhatsApp. Solemos responder en menos de una
            hora, mientras la barra esté abierta.
          </p>
          <p className="reserve__small">
            Reservas con dos horas de anticipación. Para nueve personas o más, escríbenos
            directo al {brand.phone}.
          </p>
        </div>

        <div className="ticket" data-reveal>
          {sent ? (
            <div className="ticket__sent" role="status">
              <span className="ticket__stamp">Recibido</span>
              <h3>Te esperamos{firstName ? `, ${firstName}` : ''}.</h3>
              <p>
                Abrimos WhatsApp con tu reserva para confirmarla. Si la ventana no apareció, usa el
                botón.
              </p>
              <dl className="ticket__summary">
                <div>
                  <dt>Personas</dt>
                  <dd>{form.people}</dd>
                </div>
                <div>
                  <dt>Día</dt>
                  <dd>{formatLimaDate(form.date)}</dd>
                </div>
                <div>
                  <dt>Hora</dt>
                  <dd>{form.time}</dd>
                </div>
              </dl>
              <a className="btn btn--solid" href={waUrl} target="_blank" rel="noreferrer">
                Abrir WhatsApp
              </a>
              <button type="button" className="btn btn--text" onClick={reset}>
                Hacer otra reserva
              </button>
            </div>
          ) : (
            <form ref={formRef} className="ticket__form" onSubmit={handleSubmit}>
              <p className="ticket__label">Comanda de reserva</p>

              <div className="field">
                <label htmlFor="res-name">A nombre de</label>
                <input
                  id="res-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Tu nombre"
                />
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="res-people">Personas</label>
                  <select id="res-people" value={form.people} onChange={update('people')}>
                    {PEOPLE.map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="res-date">Día</label>
                  <input
                    id="res-date"
                    name="date"
                    type="date"
                    required
                    min={todayInLima()}
                    value={form.date}
                    onChange={update('date')}
                  />
                </div>

                <div className="field">
                  <label htmlFor="res-time">Hora</label>
                  <select id="res-time" value={form.time} onChange={update('time')}>
                    {TIMES.map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="res-note">Algo que debamos saber</label>
                <textarea
                  id="res-note"
                  name="note"
                  rows={2}
                  value={form.note}
                  onChange={update('note')}
                  placeholder="Cumpleaños, silla alta, alergias"
                />
              </div>

              <button type="submit" className="btn btn--solid ticket__submit">
                Enviar por WhatsApp
              </button>

              <p className="ticket__fine">
                No guardamos tus datos. Todo viaja por WhatsApp.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
