function DriverCard({ name, rating, img, car }) {
  const rounded = Math.round(rating);
  const stars = '★'.repeat(rounded) + '☆'.repeat(5 - rounded);

  return (
    <div className="driver-card">
      <img className="driver-card__avatar" src={img} alt={name} />
      <div className="driver-card__info">
        <h2>{name}</h2>
        <div className="driver-card__rating">{stars}</div>
        <div className="driver-card__car">
          {car.model} - {car.licensePlate}
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
