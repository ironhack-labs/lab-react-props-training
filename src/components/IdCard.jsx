import "./IdCard.css";

function IdCard({ lastName, firstName, gender, height, birth, picture }){

   
 return (
    <div className = "id-card">
      <img src={picture} alt=""  />
      <div className="text">
      <p>First name: {firstName}</p>

      <p>Last name: {lastName}</p>
      <p>Gender: {gender}</p>
      <p>Height: {height} cm</p>
      <p>Birth: {birth.toDateString()}</p>
      </div>
    </div>
  );
}

export default IdCard