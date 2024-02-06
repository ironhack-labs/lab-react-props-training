function IdCard(props) {
  return (
    <div id="box">
      <div id="container">
        <div id="img-container">
          <img src={props.picture} />
        </div>
        <div id="infos">
          <h3>First name: {props.firstName}</h3>
          <h3>Last name: {props.lastName}</h3>
          <h3>gender: {props.gender}</h3>
          <h3>Height: {props.height}</h3>
          <h3>Birth: {props.birth}</h3>
        </div>
      </div>
    </div>
  );
}

export default IdCard;
