export default function Random(props) {
  const { min, max } = props;

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="Box">
      Random value between {min} and {max} {"=> " + getRandom(min, max)}{" "}
    </div>
  );
}
