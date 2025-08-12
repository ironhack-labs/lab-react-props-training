function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  const dateOptions = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className="container profile">
      <img src={picture} alt="Profile photo" />
      <div className="personal-data">
        <p><span className="categories">First name: </span>{firstName}</p>
        <p><span className="categories">Last name: </span>{lastName}</p>
        <p><span className="categories">Gender: </span>{gender}</p>
        <p><span className="categories">Height: </span>{height}</p>
        <p><span className="categories">Birth: </span>{birth.toLocaleDateString("en-US", dateOptions).replaceAll(",","")}</p>
      </div>
    </div>
  );
}
export default IdCard;
