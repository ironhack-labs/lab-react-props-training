import './IdCard.css'

const IdCard = (props) => {
    const firstName = props.firstName
    const lastName = props.lastName
    const gender = props.gender
    const height = props.height
    const birth = props.birth
    const picture = props.picture

    return (

        <article className="IdCard">
            <img src={picture} alt={firstName} />
            <ul>
                <li><strong>firstName: </strong> {firstName}</li>
                <li><strong>lastName: </strong>{lastName}</li>
                <li><strong>gender: </strong> {gender}</li>
                <li><strong>height: </strong> {height}</li>
                <li><strong>birth: </strong> {birth.toDateString()}</li>
            </ul>

        </article>

    )

}
export default IdCard