const BoxColor = ({ r, g, b }) => {
  const color = `rgb(${r}, ${g}, ${b})`;
  const textColorChecker =
    r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "black" : "white";
  return (
    <div
      className="boxColor"
      style={{ backgroundColor: color, color: textColorChecker }}
    >
      <p>
        rgb({r}, {g}, {b})
      </p>
      <p>
        #{r.toString(16).padStart(2, "0")}
        {g.toString(16).padStart(2, "0")}
        {b.toString(16).padStart(2, "0")}
      </p>
    </div>
  );
};

export default BoxColor;
