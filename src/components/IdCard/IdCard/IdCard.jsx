import "./IdCard.css";

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  {
    /* birth is an object so it needs to be converted into a string before we add it to html. */
  }
  const birthString = birth.toString();
  return (
    <div className="idCard">
      <img src={picture} alt={`${firstName} ${lastName}`} />
      <ul>
        <li>First name: {firstName}</li>
        <li>Last name: {lastName}</li>
        <li>Gender: {gender}</li>
        <li>Height: {height}</li>
        <li>Birth: {birthString}</li>
      </ul>
    </div>
  );
};

export default IdCard;
