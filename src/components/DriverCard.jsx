import Rating from "./Rating";


function DriverCard(props) {

  return <div 
    style={{
    display: "flex",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    backgroundColor: "#455EB5",
    color: "white",
    padding: 20,
    borderRadius: 15,

  }}>     <img src={props.img} alt="Driver" style={{
    width: 100,
    height: 100,
    borderRadius: "50%",
    objectFit: "cover",

  }} />
   <div>
          <p style={{ margin: 0, fontWeight: "bold"  }}>{props.name}</p>
       
          <p style={{ margin: 0 }}>Car: {props.car.model}</p>
            <p style={{ margin: 0 }}>License Plate: {props.car.licensePlate}</p>
            <Rating>{props.rating}</Rating>
  </div></div>
}

export default DriverCard