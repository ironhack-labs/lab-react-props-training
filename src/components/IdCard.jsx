export default function IdCard(props) {

    const birthDay = props.birth
    const birthDayFormated = birthDay.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "2-digit",
        year: "numeric"
      });

      const height = props.height / 100

  return (
    <div className="userBox">
      <img src={props.picture} alt="User Image" />
     
     <ul>
        <li><strong>First name: </strong>{props.firstName}</li>
        <li><strong>Last name: </strong>{props.lastName}</li>
        <li><strong>Gender: </strong>{props.gender}</li>
        <li><strong>Height: </strong>{height} m</li>
        <li><strong>Birth: </strong>{birthDayFormated}</li>
        {/* <li><span>Birth: </span>{props.birth.toLocaleDateString()}</li> */}
      
     </ul>
        
     
    </div>
  );
}
