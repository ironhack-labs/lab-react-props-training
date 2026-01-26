import { showStars } from "../utils/showStars";

export default function DriverCard(props) {
  const { name, rating, img, car } = props;

  return (
    <div className="DriverCar">
      <img className="Avatar" src={img} />
      <div className="Data">
        <h2>{name}</h2>
        <div>{showStars(rating)}</div>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}
