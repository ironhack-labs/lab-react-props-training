function IdCard(props){

     return(
        <div>
        <p>
        <b> First name: </b>{props.person.firstName}
        <b> Last name: </b>{props.person.lastName} 
        <b> Gender: </b>{props.person.gender}  
        <b> Heigth: </b>{props.person.heigth}  
        <b> Birth: </b>{props.person.birth}  
        </p>
        <img src={props.person.picture}></img>
        </div>
    )}
    
    export default IdCard