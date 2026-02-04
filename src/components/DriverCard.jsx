import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
/**
 * DriverCard Component
 * Exibe informações de um motorista com avaliação e dados do carro.
 */
const DriverCard = React.memo(function DriverCard({ name, rating, img, car }) {
  return (
    <section className="driver-card" aria-label={`Driver card for ${name}`}> 
      <img src={img} alt={`Foto de ${name}`} />
      <div>
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <div className="car-info">{car.model} - {car.licensePlate}</div>
      </div>
    </section>
  );
});

DriverCard.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  car: PropTypes.shape({
    model: PropTypes.string.isRequired,
    licensePlate: PropTypes.string.isRequired,
  }).isRequired,
};

export default DriverCard;
