export const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="idcard">
      <img src={picture} />
      <div className="info">
        <p>
          <span>First Name:</span> {firstName}
        </p>
        <p>
          <span>Last Name:</span> {lastName}
        </p>
        <p>
          <span>Gender:</span> {gender}
        </p>
        <p>
          <span>Height:</span> {height}
        </p>
        <p>
          <span>Birth:</span> {JSON.stringify(birth)}
        </p>
      </div>
    </div>
  );
};
