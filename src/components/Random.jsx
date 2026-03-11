import "../App.css";

function Random({ min, max }) {

  const randomNumber =
    Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <p className="random">
      Random value between {min} and {max} =&gt; {randomNumber}
    </p>
  );
}

export default Random;