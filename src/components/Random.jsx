export const Random = (props) => {
  const { min, max } = props;

  const getRandomNumber = (min, max) => {
    const randomDecimal = Math.random();
    const randomNumberInRange = min + randomDecimal * (max - min);
    return Math.floor(randomNumberInRange);
  };

  return (
    <>
      <div className="random">
        Random value between {min} and {max} is: {getRandomNumber(min, max)}
      </div>
    </>
  );
};
