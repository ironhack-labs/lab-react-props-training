function DriverCard(props) {
    
    return (
        <div className="driver-card">
        <h2>{props.name}</h2>
        <p>{props.rating}</p>
        <img src={props.img} className="driver-foto"></img>
        <p>{props.car.model}: {props.car.licensePlate}</p>
        </div>
        

    )
}

export default DriverCard;