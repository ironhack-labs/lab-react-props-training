import Rating from "./Rating";
let DriverCard = (props) => {
  return (
    <div className="driverContainer">
      <img src={props.img}></img>
      <div className="driverInfo">
        <p>{props.name}</p>
        <div className="ratings">
          <Rating>{props.rating}</Rating>
        </div>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
};
export default DriverCard;
