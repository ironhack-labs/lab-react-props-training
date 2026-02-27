const DriverCard = (props) => {
  const { name, rating, img, car } = props;

  return (
    <div>
      <div className="driver-card">
        <img src={img} alt={name} className="driver-img" />
        <div className="driver-info">
          <h2>{name}</h2>
          <p>
            {"★".repeat(Math.round(rating)) +
              "☆".repeat(5 - Math.round(rating))}
          </p>
          <p>
            {car.model} - {car.licensePlate}
          </p>
        </div>
      </div>
    </div>
  );
};
export default DriverCard;
