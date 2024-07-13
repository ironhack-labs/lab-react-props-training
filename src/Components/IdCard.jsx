export default function IdCard({
  lastName,
  firstName,
  gender,
  height,
  birth,
  picture,
}) {
  return (
    <div>
      <h1>Id Card</h1>
      <img src={picture} alt="Profile Pic" />
      <h2>
        Name: {firstName} {lastName}
      </h2>
      <h3>Gender: {gender}</h3>
      <h4>Height: {height} cm</h4>
      <h5>Birth: {birth}</h5>
    </div>
  );
}
