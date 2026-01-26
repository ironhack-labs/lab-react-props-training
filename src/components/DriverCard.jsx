import Rating from "./Rating";

export default function DriverCard({ name, rating, img, car }) {
  return (
    <div className="outer-card">
      <div>
        <img src={img} className="driverPic" />
      </div>
      <div>
        <h1>{name}</h1>
        <h2>
          <Rating>{rating}</Rating>
        </h2>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}
