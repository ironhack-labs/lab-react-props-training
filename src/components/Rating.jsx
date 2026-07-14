function Rating({ children }) {
  const filledStars = Math.round(Number(children));
  return <p className="rating" aria-label={`${filledStars} out of 5 stars`}>{'★'.repeat(filledStars)}{'☆'.repeat(5 - filledStars)}</p>;
}

export default Rating;
