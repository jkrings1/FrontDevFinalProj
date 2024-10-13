import { Link } from 'react-router-dom';
import bruschettaImage from './assets/bruschetta.jpg';
import greekSaladImage from './assets/greek-salad.jpg';
import lemonDessertImage from './assets/lemon-dessert.jpg';
import './WeekSpecials.css';
import pages from '../../../utils/pages';
import MealCard from './MealCard';

const meals = [
  {
    name: 'Greek Salad',
    image: greekSaladImage,
    price: '$12.99',
    description: `La famosa ensalada griega de lechuga crujiente, pimientos, aceitunas y nuestro queso feta estilo Chicago, adornada con crujientes picatostes de ajo y romero..`,
  },
  {
    name: 'Bruschetta',
    image: bruschettaImage,
    price: '$5.99',
    description: `Nuestra Bruschetta está hecha de pan a la parrilla que ha sido untado con ajo y sazonado con sal y aceite de oliva.`,
  },
  {
    name: 'Lemon Dessert',
    image: lemonDessertImage,
    price: '$5.00',
    description: `Esta receta viene directamente del libro de recetas de la abuela, cada ingrediente ha sido seleccionado y es tan auténtico como se puede imaginar.`,
  },
];

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>Recetas especiales de esta semana!</h2>
        <Link className="button-primary" to={pages.get('orderOnline').path}>
          Menú en línea
        </Link>
      </div>
      {meals.map((meal, index) => 
        <MealCard key={index} meal={meal} />
      )}
    </section>
  );
};

export default WeekSpecials;
