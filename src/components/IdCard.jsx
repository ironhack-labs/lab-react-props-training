const IdCard = ({ picture, firstName, lastName, gender, height, birth }) => {
  return (
    <>
      <img src={picture} />
      <p>First name: {firstName}</p>
      <p>Last name: {lastName}</p>
      <p>Gender: {gender}</p>
      <p>Height: {height}</p>
      <p>Birth: {birth.toDateString()}</p>
    </>
  );
};

export default IdCard;
