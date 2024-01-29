const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="id-card">
      <img src={picture} alt={`${firstName} ${lastName}`}></img>
      <div>
        <p>First Name : {firstName}</p>
        <p>Last Name : {lastName}</p>
        <p>Gender : {gender}</p>
        <p>Height : {height}</p>
        <p>Birth : {birth.toDateString()}</p>
      </div>
    </div>
  );
};
export default IdCard;
