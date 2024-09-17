
function Rating(props) {
  console.log(props.children)
  let estrellas

  if (props.children < 0.5 ){
    estrellas = "☆☆☆☆☆"
  } else if (props.children < 1.5 ){
    estrellas = "★☆☆☆☆"
  } else if (props.children < 2.5 ){
    estrellas = "★★☆☆☆"
  } else if (props.children < 3.5 ){
    estrellas = "★★★☆☆"
  } else if (props.children < 4.5 ){
    estrellas = "★★★★☆"
  } else{
    estrellas = "★★★★★"
  }
  return (
    <div className="contenedor">{estrellas}</div>
  )
}

export default Rating