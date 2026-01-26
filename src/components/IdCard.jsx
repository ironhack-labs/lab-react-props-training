

function IdCard (props){
       
    return (
        <div className="img">
           <img src={props.picture} alt="pic" />      
       <div className="info"> 
         <p> <b> FirstName: </b> {props.firstName} </p>
         <p> <b> LastName : </b> {props.lastName} </p> 
         <p> <b> Gender: </b> {props.gender} </p>
         <p>  <b> Height:  </b> {props.height/100}m </p>
         <p>  <b> Birth: </b>{props.birth.toDateString()}  </p>
            
        </div>
        </div>
    );
}

export default IdCard;