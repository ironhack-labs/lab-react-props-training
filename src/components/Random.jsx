function Random(props) {

  let min = props.min;
  let max = props.max;

  let randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className="text-card">
      <h1>{`Random value between ${min} and ${max} => ${randomValue}`}</h1>
    </div>
  );
}

export default Random;
