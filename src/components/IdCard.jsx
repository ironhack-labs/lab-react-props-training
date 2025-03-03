export default function IdCard({
  lastName,
  firstName,
  gender,
  height,
  birth,
  picture,
}) {
  return (
    <div className="block">
      <div>
        <img src={picture} />
      </div>
      <div className="infos">
        <p>Firstname: {firstName}</p>
        <p>Lastname: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Heigth: {height}</p>
        <p>Birthday: {birth.toLocaleString().substring(0, 10)}</p>
      </div>
    </div>
  );
}
