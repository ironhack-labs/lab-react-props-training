const Random = ({ min, max }) => {
  const randomNumber = Math.round(Math.random() * (max - min) + min);

  return (
    <div style={{ margin: "20px", padding: "10px", border: "2px solid black" }}>
      <h1>
        Random value between {min} and {max} ={">"} {randomNumber}
      </h1>
    </div>
  );
};

export default Random;
