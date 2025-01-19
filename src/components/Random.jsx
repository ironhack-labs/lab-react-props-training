function Random(props) {
  const { min, max } = props;

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="randomNum">
      Random value between {min} and {max} =&gt; {getRndInteger(min, max)}
    </div>
  );
}

export default Random;
