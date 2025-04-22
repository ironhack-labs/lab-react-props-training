function IdCard(props) {
    return (
      <div className="idCard">
        <div className = "photo">
        <img src={props.picture} alt={`${props.firstName} ${props.lastName}`} />
        </div>
        <div className = "details">
            <strong>First Name:</strong> {props.firstName}<br />
            <strong>Last Name:</strong> {props.lastName}<br />
            <strong>Gender:</strong> {props.gender}<br />
            <strong>Height:</strong> {(props.height / 100).toFixed(2)}m<br />
            <strong>Birth:</strong> {props.birth.toDateString()}
        </div>
      </div>
    );
  }
  
  export default IdCard;
  