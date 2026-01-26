function Rating({ children }) {
  const star = "☆";
  const filledStar = "★";

  const filledStars = Math.round(children);

  let stars = "";

  for (let i = 0; i < filledStars; i++) {
    stars += filledStar;
  }

  for (let i = filledStars; i < 5; i++) {
    stars += star;
  }

  return <div className="rating">{stars}</div>;
}

export default Rating;
