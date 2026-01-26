function Random(props) {
  const numeroAleatroio =
    Math.floor(Math.random() * (props.max - props.min + 1)) + props.min
  return (
    <div className="container">
      <h1>
        Random value between {props.min} and {props.max}={'>'}
        {numeroAleatroio}
      </h1>
    </div>
  )
}

export default Random
