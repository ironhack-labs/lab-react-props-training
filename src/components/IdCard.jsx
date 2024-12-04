function IdCard(props) {
    return (
      <div
        className="id-card"
        style={{
          display: "flex",
          flexDirection: "row",
          height: "150px",
          border: "1px solid #ccc",
          borderRadius: "9px",
          padding: "0px",
          borderRadius: "10px",
          margin: "10px",
          alignItems: "center",
          overflow: "hidden"
        }}
      >
        <img
          src={props.picture}
          alt={`${props.firstName} ${props.lastName}`}
          style={{ width: "150px", height: "150px", marginRight: "15px" }}
        />
        <div  style={{ lineHeight: '13px' }}>
          <p><strong>Last Name:</strong> {props.lastName}</p>
          <p><strong>First Name:</strong> {props.firstName}</p>
          <p><strong>Gender:</strong> {props.gender}</p>
          <p><strong>Height:</strong> {props.height}m</p>
          <p><strong>Birth:</strong> {props.birth.toDateString()}</p>
        </div>
      </div>
    )
  }
  
  export default IdCard