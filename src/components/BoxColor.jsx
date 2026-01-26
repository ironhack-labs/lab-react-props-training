export default function BoxColor({ r, g, b }) {
  const background = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  };
  return (
    <div className="colorBox" style={background}>
      <p>
        rgb({r},{g},{b})
      </p>
    </div>
  );
}
