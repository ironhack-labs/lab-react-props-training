import Rating from "./Rating"

function DriverCard(props) {
    const imgStyle = {
        height: '20vh'
    }
    return (
        <div>
            <img style={imgStyle} src={props.img} alt="" />
            <div>{props.name}</div>
            <Rating>{props.rating}</Rating>
            <div>{props.car.model}-{props.car.licensePlate}</div>
        </div>
    )
}

export default DriverCard