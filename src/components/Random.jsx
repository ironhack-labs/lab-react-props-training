function Random(props) {

  let randomNum = Math.floor(Math.random() * (props.max - props.min + 1));

  return (
    <div className="random-num-container">
      <p>
        Random value between {props.min} and {props.max} = {randomNum}
      </p>
    </div>
  );
}

export default Random;
