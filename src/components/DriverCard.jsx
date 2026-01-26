function DriverCard(props) {
  let filledStarCount = Math.round(props.rating);
  const stars = Array.from({ length: 5 }, (_, index) =>
    //loops till the max value 5

    index < filledStarCount ? (
      <i key={index} className="fa fa-star" style={{ fontSize: 24 }}></i>
    ) : (
      <i key={index} className="fa fa-star-o" style={{ fontSize: 24 }}></i>
    )
  );
  return (
    <div className="card driver-card">
      <div className="driver-image">
        <img src={props.img} alt={props.name} />
      </div>
      <div>
        <h1>{props.name}</h1>
        <h2>{stars}</h2>
        <h3>
          {props.car.model} - {props.car.licensePlate}
        </h3>
      </div>
    </div>
  );
}

export default DriverCard;
