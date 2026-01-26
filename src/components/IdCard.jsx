function IdCard(props) {
  const stringData = props.birth
  //console.log(stringData.toString())
  //console.log(stringData.toDateString())
  //console.log(stringData.toISOString())
  //console.log(stringData.toLocaleDateString())
  
  return (
    <>
      <div className="card-container">
        <img src={props.picture}></img>
        <div className="idcard-text">
          <h4>First Name: <span>{props.firstName}</span></h4>
          <h4>Last Name: <span>{props.lastName}</span></h4>
          <h4>Gender: <span>{props.gender}</span></h4>
          <h4>Height: <span>{props.height}</span></h4>
          <h4>Birth: <span>{stringData.toDateString()}</span></h4>
        </div>
      </div>
    </>
  );
}
export default IdCard;
