export const IdCard = (props) => {
  console.log(props.birth);
  const { lastName, firstName, gender, height, birth, picture } = props;

  return (
    <>
      <div className="IdCard">
        <img src={picture} alt="" />
        <div className="info">
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
            <strong>Height:</strong> {height}
          </p>
          <p>
            <strong>Birth:</strong>
            {birth}{" "}
          </p>
        </div>
      </div>
    </>
  );
};
