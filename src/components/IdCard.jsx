function IdCard(props) {
  let birth = props.birth.toDateString();
  let idCardStl = {
    display: "flex",
    border: "2px solid black",
    margin: "10px",
  };
  return (
    <div style={idCardStl}>
      <img
        src={props.image}
        alt={props.name}
        width="200px"
        style={{ margin: "5px" }}
      />
      <div style={{ marginLeft: "10px" }}>
        <p>
          <b>Firts name:</b> {props.name}
        </p>
        <p>
          <b>Last name:</b> {props.lastName}
        </p>
        <p>
          <b>Gender:</b> {props.gender}
        </p>
        <p>
          <b>Height:</b> {props.height}
        </p>
        <p>
          <b>Birth:</b> {birth}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
