function IdCard(props) {
  return (
    <div
      className="id-card"
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        display: "flex",
      }}
    >
      <img
        src={props.picture}
        style={{ width: "150px", marginRight: "10px" }}
      />
      <div>
        <p>
          First name: <span>{props.firstName}</span>
        </p>
        <p>
          Last name: <span>{props.lastName}</span>
        </p>
        <p>
          Gender: <span>{props.gender}</span>
        </p>
        <p>
          Height: <span>{props.height}cm</span>
        </p>
        <p>
          Birth: <span>{props.birth.toDateString()}</span>
        </p>
      </div>
    </div>
  );
}

export default IdCard;
