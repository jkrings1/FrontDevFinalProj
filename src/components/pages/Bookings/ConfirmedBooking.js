import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ConfirmedBooking = () => {
  return (
    <div className="container confirmed-booking">
      <FontAwesomeIcon icon={faCircleCheck} size="3x" />
      <h2>Su Reservación ha sido realizada..</h2>
      <p>En breve recibirá un correo electrónico con más detalles..</p>
    </div>
  );
};

export default ConfirmedBooking;
