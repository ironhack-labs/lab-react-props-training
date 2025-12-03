function Rating({ children }){

  let num = Math.round(children);
  let stars;
  switch (num) {
    case 0:
      stars = "☆☆☆☆☆";
      break;
    case 1:
      stars = "★☆☆☆☆";
      break;
    case 2:
      stars = "★★☆☆☆";
      break;
    case 3:
      stars = "★★★☆☆";
      break;
    case 4:
      stars = "★★★★☆";
      break;
    case 5:
      stars = "★★★★★";
      break;
  }

  return(
    <div className="Rating m-1 p-1`">{stars}</div>
  );
}

export default Rating;