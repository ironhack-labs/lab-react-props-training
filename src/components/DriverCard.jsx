import Rating from "./Rating";

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div
      style={{
        padding: "20px",
        margin: "10px 0",
        borderRadius: "8px",
        backgroundColor: "blue",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        color: "white",
      }}
    >
      <img
        src={img}
        alt={name}
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />
      <div>
        <h2>{name}</h2>
        {/* Use the Rating component here */}
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
