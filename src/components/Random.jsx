
function Random({ min, max }) {
  const value = Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <p style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      Random value between {min} and {max} ⇒ {value}
    </p>
  );
}

export default Random;