import React from 'react'

const Rating = (props) => {
  let numStars = Math.floor(props.children)
  let stars = ""
  if(numStars <= 0 ){
    stars = "☆☆☆☆☆"
  } else if(numStars <=1) {
    stars = "★☆☆☆☆"
  } else if(numStars <=2) {
    stars = "★★☆☆☆"
  } else if(numStars <=3) {
    stars = "★★★☆☆"
  } else if(numStars <=4) {
    stars = "★★★★☆"
  } else {
    stars = "★★★★★"
  }
  
  return (
    <div>
      <p>{stars}</p>
    </div>


  )
}

export default Rating