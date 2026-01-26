function Rating({ children }) {
  const roundedRating = Math.round(children);
  const stars = '★'.repeat(roundedRating) + '☆'.repeat(5 - roundedRating);
  return <div>{stars}</div>;
}

export default Rating;