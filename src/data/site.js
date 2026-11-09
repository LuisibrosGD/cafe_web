export const brand = {
  name: 'Lumbre',
  tagline: 'Tueste lento, sobremesa larga.',
  street: 'Calle Berlín 245',
  district: 'Barranco, Lima',
  phone: '+51 999 111 222',
  whatsapp: '51999111222',
  email: 'hola@lumbre.cafe',
  instagram: '@lumbre.cafe',
  instagramUrl: 'https://www.instagram.com/',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=-12.1469%2C-77.0219',
  since: 2016,
};

export const ticker = [
  'Etiopía Guji en V60',
  'Cold brew de 12 horas',
  'Torta de naranja recién horneada',
  'Tamal de los sábados',
  'Cusco, lote de agosto',
];

export const menu = [
  {
    key: 'espresso',
    title: 'Espresso',
    note: 'Molienda a pedido, 18 g por taza.',
    items: [
      { name: 'Espresso simple', price: 7, note: '60 ml, tueste de la casa' },
      { name: 'Cortado', price: 9 },
      { name: 'Flat white', price: 12 },
      { name: 'Capuchino de panela', price: 13, note: 'Panela de Sapillica y canela' },
      { name: 'Mocha de cacao de Piura', price: 15, note: 'Cacao al 70 %, sin azúcar añadida' },
    ],
  },
  {
    key: 'filtrados',
    title: 'Filtrados',
    note: 'Cambian con la cosecha. Siempre hay uno nuevo.',
    items: [
      { name: 'V60 del día', price: 14, note: 'Pregunta por el origen de la semana' },
      { name: 'Chemex para dos', price: 24 },
      { name: 'Cold brew de 12 horas', price: 16, note: 'Vaso alto, hielo grande' },
      { name: 'Espresso tónica', price: 15 },
    ],
  },
  {
    key: 'cocina',
    title: 'De la cocina',
    note: 'Pan de masa madre horneado aquí, todas las mañanas.',
    items: [
      {
        name: 'Tostada de masa madre, palta y huevo',
        price: 24,
        note: 'Huevo poché y ají amarillo suave',
      },
      {
        name: 'Sánguche de queso fresco y tomate confitado',
        price: 22,
        note: 'Albahaca y aceite de oliva',
      },
      { name: 'Tamal de la abuela', price: 16, note: 'Solo sábados y domingos' },
    ],
  },
  {
    key: 'dulces',
    title: 'Dulces',
    note: 'Se acaban antes de las cinco. Es un buen problema.',
    items: [
      { name: 'Alfajor de café', price: 8 },
      { name: 'Torta de naranja y almendra', price: 14, note: 'Sin gluten' },
      { name: 'Cookie de chocolate 70 %', price: 9 },
    ],
  },
];

export const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1100&h=1300&q=80',
    alt: 'Tres capuchinos con latte art entre plantas, sobre una mesa de madera',
    caption: 'Tres capuchinos y la planta que no deja de crecer',
  },
  {
    src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&h=760&q=80',
    alt: 'Barista preparando un filtrado en V60 junto a la ventana',
    caption: 'V60, tres minutos y medio, sin cronómetro',
  },
  {
    src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=700&h=900&q=80',
    alt: 'Mesas en la vereda frente al local, con la pizarra de la carta en la puerta',
    caption: 'La esquina de Berlín, sábado por la mañana',
  },
  {
    src: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=700&h=700&q=80',
    alt: 'Tazas de café dispuestas en círculo sobre una mesa redonda durante una cata',
    caption: 'Cata de la casa, jueves a las siete',
  },
  {
    src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&h=760&q=80',
    alt: 'Interior del café al atardecer, con lámparas colgantes y un letrero de neón',
    caption: 'La barra cuando baja la luz',
  },
  {
    src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1100&h=760&q=80',
    alt: 'Espresso tónica servido en vaso alto con hielo y una lámina de naranja',
    caption: 'Espresso tónica, con naranja y hielo grande',
  },
];

export const quotes = [
  {
    text: 'Vengo por el flat white y me quedo por la conversación. Nunca me apuran, y eso en Lima es un lujo.',
    name: 'Camila R.',
    origin: 'Barranco',
    lead: true,
  },
  {
    text: 'Pedí un filtrado sin saber nada de café y salí con una bolsa de granos y una explicación de diez minutos. Volví al día siguiente.',
    name: 'Andrés M.',
    origin: 'Miraflores',
  },
  {
    text: 'El tamal de los sábados justifica el viaje desde San Isidro.',
    name: 'Lucía P.',
    origin: 'San Isidro',
  },
];

export const facts = [
  ['Tueste', 'Martes y jueves, tandas de 4 kg'],
  ['Pan', 'Masa madre de 36 horas'],
  ['Mesa', 'Doce asientos y una barra'],
  ['Grano', 'Cusco, Cajamarca y Amazonas'],
];
