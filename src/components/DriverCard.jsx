function DriverCard(props) {
  return (
    <>
      <div className="driver-card">
        <img className="card-image"src={props.img} alt={props.name} />
        <div className="driver-info">
          <h2>{props.name}</h2>
          <div className="driver-rating">
            {Math.round(props.rating) === 0 && "☆☆☆☆☆"}
            {Math.round(props.rating) === 1 && "★☆☆☆☆"}
            {Math.round(props.rating) === 2 && "★★☆☆☆"}
            {Math.round(props.rating) === 3 && "★★★☆☆"}
            {Math.round(props.rating) === 4 && "★★★★☆"}
            {Math.round(props.rating) === 5 && "★★★★★"}
          </div>
          <p>
            {props.car.model} - {props.car.licensePlate}
          </p>
        </div>
      </div>
    </>
  );
}
export default DriverCard;
