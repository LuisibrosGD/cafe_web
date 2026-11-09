export const HOURS = [
  {
    key: 'weekday',
    label: 'Lunes a viernes',
    short: 'Lun–Vie',
    days: [1, 2, 3, 4, 5],
    open: '7:00',
    close: '20:00',
  },
  { key: 'saturday', label: 'Sábado', short: 'Sáb', days: [6], open: '8:00', close: '21:00' },
  { key: 'sunday', label: 'Domingo', short: 'Dom', days: [0], open: '8:00', close: '18:00' },
];

const toMinutes = (time) => {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
};

/** Día de la semana y minuto del día en Lima, sin importar la zona del visitante. */
export function limaNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Lima',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(date);

  const value = (type) => parts.find((part) => part.type === type)?.value;
  const weekdays = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  const day = weekdays[value('weekday')] ?? 1;
  const minutes = (Number(value('hour')) % 24) * 60 + Number(value('minute'));

  return { day, minutes };
}

export function getShopStatus(date = new Date()) {
  const { day, minutes } = limaNow(date);
  const today = HOURS.find((entry) => entry.days.includes(day)) ?? HOURS[0];
  const tomorrow = HOURS.find((entry) => entry.days.includes((day + 1) % 7)) ?? HOURS[0];

  const opens = toMinutes(today.open);
  const closes = toMinutes(today.close);
  const isOpen = minutes >= opens && minutes < closes;

  let label;
  if (isOpen) {
    label = `Abierto hasta las ${today.close}`;
  } else if (minutes < opens) {
    label = `Abre hoy a las ${today.open}`;
  } else {
    label = `Cerrado, abre mañana a las ${tomorrow.open}`;
  }

  return { isOpen, label, day, todayKey: today.key, today, tomorrow };
}

export function todayInLima(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Lima',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);

  const value = (type) => parts.find((part) => part.type === type)?.value;
  return `${value('year')}-${value('month')}-${value('day')}`;
}

export function formatLimaDate(isoDate) {
  if (!isoDate) return '';
  const [year, month, day] = isoDate.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return new Intl.DateTimeFormat('es-PE', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    timeZone: 'UTC',
  }).format(date);
}
