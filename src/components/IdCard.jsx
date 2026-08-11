function IdCard(props) {
console.log (props)

  return (
    <div className="id-card" style={{display: "flex", border:"2px solid black"}}>
      <img src={props.picture} alt="picture" style={{width:"150px"}} />
      <div>
      <p><strong>lastName</strong> = {props.lastName}</p>
      <p><strong>firstName</strong> = {props.firstName}</p>
      <p><strong>gender</strong> = {props.gender}</p>
      <p><strong>heigh</strong> = {props.height/100}m</p>
      <p><strong>birth</strong> = {props.birth.toDateString()}</p>
    </div>
    </div>
  );
}

export default IdCard