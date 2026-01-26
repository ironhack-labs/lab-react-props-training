function Random(props) {
  const randomNumber = () => {
    return Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
  };
  return (
    <div className="card">
      <h1>
        Random value between {props.min} and {props.max} is = {randomNumber()}
      </h1>
    </div>
  );
}
export default Random;
