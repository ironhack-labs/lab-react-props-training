

function IdCard({ className = '', firstName, lastName, gender, height, birth, picture }) {
    return (
      <div className={`border border-black p-1 d-flex flex-wrap gap-2 ${className}`}>
        <img className="img-fluid" src={picture} alt={firstName} />
        <ul className="list-unstyled mb-0">
          <li><strong>First name:</strong> {firstName}</li>
          <li><strong>Last name:</strong> {lastName}</li>
          <li><strong>Gender:</strong> {gender}</li>
          <li><strong>Height:</strong> {(height / 100).toFixed(2)}m</li>
          <li><strong>Birth:</strong> {birth.toDateString()}</li>
        </ul>
      </div>
    );
  }
  
  export default IdCard;
  