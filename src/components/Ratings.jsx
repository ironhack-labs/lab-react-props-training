function Rating(props) {
    let ratingNum =props.children
    let ratingRound = Math.round(ratingNum)
    let starsString = "★".repeat(ratingRound) +"☆".repeat(5-ratingRound)
    let emptyStars = "hola"

  return (
    <div>
        <div className="rating-row">
        <p className="stars"> {starsString}</p>
        {/* <p className={`stars ${props.className || ""}`}>{starsString}</p> */}
        </div>
    </div>
  )
}
export default Rating