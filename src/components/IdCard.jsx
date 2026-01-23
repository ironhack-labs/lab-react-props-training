import berlin from "../data/berlin.json";

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <section>
      <img src={picture} />
      <div className="info">
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}cm</p>
        <p>Birth: {birth}</p>
      </div>
    </section>
  );
}

export default IdCard;
