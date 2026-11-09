import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Story from './components/Story';
import MenuSection from './components/MenuSection';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Visit from './components/Visit';
import Reserve from './components/Reserve';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('[data-reveal]'));
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!('IntersectionObserver' in window) || reduced) {
      targets.forEach((target) => target.setAttribute('data-revealed', ''));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute('data-revealed', '');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <Ticker />
        <Story />
        <MenuSection />
        <Gallery />
        <Testimonials />
        <Visit />
        <Reserve />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
