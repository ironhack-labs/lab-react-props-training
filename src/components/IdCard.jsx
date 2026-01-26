import './IdCard.css';

export const IdCard = (props) => {
    const { lastName, firstName, gender, height, birth, picture } = props;

  return (
    <div className='card-container'>
        <div className="card-pict-container">
            <img className="card-pict" src={picture} alt={lastName} />
        </div>
        <div className="context-container">
            First name: {firstName} <br />
            Last name: {lastName} <br />
            Gender: {gender} <br />
            Height: {height}m <br />
            Birth: {birth}
        </div>
    </div>
  )
}
