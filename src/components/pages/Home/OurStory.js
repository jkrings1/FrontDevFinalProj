import chefsMarioAndAdrianAImage from './assets/chefs-mario-and-adrian_a.jpg';
import chefsMarioAndAdrianBImage from './assets/chefs-mario-and-adrian_b.jpg';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
      Somos un restaurante mediterráneo de propiedad familiar enfocado en recetas tradicionales servidas con un toque moderno. Ubicado en el corazón de Chicago, nuestro restaurante italiano trae los ricos sabores de Italia a tu mesa, combinando técnicas de cocina ancestrales con ingredientes frescos y de origen local.
     Nuestro menú presenta una selección cuidadosamente elaborada de platos clásicos italianos, desde pasta hecha a mano y pizzas al horno de leña hasta mariscos y carnes, todos preparados con una pasión por el sabor auténtico. Ya sea que disfrutes de un almuerzo casual, una cena romántica o una celebración especial, nuestro ambiente acogedor y personal amable hacen de cada visita una experiencia memorable.
     En nuestro restaurante, creemos en más que solo servir comida: nuestro objetivo es crear una experiencia que te transporte directamente a las costas bañadas por el sol del Mediterráneo. Desde nuestras salsas exclusivas hasta nuestra cuidadosamente seleccionada carta de vinos, todo está diseñado para complementar la esencia del comedor italiano: simple, fresco y lleno de sabor.
     Únete a nosotros para disfrutar de una comida que captura el espíritu de Italia aquí mismo en Chicago, donde cada plato cuenta una historia de tradición, familia y amor por la buena comida.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" />
        <img src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian" />
      </div>
    </section>
  );
};

export default OurStory;
