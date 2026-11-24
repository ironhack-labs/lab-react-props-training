import "./rating.css"
function Rating({ children }) {
  const filled = Math.round(Number(children));
  const stars = "★".repeat(filled) + "☆".repeat(5 - filled);

  return <div className="Rating">{stars}</div>;
}

export default Rating;