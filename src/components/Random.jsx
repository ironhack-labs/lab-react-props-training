const Random = (props) => {
  const minValue = props.min;
  const maxValue = props.max;
  const randomValue =
    Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  const text = `Random value between ${minValue} and ${maxValue} => ${randomValue}`;
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};
export default Random;
