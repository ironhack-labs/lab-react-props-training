import "./DriverCard.css";

function DriverCard(props) {
  let rating = Math.round(props.rating);
  let rate = {
    1: `★☆☆☆☆`,
    0: `☆☆☆☆☆`,
    2: `★★☆☆☆`,
    3: `★★★☆☆`,
    4: `★★★★☆`,
    5: `★★★★★`,
  };
  return (
    <div className="DriverCard">
      <img className="imgDriver" src={props.img} alt="" />
      <div className="divDriver">
        <p>{props.name}</p>
        <p>{rate[rating]}</p>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
