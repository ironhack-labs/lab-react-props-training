
/*
lastName: A string
firstName: A string
gender: A string, 'male' or 'female'
height: A number
birth: A date
picture: A string
*/

import "./IDcard.css"

const IDcard = (props) => {
  return (
    <div className="id-card">
        <img src={props.picture} />
        <div className="id-card-data">
            <h2><strong>First name:</strong> {props.firstName}</h2>
            <h2><strong>Last name:</strong> {props.lastName}</h2>
            <h2><strong>Gender:</strong> {props.gender}</h2>
            <h2><strong>Height:</strong> {props.height}m</h2>
            <h2><strong>Birth:</strong> {props.birth.toDateString()}</h2>
        </div>        
    </div>
  )
}

export default IDcard