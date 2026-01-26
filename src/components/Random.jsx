function Random(props) {
  let min = Math.ceil(props.min);
  let max = Math.floor(props.max);
  let result = Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <div>
      <p>{result}</p>
    </div>
  );
}

export default Random;
