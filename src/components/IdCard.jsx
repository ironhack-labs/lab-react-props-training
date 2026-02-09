function IdCard(props) {
  return (
    // We use a div to wrap everything so it stays together
    <div style={{ border: '1px solid black', margin: '10px', display: 'flex', padding: '5px' }}>
      
      {/* 1. Show the image using the 'picture' prop */}
      <img src={props.picture} alt="profile" />

      {/* 2. Show the text info next to the image */}
      <div style={{ marginLeft: '10px' }}>
        <p><b>First name:</b> {props.firstName}</p>
        <p><b>Last name:</b> {props.lastName}</p>
        <p><b>Gender:</b> {props.gender}</p>
        <p><b>Height:</b> {props.height / 100}m</p>
        
        {/* Dates need .toDateString() or they will look like a mess of numbers! */}
        <p><b>Birth:</b> {props.birth.toDateString()}</p>
      </div>

    </div>
  );
}

export default IdCard;