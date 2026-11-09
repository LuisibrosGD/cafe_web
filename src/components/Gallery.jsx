import { gallery } from '../data/site';

export default function Gallery() {
  return (
    <section className="gallery section" id="lugar">
      <div className="shell">
        <div className="gallery__head">
          <h2>El lugar</h2>
          <p>
            Doce asientos, una barra y una ventana que da a la calle. Los jueves hacemos cata y
            nadie se va antes de las nueve.
          </p>
        </div>

        <div className="gallery__grid">
          {gallery.map((photo, index) => (
            <figure
              className="shot"
              key={photo.src}
              data-reveal
              style={{ '--delay': `${index * 60}ms` }}
            >
              <div className="shot__frame">
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </div>
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
