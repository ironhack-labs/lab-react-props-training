const Random = ({ min, max }) => {
  const result = Math.floor(Math.random() * max) + 1;
  return (
    <>
      <p>
        Random value between {min} and {max} ={">"} {result}
      </p>
    </>
  );
};

export default Random;
