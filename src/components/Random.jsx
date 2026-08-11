function Random(props) {
  const randomNumber =
    Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;

  return <p className="random">{randomNumber}</p>;
}

export default Random;