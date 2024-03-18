import Rating from "../Rating/Rating";
import "./DriverCard.css";
const DriverCard = (props) => {
  return (
    <div className="DriverCard">
      <div className="DriverImage">
        <img src={props.img} alt="" />
      </div>
      <div className="DriverInfo">
        <p className="DriverName">{props.name}</p>
        <p className="DriverRating">
          <Rating>{props.rating}</Rating>
        </p>
        <p className="CarInfo">
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
