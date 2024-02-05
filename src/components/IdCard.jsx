import "../App.css";



function IdCard(props) {

const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

  return (
    <div className="IdCard">
    <div className="pictureCard">
      <img src={props.picture}  />
      </div>
      <div className="textCard">
      <p>First name: {props.firstName}</p>
      <p>Last name: {props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Birth: {props.birth.toLocaleDateString('en-us', options)}</p>
      </div>
    </div>
  );
}

export default IdCard;
