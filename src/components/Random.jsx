
function Random(props) {
  return (
    <div className="container">Random value between {props.min} and {props.max} = {Math.ceil(Math.random()*props.max)+props.min}</div>
  )
}

export default Random