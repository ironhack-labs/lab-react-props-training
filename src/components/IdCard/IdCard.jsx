import './../IdCard/IdCard.css'

const IdCard = (props) => {
    const lastName = props.lastName
    const firstName = props.firstName
    const gender = props.gender
    const height = props.height
    const birth = props.birth
    const picture = props.picture


    return (
        <article>
            <img src={picture} alt={firstName} />
            <ul>
                <li><strong>first Name:</strong> {firstName}</li>
                <li><strong>last Name:</strong> {lastName}</li>
                <li><strong>gender:</strong> {gender}</li>
                <li><strong>height:</strong> {height}</li>
                <li><strong>birth:</strong> {birth.toDateString()}</li>
            </ul>
        </article>

    )

}
export default IdCard