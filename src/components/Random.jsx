const Random = ({ min, max }) => {
  const randomNum = Math.floor(Math.random() * (max - min));

  return (
    <div>
      <p>Random: {randomNum}</p>
    </div>
  );
};

export default Random;
