function Rating({children}){
  const numberOfBlackStars = Math.round(children)
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
    <div>
      {stars}
    </div>
  )

}

export default Rating