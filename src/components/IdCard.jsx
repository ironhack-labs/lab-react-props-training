export const IdCard = (props) => {
  const { firstName, lastName, gender, height, birth, picture } = props;
  return (
    <div>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Gender: {gender}</p>
      <p>Height: {height}</p>
      {/* <p>Birth: {birth}</p> */}
      <p>Pic: {picture}</p>
    </div>
  );
};
