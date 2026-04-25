function Random({ min, max }) {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  return (
    <div
      style={{ border: "1px solid black", padding: "8px", margin: "5px" }}
    ></div>
  );
}
export default Random;
