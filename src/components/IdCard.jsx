export function IdCard(props) {
 

  return (
    <div className="IdCard">
      {props.picture && (
        <div className="IdCard-picture">
          <img src={props.picture} alt='No image'/>
        </div>
      )}

      <p>
        <b>Last name:</b> {props.lastName}
      </p>
      <p>
        <b>First name:</b> {props.firstName}
      </p>
      <p>
        <b>Gender:</b> {props.gender}
      </p>
      <p>
        <b>Height:</b> {props.height} cm
      </p>
      <p>
        <b>Birth:</b> {props.birth}
      </p>
    </div>
  );
}
