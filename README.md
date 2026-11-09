# Lumbre — landing page

Landing page de una cafetería de tueste propio en Barranco, Lima. Un solo scroll, sin dependencias de UI: React + Vite, CSS propio y contenido editable en un archivo.

## Arrancar

Requiere Node 20.19 o superior.

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`. Para producción:

```bash
npm run build
npm run preview
```

## Estructura

```
index.html                 metadatos, fuentes, JSON-LD del negocio
public/favicon.svg         marca
src/main.jsx               entrada
src/App.jsx                orden de las secciones + revelados al scroll
src/styles/app.css         tokens, tipografía y todas las secciones
src/data/site.js           marca, carta, fotos, testimonios, datos de la casa
src/lib/hours.js           horarios y estado abierto/cerrado en hora de Lima
src/lib/links.js           armado del enlace de WhatsApp
src/components/            una sección por archivo (MapCard dibuja el mapa)
```

## Qué editar

- **Nombre, dirección, teléfono, WhatsApp, redes:** `src/data/site.js` → `brand`. El número de WhatsApp va sin `+` ni espacios (`51999111222`).
- **Carta y precios:** `menu` en el mismo archivo. Los precios están en soles y se muestran como número, sin símbolo.
- **Fotos:** `gallery` y las imágenes de `Hero`, `Story` y `MenuSection`. Todas vienen de Unsplash; reemplaza las URL por las del local cuando las tengas.
- **Horarios:** `src/lib/hours.js`. El estado «abierto / cierra a las…» y la fila resaltada del día se calculan solos en zona `America/Lima`.
- **Colores y tipografía:** variables al inicio de `src/styles/app.css` (`--paper`, `--ink`, `--oxblood`, `--ochre`, `--cocoa`).

## Cómo funciona la reserva

No hay backend. El formulario valida los campos, arma un mensaje con nombre, personas, día y hora, y abre WhatsApp (`wa.me`) con todo escrito. Si la ventana no se abre, la confirmación muestra un botón para reintentar. No se guarda ningún dato.

El correo de «Cartas de la casa» muestra confirmación en pantalla pero **no envía nada**: conéctalo a tu servicio (Mailchimp, Buttondown, un endpoint propio) en `src/components/Newsletter.jsx`.

El mapa de «Visítanos» es una ilustración en SVG (`src/components/MapCard.jsx`), no un embed: carga al instante, no depende de terceros y mantiene la paleta. El enlace «Abrir en Google Maps» lleva a la ubicación real. Si prefieres un mapa interactivo, reemplaza el SVG por el iframe que quieras.

## Detalles de implementación

- Tipografía: Fraunces (display) + Karla (texto), desde Google Fonts.
- Imágenes con `loading="lazy"` salvo el hero; proporciones reservadas para evitar saltos de layout.
- Animación de entrada del titular, sello giratorio y cinta de novedades; todo se detiene con `prefers-reduced-motion`.
- Navegación móvil con panel a pantalla completa, cierre con `Esc` y foco devuelto al botón.
- Enlace «Saltar al contenido», foco visible y contraste revisado.
- SEO: `title`, descripción, Open Graph y JSON-LD `CafeOrCoffeeShop` con dirección, horarios y coordenadas.

## Capturas

En `capturas/`: `portada.jpg`, `escritorio.jpg` (página completa), `movil.jpg` y `reserva.jpg` (estado de confirmación).
