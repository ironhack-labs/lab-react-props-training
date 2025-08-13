function Rating(props) {
  // let rating = "";
  // for (let i = 1; i <= Math.round(props.children); i++) {
  //   rating += "★";
  // }
  let rating = "★".repeat(Math.round(props.children));
  return (
    <div className="rating-container">{rating.padEnd(5,"☆")}</div>
  );
}
export default Rating;
