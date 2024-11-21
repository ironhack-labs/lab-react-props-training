import Rating from '../rating/rating';


import './driver-card.css'

function DriverCard({ className = "", name, rating, img, car }) {
    const { model, licensePlate } = car
    return (
       <div className={`${className} rounded gap-2 driver-card d-flex flex-columns bg-primary justify-content-center`}>
            <img className="py-4 rounded-circle" src={img} alt={name} />
            <ul className="list-unstyled py-4 text-light">
                <li className='fw-bold fs-5'>{name}</li>
                <li><Rating>{rating}</Rating></li>
                <li className='fs-7'>{model} - {licensePlate}</li>
            </ul>

        </div>
    );
}

export default DriverCard;