// rfce

function IdCard(props) {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px'}}>
      <img src={props.picture}></img>
      <p>{props.lastName}</p>
      <p>{props.firstName}</p>
      <p>{props.gender}</p>
      <p>{props.height}</p>
      <p>{props.birth.toDateString()}</p>
      
    </div>
  );
}

export default IdCard;
