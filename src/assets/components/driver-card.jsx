import Rating from "./rating";

function DriverCard({ name, rating, img, car: {model, licensePlate} }){

  return(
    <div className="DriverCard d-flex align-items-center justify-content-center gap-2 p-3 m-2">
      <div className="img-container d-flex align-items-center justify-content-center p-2">
        <img className="" src={img} alt={`${name}`} />
      </div>
      <div>
        <h3 className="text-white">{name}</h3>
        <h4 className="text-white"><Rating>{rating}</Rating></h4>
        <p className="text-white">{`${model} - ${licensePlate}`}</p>

      </div>
    </div>
  );
}

export default DriverCard;