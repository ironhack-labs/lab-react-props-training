function BoxColor({ r, g, b }) {
  const color = `rgb(${r}, ${g}, ${b})`;
  return (
    <div
      style={{ backgroundColor: color, width: "200px", height: "100px" }}
    ></div>
  );
}

export default BoxColor;
