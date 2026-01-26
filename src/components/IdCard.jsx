function IdCard (props) {
    return (
      <section className="card">
        <p>{props.lastName} </p>
        <p>{props.firstName} </p>
        <p>{props.gender} </p>
        <p>{props.height} </p>
        <p>{props.birth.getMonth()} </p>
        <img src = {props.picture} />
      </section>
    );
  }
  
  export default IdCard;