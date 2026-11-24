import "./driverCard.css";

import Rating from "./rating";

function DriverCard({ name, rating, img, car }) {

  return (
    <>
      <section className="driverCard box">
        <img src={img} alt={name} className="driverCard-avatar" />
        <div className="driverCard-content">
          <h2 className="driverCard-name">{name}</h2>
          <div className="stars"><Rating>{rating}</Rating></div>
          <p className="driverCard-car">{car.model} - {car.licensePlate}</p>
        </div>
      </section>      
    </>
  );
}

export default DriverCard;