import "./IdCard.css";

function IdCard(props) {
  //console.log(props);
  return (
    <div className="id-card">
      <img src={props.picture} alt="Id-picture" className="id-picture" />
      <div className="id-detail">
        <p>
          <strong>lastName: {props.lastName}</strong>
        </p>
        <p>
          <strong>firstName : {props.firstName}</strong>
        </p>
        <p>
          <strong>gender:{props.gender}</strong>
        </p>
        <p>
          <strong>height: {props.height}</strong>
        </p>
        <p>
          <strong>birth : {props.birth.toLocaleDateString()}</strong>
        </p>
      </div>
    </div>
  );
}
export default IdCard;
