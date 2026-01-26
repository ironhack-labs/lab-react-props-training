function IdCard(props) {
    return (
      <section className="card">
        <img src={props.picture} alt={props.firstName} />
        <div>
          <p>First name: {props.firstName}</p>
          <p>Last name: {props.lastName}</p>
          <p>Gender: {props.gender}</p>
          <p>Height: {props.height}cm</p>
          <p>Birth: {props.birth.toDateString()}</p>
        </div>
      </section>
    );
  }
  
  export default IdCard;
  