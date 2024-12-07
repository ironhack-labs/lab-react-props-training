function Rating(props) {
  let estrella
  const value = Math.round(props.children)
  if (value === 0) {
    estrella = '☆☆☆☆☆'
  } else if (value <= 1) {
    estrella = '★☆☆☆☆'
  } else if (value <= 2) {
    estrella = '★★☆☆☆'
  } else if (value <= 3) {
    estrella = '★★★☆☆'
  } else if (value <= 4) {
    estrella = '★★★★☆'
  } else if (value === 5) {
    estrella = '★★★★★'
  } else {
    estrella = '☆☆☆☆☆'
  }
  return (
    <div>
      <h2>{estrella}</h2>
    </div>
  )
}

export default Rating
