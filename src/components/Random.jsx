function Random({ min, max }) {
  const value = Math.floor(Math.random() * (max - min + 1)) + min;
  return <p className="random-number">Random number: {value}</p>;
}

export default Random;
