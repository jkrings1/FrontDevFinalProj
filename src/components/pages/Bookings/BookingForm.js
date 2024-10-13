import { useState } from 'react';
import FormField from './FormField';

const BookingForm = ({
  availableTimes,
  dispatchOnDateChange,
  submitData
}) => {
  const minimumDate = new Date().toISOString().split('T')[0];
  const defaultTime = availableTimes[0];
  const minimumNumberOfGuests = 1;
  const maximumNumberOfGuests = 10;
  const occasions = ['Cumpleaños', 'Aniversario','Graduación'];
  const invalidDateErrorMessage = 'Elija una fecha válida';
  const invalidTimeErrorMessage = 'Por favor elija una hora válida';
  const invalidOccasionErrorMessage = 'Por favor elija un evento válido';
  const invalidNumberOfGuestsErrorMessage = 
    'Please enter a number between 1 and 10';

  const [date, setDate] = useState(minimumDate);
  const [time, setTime] = useState(defaultTime);
  const [
    numberOfGuests, 
    setNumberGuests
  ] = useState(minimumNumberOfGuests);
  const [occasion, setOccasion] = useState(occasions[0]);

  const isDateValid = () => date !== '';
  const isTimeValid = () => time !== '';
  const isNumberOfGuestsValid = () => numberOfGuests !== '';
  const isOccasionValid = () => occasion !== '';

  const areAllFieldsValid = () => 
    isDateValid() 
    && isTimeValid() 
    && isNumberOfGuestsValid() 
    && isOccasionValid();
  
  const handleDateChange = e => {
    setDate(e.target.value);
    dispatchOnDateChange(e.target.value);
  };

  const handleTimeChange = e => setTime(e.target.value);

  const handleFormSubmit = e => {
    e.preventDefault();
    submitData({ date, time, numberOfGuests, occasion, });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <FormField 
        label="Fecha" 
        htmlFor="booking-date" 
        hasError={!isDateValid()} 
        errorMessage={invalidDateErrorMessage}
      >
        <input 
          type="date" 
          id="booking-date" 
          name="booking-date" 
          min={minimumDate} 
          value={date} 
          required={true} 
          onChange={handleDateChange}
        />
      </FormField>
      <FormField 
        label="Hora" 
        htmlFor="booking-time" 
        hasError={!isTimeValid()} 
        errorMessage={invalidTimeErrorMessage}
      >
        <select 
          id="booking-time" 
          name="booking-time" 
          value={time} 
          required={true} 
          onChange={handleTimeChange}
        >
          {availableTimes.map(times => 
            <option data-testid="booking-time-option" key={times}>
              {times}
            </option>
          )}
        </select>
      </FormField>
      <FormField 
        label="Número de visitantes" 
        htmlFor="booking-number-guests" 
        hasError={!isNumberOfGuestsValid()} 
        errorMessage={invalidNumberOfGuestsErrorMessage}
      >
        <input 
          type="number" 
          id="booking-number-guests" 
          name="booking-number-guests" 
          value={numberOfGuests} 
          min={minimumNumberOfGuests} 
          max={maximumNumberOfGuests} 
          required={true} 
          onChange={e => setNumberGuests(e.target.value)}
        />
      </FormField>
      <FormField 
        label="Celebración" 
        htmlFor="booking-occasion" 
        hasError={!isOccasionValid()} 
        errorMessage={invalidOccasionErrorMessage}
      >
        <select 
          id="booking-occasion" 
          name="booking-occasion" 
          value={occasion} 
          required={true} 
          onChange={e => setOccasion(e.target.value)}
        >
          {occasions.map(occasion => 
            <option data-testid="booking-occasion-option" key={occasion}>
              {occasion}
            </option>
          )}
        </select>
      </FormField>
      <button 
        className="button-primary" 
        type="submit" 
        disabled={!areAllFieldsValid()}
      >
        Haga su reservación.
      </button>
    </form>
  );
};

export default BookingForm;
