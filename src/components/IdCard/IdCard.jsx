function IdCard(props) {
  const cardStyles = {
    margin: "10px",
    border: "1px solid",
    padding: "5px",
    display: "flex",
  };

  const infoStyles = {
    listStyleType: "none"
  }

  return (
    <div style={cardStyles}>
      <img src={props.picture} alt="Picture" />
        <ul style={infoStyles}>
          <li><strong>First name: </strong>{props.firstName}</li>
          <li><strong>Last name: </strong>{props.lastName}</li>
          <li><strong>Gender: </strong>{props.gender}</li>
          <li><strong>Heigth: </strong>{props.height/100}m</li>
          <li><strong>Birth: </strong>{props.birth.toDateString()}</li>
        </ul>
    </div>
  );
}

export default IdCard;
