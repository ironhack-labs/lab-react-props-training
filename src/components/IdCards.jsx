

function IdCards (props){

 const cardStyle={
  border: "lightgrey solid px",
  backgroundColor: "white",
  padding:"8px",
  display: "flex",
  gap: "16px",
  
 }
 

return (
  
    <div style={cardStyle}>
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        width="30%"
        alt=""
      />
      <div className="card-text">
        <p>{props.lastName}</p>
        <p>{props.firstName}</p>
        <p>{props.gender}</p>
        <p>{props.height}</p>
        <p>{props.birth}</p>
      </div>
    </div>
  
);

}

export default IdCards;