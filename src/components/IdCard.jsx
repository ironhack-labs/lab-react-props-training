import "../App.css";

function IdCard(props) {
  return (
    <div className="container">
        <img src={props.picture} />
        <div>
            <p>First name: {props.firstName}</p>
            <p>Last name: {props.lastName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>birth: {props.birth}</p>
        </div>
    
    </div>
  )
}

export default IdCard