function IdCard(props) {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
         <img src="https://randomuser.me/api/portraits/men/44.jpg" />
         <div style={{display: "flex", flexDirection: "column", whiteSpace: "nowrap", margin: "0px"}}>
      <p>Last name: {props.lastName}</p>
      <p>First name: {props.firstName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height / 100}m</p>
      <p>Birth: {props.birth.toDateString()}</p>
     </div>
    </div>
  );
}

export default IdCard;
