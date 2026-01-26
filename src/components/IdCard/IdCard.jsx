import './IdCard.css'

const IdCard = (props) => {
    const lastName = props.lastName
    const firstName = props.firstName
    const gender = props.gender
    const height = props.height
    const birth = props.birth
    const picture = props.picture

    return (
        <article className = 'IdCard'>
        <img src={picture} alt="person" id="img-person"/>
        <ul>
            <li><strong>First name:</strong> {firstName}</li>
            <li><strong>Last name:</strong> {lastName}</li>
            <li><strong>Gender:</strong> {gender}</li>
            <li><strong>Height:</strong> {height}</li>
            <li><strong>Birth:</strong> {birth.toDateString()}</li>
        </ul>
        </article>
    )
} 

export default IdCard