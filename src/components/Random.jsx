function Random(props) {
  const rndNum = Math.floor(Math.random() * (props.max - props.min + 1) + props.min);
  return (
    <div className="random-container">
      <p>{`Random value between ${props.min} and ${props.max} => ${rndNum}`}</p>
    </div>
  );
}

export default Random;
