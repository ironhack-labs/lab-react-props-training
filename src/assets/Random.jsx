function Random(props) {
  const random = Math.floor(Math.random() * (props.max - props.min + 1) + props.min);

  return (
    <div>
      Random value between {props.min} and {props.max} => {random}
    </div>
  );
}

export default Random;
