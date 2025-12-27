

function Random(props) {

  const distancia = props.max-props.min
  let randNum = Math.round(Math.random()*distancia)+props.min

  return (
    <div className="contenedor">Random value between {props.min} and {props.max} ={'>'} {randNum}</div>
  )
}

export default Random