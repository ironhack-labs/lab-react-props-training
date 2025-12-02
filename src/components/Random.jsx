function Random(props) {
  const { min, max } = props;

  const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className="random">
      <p>
        Random value between {min} and {max} =&gt; <strong>{randomValue}</strong>
      </p>
    </div>
  );
}

export default Random;