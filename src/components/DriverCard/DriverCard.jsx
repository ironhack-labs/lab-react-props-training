import Rating from "../Rating/Ratings"

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="DriverCard">
      <img style={{width: "200px", borderRadius: "20px"}} src={img} alt="profileImage" />
      <div className="driverInfo">
        <h3>{name}</h3>
        <Rating>{rating}</Rating>
        <div>
          {car.model} - {car.licensePlate}
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
