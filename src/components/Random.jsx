function Random({ min, max }) {
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div style={{ margin: '10px', fontSize: '18px' }}>
      <p>Random number between {min} and {max}: <strong>{randomNum}</strong></p>
    </div>
  );
}

export default Random;