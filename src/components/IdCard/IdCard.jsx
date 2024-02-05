import './IdCard.css'

const IdCard = (props) => {

    const firstName = props.firstName;
    const lastName = props.lastName;
    const gender = props.gender;
    const height = props.height;
    const birth = props.birth;
    const picture = props.picture

    return (

        <article>
            <img src={picture} alt="picture" />
            <ul>
                <li><strong>First Name: </strong> {firstName}</li>
                <li><strong>Last Name:</strong> {lastName}</li>
                <li><strong>Gender: </strong>{gender}</li>
                <li><strong>Height: </strong>{height}</li>
                <li><strong>Birth: </strong>{birth.toDateString()}</li>
            </ul>
        </article>

    )
}

export default IdCard