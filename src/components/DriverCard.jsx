import Rating from "./Rating";

function DriverCard({ name, rating, img, car }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        border: "2px solid #000",
        padding: "20px",
        margin: "10px",
      }}
    >
      <img
        src={img}
        alt={name}
        style={{ width: "150px", height: "150px", borderRadius: "50%" }}
      />
      <div>
        <h3>{name}</h3>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
