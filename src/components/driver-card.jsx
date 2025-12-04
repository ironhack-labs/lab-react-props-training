
import Rating from "./rating";

function DriverCard( {name, rating, img, car: { model, licensePlate } } ) {
    return (
        <div className="d-flex justify-content-center align-items-center rounded-3 text-start pt-3 pb-3 mb-2 mt-2" style={{backgroundColor: '#455eb5'}}>                
            <img 
            className="rounded-pill p-2" 
            src={img} 
            alt="personal photo"
            style={{width: '120px',
                    height: '120px',
                    objectFit: 'cover'
            }}/>
            <div style={{color: '#ffffff'}}>
                <div className='fw-semibold' style={{fontSize: '22px'}}>
                    <div>{name}</div>
                    <Rating>{rating}</Rating>
                </div>
                <div style={{fontSize: '15px'}}>{model} - {licensePlate}</div>
            </div>
        </div>
    );
}

export default DriverCard;