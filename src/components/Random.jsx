export const Random = ({ max, min }) => {
  const random = Math.round(Math.random() * (max - min) + min);

  return (
    <div>
      Random value between {max} and {min} = {random}
    </div>
  );
};
