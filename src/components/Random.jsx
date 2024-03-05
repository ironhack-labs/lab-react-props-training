const Random = ({ min, max }) => {
  const result = Math.floor(Math.random() * max) + min;
  return (
    <>
      <p>
        Random value between {min} and {max} ={">"} {result}
      </p>
    </>
  );
};

export default Random;
