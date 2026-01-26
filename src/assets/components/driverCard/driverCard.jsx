import Rating from "../rating/rating";

function DriverCard({ name, rating, img, car }) {
    return (
      <div style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#455EB5",
        color: "white",
        padding: "1rem",
        borderRadius: "8px",
        marginBottom: "1rem",
        width: "400px",
        textAlign: "center"
      }}>
        <img
          src={img}
          alt={name}
          style={{
            borderRadius: "50%",
            width: "100px",
            height: "100px",
            objectFit: "cover",
            marginRight: "1rem"
          }}
        />
        <div>
          <h2>{name}</h2>
          <Rating>{rating}</Rating>
          <p>{car.model} - {car.licensePlate}</p>
        </div>
      </div>
    );
  }
  
export default DriverCard;