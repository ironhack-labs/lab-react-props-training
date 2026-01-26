function Random(props) {
  const { min, max } = props;
  const randomNumber = Math.floor(Math.floor() * (max - min + 1)) + min;

  return (
    <div>
      <p>
        <p>
          Random value between {min} and {max} ⇒ {randomNumber}
        </p>
      </p>
    </div>
  );
}

export default Random;
