import "./Rating.css";
const Rating = (props) => {
  const stars = [1, 2, 3, 4, 5];
  let result = "";

  stars.forEach((star) => {
    props.children > star ? (result += "★") : (result += "☆");
  });
  return <div>{result}</div>;
};

export default Rating;
