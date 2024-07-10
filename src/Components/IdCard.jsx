
function IdCard(props) {
  return (
    <div className="card"> 
    <p>First name {props.lastName}</p>
    <p>Last name{props.firstName}</p>
    <p>Gender{props.gender}</p>
    <p>Height{props.height}</p>
    <p>Birth{props.birth.toDateString()}</p>
    <img src={props.picture} alt="" />
    </div>
  )
}

export default IdCard