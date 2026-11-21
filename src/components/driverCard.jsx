import "./driverCard.css"

function DriverCard ({name, rating, img, car}){
  const numberOfBlackStars = Math.round(rating)
  const stars = []
  const black = "★"
  const stroke = "☆"
  for(let i = 0; i < numberOfBlackStars; i++){
      stars.push(black)
    }
  for(let j = 0; j < 5 - numberOfBlackStars; j++){
    stars.push(stroke)
  }
  return(
    <div className="card">
      <div className="img">
        <img src={img}></img>
      </div>
      <div className="info">
        <span className="bold">{name}</span>
        <span className="stars">{stars}</span>
        <span>{car.model} - {car.licensePlate}</span>
      </div>
    </div>
  )
}

export default DriverCard