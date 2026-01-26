import './IdCard.css'

const IdCard = (props) => {

    const lastName = props.lastName
    const firstName = props.firstName
    const gender = props.gender
    const height = props.height
    const birth = props.birth
    const picture = props.picture

    return (
        <div className='IdCard'>
            <div>
                <img src={picture} alt={firstName} />
            </div>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Gender: {gender}</p>
                <p>Height: {height}</p>
                <p>Birth: {birth.toDateString()}</p>
            </div>
        </div>

    )
}

export default IdCard