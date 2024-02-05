import "./Random.css";

export default function Random({ min, max }) {
  const randomNum = Math.floor(Math.random() * max +1);
  return (
    <p className="randomNum">
      Random value between {min} and {max} => {randomNum}
    </p>
  );
}
