function Random({ min, max }) {
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <p>Random number between {min} and {max}: {randomNum}</p>
  );
}

export default Random;