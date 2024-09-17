function Rating(props) {
  let estrella
  const value = props.children
  if (value === 0) {
    estrella = '☆☆☆☆☆'
  } else if (value <= 1.99) {
    estrella = '★☆☆☆☆'
  } else if (value <= 2.99) {
    estrella = '★★☆☆☆'
  } else if (value <= 3.99) {
    estrella = '★★★☆☆'
  } else if (value <= 4.99) {
    estrella = '★★★★☆'
  } else if (value === 5) {
    estrella = '★★★★★'
  } else {
    estrella = '☆☆☆☆☆'
  }
  return (
    <div className="estreya">
      <h2>{estrella}</h2>
    </div>
  )
}

export default Rating
