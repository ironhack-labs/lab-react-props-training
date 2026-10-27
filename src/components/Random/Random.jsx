import "./Random.css";

function Random(props) {
  let randomNumber =
    Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;

  return (
    <div className="box">
      <p>
        Random value between {props.min} and {props.max} =&gt; {randomNumber}
      </p>
    </div>
  );
}

export default Random;
