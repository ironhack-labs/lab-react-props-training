import "./Random.css";
function Random(props) {
  const valor = Math.floor(Math.random() * props.max);

  return (
    <div className="random">
      <p>
        Random value between {props.min} and {props.max} =&gt; {valor};
      </p>
    </div>
  );
}
export default Random;
