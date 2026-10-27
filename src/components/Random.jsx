function Random(props) {
let randomNumber = Math.floor(
  Math.random() * (props.max - props.min + 1)
) + props.min;

return <div> {randomNumber}</div>;
}

export default Random;