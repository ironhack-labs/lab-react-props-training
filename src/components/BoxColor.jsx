function BoxColor({ r, g, b }) {
  const rgb = `rgb(${r}, ${g}, ${b})`;
  const hex = `#${[r, g, b].map((value) => value.toString(16).padStart(2, '0')).join('')}`;

  return <div className="color-box" style={{ backgroundColor: rgb }}>{hex}</div>;
}

export default BoxColor;
