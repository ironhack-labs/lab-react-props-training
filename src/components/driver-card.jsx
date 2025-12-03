
import Rating from "./rating";

function DriverCard (props) {

    return (
        <div className="d-flex p-2 border card-color rounded col-8 my-2 mx-5">
            <div className="d-flex justify-content-end col-6">
                <img 
                src={ props.img } 
                className="rounded-circle" 
                style={{ 
                    width:`110px`, 
                    height: `110px`
                }}></img>
            </div>
            
            <div className="d-flex flex-column col-4 mx-3 text-white">
                <p className="mt-2 mb-0 fs-4 fw-medium"> { props.name } </p>
                <span className="fs-3"><Rating>{ props.rating }</Rating></span>
                <span className="fw-light text-car"> { props.car.model } - { props.car.licensePlate } </span>
            </div>
        </div>
    );
}

export default DriverCard;