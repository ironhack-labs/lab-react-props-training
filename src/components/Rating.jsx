const Rating = ({ children }) => {
  const ratingValue = Math.round(Number(children));

  const stars = Array.from({ length: 5 }, (_, index) =>
    index < ratingValue ? "★" : "☆"
  ).join("");

  return <div>{stars}</div>;
};

export default Rating;
