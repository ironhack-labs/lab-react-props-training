function Random({ min, max }) {
  const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div style={{ border: "2px solid black", padding: "10px", margin: "10px 0" }}>
      Random value between {min} and {max} =&gt; <strong>{randomValue}</strong>
    </div>
  );
}

export default Random;
