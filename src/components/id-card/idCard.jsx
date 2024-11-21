import Panel from "../ui/panel/panel";

{/* <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/> */}
function IdCard({
    className= "",
    lastName,
    firstName,
    gender,
    height,
    birth,
    picture
}) {
    return (
        <Panel className={className}>
            <img className="img-fluid" src={picture} alt={firstName}  />
            <ul className="list-unstyled mb-0">
                <li><strong>First name:</strong>{firstName}</li>
                <li><strong>Last name:</strong>{lastName}</li>
                <li><strong>Gender:</strong>{gender}</li>
                <li><strong>Height:</strong>{(height / 100).toFixed(2)}m</li>
                <li><strong>Birth:</strong> {birth.toDateString()}</li>
                {/* <li><strong>Birth:</strong>{birth}</li> */}
            </ul>
        </Panel>
    );
}

export default IdCard;
