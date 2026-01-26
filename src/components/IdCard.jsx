function IdCard (props){

  return (
 <div className="id-card">
    <p>First name : {props.firstName} </p>
    <p>Last name : {props.LastName}  </p>
    <p>Gender : {props.gender}  </p>
    <p>Height : {props.height}  </p>
    <p>Birth : {props.birth}   </p>
    <img src="{props.picture}" />

 </div>
  )  
}


export default IdCard;