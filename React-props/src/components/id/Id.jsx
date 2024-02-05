import './Id.css'

const IdCard = (props) => {

    const lastName = props.lastName
    const firstName = props.firstName
    const gender = props.gender
    const height = props.height
    const birth = props.birth
    const picture = props.picture

    return (




        <article className='idCards'>
            <img src={picture} alt="photo" />
            <ul>
                <li><strong>lastName:</strong>{firstName}</li>
                <li><strong>firstName:</strong>{lastName}</li>
                <li><strong>gender:</strong>{gender}</li>
                <li><strong>height:</strong>{height}</li>
                <li><strong>Birth:</strong>{birth.toDateString()}</li>


            </ul>

        </article>


    )
}

export default IdCard
