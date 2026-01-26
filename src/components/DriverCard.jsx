import Rating from "./Rating";

const DriverCard = (props) => {
  return (
    <div style={{ backgroundColor: "#455eb5", flexGrow: 1, padding: "2rem", display: "flex", gap: "1rem", justifyContent: "center", color: "white", borderRadius: "1rem" }}>
      <div className="image">
        <img
          src={props.img}
          alt=""
          style={{ height: "100px", width: "100px", borderRadius: "50%" }}
        />
      </div>
      <div className="content">
        <h2>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <div style={{ fontSize: "1.1rem" }}>
          {props.car.model} - {props.car.licensePlate}
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
