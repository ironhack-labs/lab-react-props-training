import Rating from './Rating';

function DriverCard({ name, rating, img, car }) {
  return (
    <article className="driver-card">
      <img className="driver-card__image" src={img} alt={name} />
      <div className="driver-card__info">
        <h3>{name}</h3>
        <Rating>{rating}</Rating>
        <p>{car.model}</p>
        <p>{car.licensePlate}</p>
      </div>
    </article>
  );
}

export default DriverCard;
