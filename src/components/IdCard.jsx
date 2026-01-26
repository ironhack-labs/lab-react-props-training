import "./IdCard.css"

function IdCard(props) {
return (
    <>
    <ul className = "card-ul">
        <li> lastName: {props.surname}</li>
        <li> firstName: {props.name}</li>
        <li> gender: {props.gender}</li>
        <li> height: {props.height}</li>
        <li> date of birth: {props.birth} </li>
        <li> <img src = {props.picture} alt = "face picture" /></li>
    </ul>
    </>
)
}

export default IdCard;