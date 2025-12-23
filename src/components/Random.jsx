

function Random(props) {

  let randomValue = props.min + Math.floor(Math.random()*props.max);
  const row = "=>";
  return (
    <div id="random-container">
      <p>Random value between {props.min} and {props.max} {row} {randomValue} </p>
    </div>
  )
}

export default Random