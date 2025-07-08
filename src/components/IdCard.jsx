function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div>
      <div
        style={{
          border: "1px solid blue",
          borderRadius: "5px",
          backgroundColor: "orange",
        }}
      >
        <p>
          <b>First Name:</b> {firstName}
        </p>
        <p>
          <b>Last Name:</b> {lastName}
        </p>
        <p>
          <b>Gender:</b> {gender}
        </p>
        <p>
          <b>Height:</b> {height}
        </p>
        <p>
          <b>Birth date:</b> {birth.toDateString()}
        </p>{" "}

        <div>
          <p>
            <b>Picture:</b>{" "}
            <img src={picture} alt={`${firstName} ${lastName}`} />
          </p>
        </div>

      </div>
    </div>
  );
}

export default IdCard;
