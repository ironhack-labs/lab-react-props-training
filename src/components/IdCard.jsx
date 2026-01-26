function IdCard (props) {
    return (
        <div className = "idFormat">
        <img src={props.picture} alt="picture"></img>  
        <li>
         <ul> <b>First Name: </b> {props.firstName}</ul>  
         <ul><b>Last name: </b>{props.lastName}</ul>   
         <ul><b>Gender: </b>{props.gender}</ul>  
         <ul><b>Height: </b>{props.height}</ul>  
         <ul><b>Birth: </b>{props.birth.toDateString()}</ul>
         </li>  
        </div>
    )
}

export default IdCard