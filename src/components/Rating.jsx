function Rating(props) {
let roundedRating = Math.round(props.children);
let stars = "";

 for (let i = 0; i < 5; i++) {
    if (i < roundedRating) {
      stars += "★";
    } else {
      stars += "☆";
    }
  }
  return  <div>{stars}</div>;;
}

export default Rating