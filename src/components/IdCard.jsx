import "./IdCard.css";

export const IdCard = (props) => {
  const { firstName, lastName, gender, height, birth, picture } = props;
  const convertedHeight = height / 100 + "m";
  const formattedDate = birth.toDateString();

  return (
    <div className="id-card">
      <div>
        <p>
          <img src={picture} id="card-image"></img>
        </p>
      </div>
      <div className="card-info">
        <p>
          <span>First Name:</span>
          {firstName}
        </p>
        <p>
          <span>Last Name:</span> {lastName}
        </p>
        <p>
          <span>Gender:</span> {gender}
        </p>
        <p>
          <span> Height: </span>
          {convertedHeight}
        </p>
        <p>
          <span>Birth:</span>
          {formattedDate}
        </p>
      </div>
    </div>
  );
};
