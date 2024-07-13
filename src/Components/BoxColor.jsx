export default function BoxColor({ r, g, b }) {
  return (
    <div
      style={{
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        width: "100px",
        height: "100px",
      }}
    ></div>
  );
}
