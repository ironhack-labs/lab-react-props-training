const Rating = (props) => {
  const roundedRating = Math.round(props.children);

  return (
    <div>
      <h2 style={{ fontSize: "2rem" }}>
        {"★".repeat(roundedRating)}
        {"☆".repeat(5 - roundedRating)}
      </h2>
    </div>
  );
};

export default Rating;
