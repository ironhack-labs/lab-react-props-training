import Rating from "./Rating";

function DriverCard ({name, rating, img, car}) {
    return (
        <div className="driver-card">
            <img src={img} alt="Driver profile picture" style={{height: "100px", width: "100px",
                borderRadius:"50%", objectFit:"cover"}}/>
            <div style={{width: "20%"}}>
                <h3>{name}</h3>
                <Rating >{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard;