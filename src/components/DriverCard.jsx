function DriverCard (props){
    return (
        <div className="driverCard">
        <img src={props.img} alt={props.name} className="driverImage" />
            <div className="driverInfo">
                <h2>{props.name}</h2>
                <p>{props.rating.toFixed(1)} Stars</p>
                <p>
                {props.car.model} - {props.car.licensePlate}
                </p>
      </div>




        </div>
    )
}


export default DriverCard;