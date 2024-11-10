import "./IdCard.css";

function IdCard({lastName, firstName, gender, height, birth, picture}) {  
  return (
    <div className="id-card">
        <div className="picture-container">
            <img src={picture} alt="profile-picture" />
        </div>
        <div className="text-container">
            <p><strong>First name:</strong> {firstName}</p>
            <p><strong>Last name:</strong> {lastName}</p>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Height:</strong> {height/100}m</p>
            <p><strong>Birth:</strong> {birth.getDate()}</p>
        </div>   
    </div>
  );
}

export default IdCard;