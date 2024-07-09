function Random(props) {
  return (
    <div>

        <h4>Random value between {props.min} and {props.max} = {Math.floor(Math.random()* (props.max - props.min + 1)) + props.min}</h4>


    </div>
  )
}

export default Random