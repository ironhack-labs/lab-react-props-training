function Random(props) {
  const randomValue = Math.floor(Math.random() * (props.max - props.min) + props.min)

  return (
    <div className="container">
      <p>{`Random value between ${props.min} and ${props.max} => ${randomValue}`}</p>
    </div>
  )
}

export default Random