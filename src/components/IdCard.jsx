function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="id-card" style={styles.card}>
      <img
        src={picture}
        alt={`${firstName} ${lastName}`}
        style={styles.image}
      />
      <div className="id-details" style={styles.details}>
        <p>
          <strong>First name:</strong> {firstName}
        </p>
        <p>
          <strong>Last name:</strong> {lastName}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Height:</strong> {height}cm
        </p>
        <p>
          <strong>Birth:</strong> {birth.toDateString()}
        </p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    width: "350px",
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  image: {
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    marginRight: "16px",
  },
  details: {
    textAlign: "left",
  },
};

export default IdCard;
