const options = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
};

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        border: "2px solid #000",
        padding: "5px",
        margin: "10px",
      }}
    >
      <img src={picture} alt="Person" />
      <div>
        <p>
          <span style={{ fontWeight: "bold" }}>First name</span>: {firstName}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Last name</span>: {lastName}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Gender</span>: {gender}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Height</span>: {height}m
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Birth</span>:{" "}
          {birth.toLocaleString("en-US", options)}m
        </p>
      </div>
    </div>
  );
}

export default IdCard;
