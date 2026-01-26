export default function Random(props) {
  return (
    <h1> {Math.floor(Math.random() * (props.max - props.min) + props.min)}</h1>
  );
}
