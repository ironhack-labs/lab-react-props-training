function Random(props) {
  const min = props.min;
  const max = props.max;

  const randomNumber =
    Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;

  return (
   <div className="random">
      Random value between {props.min} and {props.max} →{" "}
      <b>{randomNumber}</b>
    </div>
  );
}

export default Random
