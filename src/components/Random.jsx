export const Random = ({ min, max }) => {
  const minNum = parseInt(min);
  const maxNum = parseInt(max);
  const randomNum = Math.round(Math.random() * (maxNum - minNum) + minNum);
  return (
    <div>
      Random value between {min} and {max} ={">"} {randomNum}
    </div>
  );
};
