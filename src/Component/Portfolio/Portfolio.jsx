import  { useEffect, useRef } from 'react';
import './Portfolio.css';
import kasa from '../../assets/kasa.webp';
import ohmyfood from '../../assets/ohmyfood.webp';
import sophiebluel from '../../assets/sophiebluel.webp';

const images = [
  {src: kasa, title : 'Kasa', description: 'Création d\'une application web de location d\'appartements avec React', skills: 'REACT', link: 'https://github.com/adriiiiii1/P8', color: '#F96161'},
  {src: ohmyfood, title : 'ohmyfood', description: 'Développement d\'un site listant les menus de restaurants', skills: 'HTML, CSS, SASS, Git, GitHub', link: 'https://github.com/adriiiiii1/P4', color: '#C879DA'},
  {src: sophiebluel, title : 'Sophie Bluel', description: 'Création de pages web dynamiques avec JavaScript pour une designer', skills: 'Javascript, API REST', link: 'https://github.com/adriiiiii1/P6', color: '#A64F05'},
];

function Portfolio() {
  const portfolioRef = useRef(null);
  const scrollingRef = useRef(true);

  useEffect(() => {
    const portfolio = portfolioRef.current;
    let scrollAmount = 0;

    function scroll() {
      if (scrollingRef.current) {
        scrollAmount += 1;
        if (scrollAmount >= portfolio.scrollWidth / 2) scrollAmount = 0;
        portfolio.scrollTo(scrollAmount, 0);
      }
      requestAnimationFrame(scroll);
    }

    portfolio.addEventListener('mouseenter', () => scrollingRef.current = false);
    portfolio.addEventListener('mouseleave', () => scrollingRef.current = true);

    scroll();

    return () => {
      portfolio.removeEventListener('mouseenter', () => scrollingRef.current = false);
      portfolio.removeEventListener('mouseleave', () => scrollingRef.current = true);
    };
  }, []);

  return (
    <>
      <h2 className='portfolio-title' id='portfolio'>Portfolio</h2>
      <div className="portfolio" ref={portfolioRef}>
      {images.map((image, index) => (
  <div key={index} className="portfolio-card">
    <img src={image.src} alt={image.title} className="portfolio-img" />
    <h3 className="portfolio-card-title" style={{ color: image.color }}>{image.title}</h3>
    <p className="portfolio-description">{image.description}</p>
    <p className="portfolio-skills">{image.skills}</p>
    <a href={image.link} className="portfolio-link">Voir le projet</a>
  </div>
))}
{images.map((image, index) => (
  <div key={index} className="portfolio-card">
    <img src={image.src} alt={image.title} className="portfolio-img" />
    <h3 className="portfolio-card-title" style={{ color: image.color }}>{image.title}</h3>
    <p className="portfolio-description">{image.description}</p>
    <p className="portfolio-skills">{image.skills}</p>
    <a href={image.link} className="portfolio-link">Voir le projet</a>
  </div>
))}
      </div>
    </>
  );
}

export default Portfolio;