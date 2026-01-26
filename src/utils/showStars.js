const emptyStar = "☆";
const star = "★";
export function showStars(rating) {
  const roundedRating = Math.round(rating);
  switch (roundedRating) {
    case 0:
      return emptyStar.repeat(5);
    case 1:
      return star + emptyStar.repeat(4);
    case 2:
      return star.repeat(2) + emptyStar.repeat(3);
    case 3:
      return star.repeat(3) + emptyStar.repeat(2);
    case 4:
      return star.repeat(4) + emptyStar.repeat(1);
    case 5:
      return star.repeat(5);
  }
}
