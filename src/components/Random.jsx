function Random({ min, max }) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div>
      <h2>
        Random value between {min} and {max} = {randomNumber}
      </h2>
    </div>
  );
}

export default Random;
