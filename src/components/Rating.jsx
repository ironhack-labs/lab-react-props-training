import { showStars } from "../utils/showStars";

export default function Rating({ children }) {
  const roundedRating = Math.round(children);

  return <div className="Rating">{showStars(roundedRating)}</div>;
}
