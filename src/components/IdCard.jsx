import "./IdCard.css";

export const IdCard = ({
  firstName,
  lastName,
  gender,
  height,
  birth,
  picture,
}) => {
  return (
    <div className="card-id">
      <div className="card-img">
        <img src={picture} />
        <div className="cards">
          <>
            <p>
              <b> First Name:</b> {firstName}
            </p>
            <p>
              <b> Last Name:</b> {lastName}
            </p>
            <p>
              <b> Gender: </b> {gender}
            </p>
            <p>
              <b> Height: </b> {height}
            </p>
            <p>
              <b> Birth: </b> {birth.toLocaleDateString()}
            </p>
            <p>
              <b> Gender: </b> {gender}
            </p>
          </>
        </div>
      </div>
    </div>
  );
};
