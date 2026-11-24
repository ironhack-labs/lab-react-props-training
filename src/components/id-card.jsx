import "./id-card.css"

function IdCards({firstName,lastName,gender,height,birth,picture}) {
    return (
    
    <div className="id-card">
        
        <img src={picture} alt="" />
      
      <div className= "id-card-info">

        <p><strong>First Name: </strong>{firstName}</p>
        <p><strong>Last Name: </strong>{lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Heigth:</strong> {height}</p>
        <p><strong>Birth:</strong> {birth.toDateString()}</p>
        
      </div>
    </div>
    );
}

export default IdCards;