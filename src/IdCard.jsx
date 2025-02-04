
function IdCard(props) {
    const birthDate = new Date(props.id.birth); // Convert string to Date object

  return (
    <div>
     
          <section className="card" >
            <img className = "img" src={props.id.picture}/>
            <div className ="info-card">
                <p><b>First Name: </b>{props.id.firstName}</p>
                <p><b>Last Name: </b> {props.id.lastName}</p>
                <p><b>Gender: </b>{props.id.gender}</p>
                <p><b>Height: </b> {props.id.height}</p>
                <p><b>Birth: </b> {birthDate.toDateString()}</p>
            </div>
          </section>    
   
    </div>
  );
}

export default IdCard;