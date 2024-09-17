function DriverCard(props) {
  let stars = Math.round(props.rating)

  let starsArr = []

  for (let i = 0; i <5; i++) {
    if(i < stars) {
      starsArr.push("★")
    } else {
      starsArr.push("☆")
    }
  }

  let ratingStars = starsArr.join(" ")

  let imgPerson = props.img

  return (
    <div className="driver">
    <img src={imgPerson} alt="" />
    <div>
      <h3 style={{margin: "0"}}>{props.name}</h3>
      <div>{ratingStars}</div>
      <span>{props.car.model} - {props.car.licensePlate}</span>
    </div>
    </div>
  )
}

export default DriverCard