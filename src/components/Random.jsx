function Random({ min, max }) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
      <p>Random value between {min} and {max} =&gt; {randomNumber}</p>
    </div>
  );
}

export default Random;