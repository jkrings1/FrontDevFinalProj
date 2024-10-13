import { Link } from 'react-router-dom';
import restaurantFoodImage from './assets/restaurant-food.jpg';
import './Hero.css';
import pages from '../../../utils/pages';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Somos una familia que distruta de la comida mediterranea con el 
            toque italiano que nunca olvidarás.
          </p>
          <Link className="button-primary" to={pages.get('bookings').path}>
            Reserva una mesa
          </Link>
        </div>
        <img 
          className="hero-image" 
          src={restaurantFoodImage} 
          alt="Restaurant food" 
        />
      </div>
    </section>
  );
};

export default Hero;
