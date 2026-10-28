
function Randomizer(props) {
  // 1. Calculamos o número aleatório entre o min e o max
  const randomNumber = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;

  // 2. Retornamos o JSX estruturado
  return (
    <div className="random-box" style={{ border: "1px solid #000", padding: "10px", margin: "10px" }}>
      <p>
        Random value between {props.min} and {props.max} => <b>{randomNumber}</b>
      </p>
    </div>
  );
}

export default Randomizer;