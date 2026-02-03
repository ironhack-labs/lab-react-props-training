function Random(props) {
  let number =
    Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;

  return <div>{number}</div>;
}
export default Random;
