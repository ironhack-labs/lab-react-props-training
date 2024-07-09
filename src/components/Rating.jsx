const Rating = ({ rating }) => {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < Math.round(rating)) {
      stars = [...stars, <i key={i}>★</i>];
    } else {
      stars = [...stars, <i key={i}>☆</i>];
    }
  }
  return <ul className="rating">{stars.map((star) => star)}</ul>;
};

export default Rating;
