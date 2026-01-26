export default function IdCard(props) {
  return (
    <>
      <p>Last name: {props.lastName}</p>
      <p>First name: {props.firstName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Birth: {props.birth}</p>
      <img src={props.picture} />
    </>
  );
}
