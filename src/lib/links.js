import { brand } from '../data/site';

export const waLink = (text) =>
  `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(text)}`;
