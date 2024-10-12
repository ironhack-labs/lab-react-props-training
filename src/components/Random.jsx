export const Random = (props) => {
  const { min, max } = props;

  const randomInteger = Math.floor(Math.random() * 6) + 1;
  return (
    <div className="random">
      <p>
        Random value between {min} and {max} = {randomInteger}
      </p>
    </div>
  );
};
