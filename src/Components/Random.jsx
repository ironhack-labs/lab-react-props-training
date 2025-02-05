

function Random({ min, max }) {
  // Generate a random number between min and max (inclusive)
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div>
      <h1>The random number between {min} and {max} is: {randomNum}</h1>
    </div>
  );
}

export default Random;
