const Rating = (props) => {
  const clampedRating = Math.min(Math.max(Math.round(props.children), 0), 5);

  const stars = Array.from({ length: 5 }).map((_, index) => (
    <span
      key={index}
      style={{ color: index < clampedRating ? "gold" : "#ccc" }}
    >
      {index < clampedRating ? "★" : "☆"}
    </span>
  ));

  return <div style={{ fontSize: "24px" }}>{stars}</div>;
};
export default Rating;
