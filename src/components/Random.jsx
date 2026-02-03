
function Random(props) {
  const { min, max } = props;

  const randomNumber =
    Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <p>
      Random value between {min} and {max} =&gt; {randomNumber}
    </p>
  );
}

export default Random;