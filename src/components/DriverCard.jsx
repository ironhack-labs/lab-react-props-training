import Rating from "./Rating";

const DriverCard = ({ name, rating, img, car: { model, licensePlate } }) => {
  return (
    <div className="driverCard">
      <img className="driverCard__img" src={img} alt={name} />
      <div className="driverCard__info">
        <h2 className="driverCard__name">{name}</h2>
        <Rating rating={rating} />
        <p className="driverCard__car">
          {model} - {licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
