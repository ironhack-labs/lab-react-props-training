function Random(props) {
  return (
    <div id="random">
      <p>Random value between {props.min} and {props.max}: {Math.floor(Math.random() *(props.max - props.min + 1))}</p>
    </div>
  )
}

export default Random