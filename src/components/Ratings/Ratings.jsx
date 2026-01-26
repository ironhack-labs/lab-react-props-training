import "./Ratings.css";

function Ratings(props) {
  let int = Math.floor(props.children);
  console.log(int);
  let rate = {
    1: `★☆☆☆☆`,
    0: `☆☆☆☆☆`,
    2: `★★☆☆☆`,
    3: `★★★☆☆`,
    4: `★★★★☆`,
    5: `★★★★★`,
  };
  return <p>{rate[int]}</p>;
}

export default Ratings;
