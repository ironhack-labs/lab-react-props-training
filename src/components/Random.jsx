export default function Random(props) {
  return (
    <p>
      Random value between {props.min} and {props.max} is {Math.floor(Math.random() * (props.max - props.min) + props.min)}
    </p>
  );
}
