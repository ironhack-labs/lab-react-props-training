function IdCard({ lastName, firstName, gender, height, birth, picture }) {
    return (
      <div>
        <p>{lastName}</p>
        <p>{firstName}</p>
        <p>{gender}</p>
        <p>{height}</p>
        <p>{birth}</p>
        <img src={picture}></img>
      </div>
    );
  }
  
  export default IdCard;