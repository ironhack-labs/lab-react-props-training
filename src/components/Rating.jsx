function Rating(props) {
  let ratingText;

  switch (true) {
    case props.children === 0:
      ratingText = "☆☆☆☆☆";
      break;
    case props.children > 0 && props.children <= 1:
      ratingText = "★☆☆☆☆";
      break;
    case props.children > 1 && props.children <= 2:
      ratingText = "★★☆☆☆";
      break;
    case props.children > 2 && props.children <= 3:
      ratingText = "★★★☆☆";
      break;
    case props.children > 3 && props.children <= 4:
      ratingText = "★★★★☆";
      break;
    case props.children > 4 && props.children <= 5:
      ratingText = "★★★★★";
      break;
    default:
      ratingText = "No info";
  }

  return (
    <div>
      <p>{ratingText}</p>
    </div>
  );
}

export default Rating;
