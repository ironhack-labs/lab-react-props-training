export default function IdCard(props){
  return (
      <div>
      <img src={props.picture} alt={`${props.firstName} ${props.lastName}`}  />
      <div>
        <p>Last Name {props.lastName}</p>
        <p>First Name {props.firstName}</p>
        <p>Gender {props.gender}</p>
        <p>Height {props.height} cm</p>
        <p>Birth:{props.birth.toDateString()}</p>
      </div>
      </div>
  );
}
