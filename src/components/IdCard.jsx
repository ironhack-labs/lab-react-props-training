const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  console.log("Hi");
  return (
    <>
      <div className="container">
        <div>
          <img src={picture} alt={`${firstName} ${lastName}`} />
        </div>
        <div>
          <p>First name: {firstName}</p>
          <p>Last name: {lastName}</p>
          <p>Gender: {gender}</p>
          <p>Height: {height}cm</p>
          <p>Birth: {birth.toDateString()}</p>
        </div>
      </div>
    </>
  );
};

export default IdCard;
