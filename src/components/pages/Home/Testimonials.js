import customer1Image from './assets/customer1.jpg';
import customer2Image from './assets/customer2.jpg';
import customer3Image from './assets/customer3.jpg';
import customer4Image from './assets/customer4.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Maria Barillas',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `El restaurante es un verdadero tesoro en Chicago. Como guatemalteca, me encantó encontrar un lugar que mezcla lo mejor de la cocina italiana con un toque moderno y fresco.`,
  },
  {
    fullName: 'Jurgen Krings',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `Das Restaurant ist einfach fantastisch! Als Deutsche war ich begeistert, ein italienisches Restaurant in Chicago zu finden, das traditionelle Rezepte mit einem modernen Twist serviert..`,
  },
  {
    fullName: 'Ana María Arana',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `El restaurante es increíble, con auténticos sabores italianos y un toque moderno. La comida es deliciosa y el ambiente es acogedor. ¡Una experiencia que no te puedes perder!`,
  },
  {
    fullName: 'Brandon Pérez',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `Una joya en Chicago. La combinación de recetas italianas tradicionales con un toque contemporáneo es excepcional. El ambiente cálido hacen de cada visita una experiencia memorable. ¡Altamente recomendado!`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => 
          <TestimonialCard key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Testimonials;
