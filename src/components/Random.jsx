function Random(props) {
  const rand = Math.floor(
    Math.random() * (props.max - props.min + 1) + props.min
  );

  return (
    <p className="greeting-card">
      Random value between {props.min} and {props.max} =&gt; {rand}
    </p>
  );
}

export default Random;
