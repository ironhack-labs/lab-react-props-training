function BoxColor({ r, g, b }) {
  const color = `rgb(${r},${g},${b})`;
  return (
    <div className="user-card" style={{ backgroundColor: `${color}` }}>
      <p>{color}</p>
    </div>
  );
}

export default BoxColor;