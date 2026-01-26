let RandomInt = (props) => {
  const min = parseInt(props.min);
  const max = parseInt(props.max);
  return (
    <p className="randomNum">
      <b>
        Random value between {min} and {max}:
      </b>
      {Math.floor(Math.random() * (max - min + 1)) + min}
    </p>
  );
};
export default RandomInt;
