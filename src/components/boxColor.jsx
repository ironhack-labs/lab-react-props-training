function BoxColor({ r, g, b }) {
  return (
    <div style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
      <p>
        rgb {r} {g} {b}
      </p>
      <p>
        #{r.toString(16).padStart(2, "0")}
        {g.toString(16).padStart(2, "0")}
        {b.toString(16).padStart(2, "0")}
      </p>
    </div>
  );
}

export default BoxColor;
