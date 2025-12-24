
function Rating(props) {
  let stars = Math.round(props.children)

  let starsArr = []

  for (let i = 0; i <5; i++) {
    if(i < stars) {
      starsArr.push("★")
    } else {
      starsArr.push("☆")
    }
  }

  let ratingStars = starsArr.join(" ")

  return (
    <div>{ratingStars}</div>
  )
}

export default Rating