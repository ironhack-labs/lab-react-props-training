function Random({ min, max }) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        border: "2px solid #000",
        padding: "5px",
        margin: "10px",
      }}
    >
      Random value betwen {min} and {max} = {randomNumber}
    </div>
  );
}

export default Random;
