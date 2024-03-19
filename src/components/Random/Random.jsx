import "./Random.css";

function Random(props) {
  // let num = Math.ceil(Math.random() * props.max);
  let num = Math.floor(Math.random() * (props.max - props.min) + props.min);
  return (
    <div className="Random">
      Random value between {props.min} and {props.max} is {num}
    </div>
  );
}

export default Random;
