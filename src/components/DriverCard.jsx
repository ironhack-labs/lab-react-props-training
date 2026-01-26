import Rating from "./Rating.jsx;"

const DriverCard = (props) => {
    const { name, rating, img, car } = props;

    return (
        <div className="DriverCard">
            <img src={img} alt="profileImage"/>
            <div className="driverInfo">
                <h3>{name}</h3>
                <Rating>{rating}</Rating>
                <div>{car.model} - {car.licensePlate}</div>
            </div>
        </div>
    )
}

export default DriverCard;
