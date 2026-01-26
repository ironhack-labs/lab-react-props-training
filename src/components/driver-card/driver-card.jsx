import Rating from "../rating/rating";

function DriverCard ({name, rating, img, car, className= ''}) {
    return (
        <div className= {`d-flex justify-content-center p-3 gap-3 rounded ${className}`} style={{
            backgroundColor: `rgb(117, 117, 247)`}}>
            <img className="img-fluid rounded-circle object-fit-cover" style={{width: 120, height:120}} src={img} />
            <div className="d-flex flex-column gap-0">
                <span className="text-light fs-3 fw-semibold" >{name}</span>
                <Rating className="text-light fs-2">{rating}</Rating>
                <span className="text-light">{car.model} - {car.licensePlate}</span>
            </div>
        </div>
    );
}

export default DriverCard;