
function IdCard({ lastName, firstName, gender, height, birth, picture }) {
    return (
      <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', display: 'flex' }}>
        <img
          src={picture}
           
          
          alt={`${firstName} ${lastName}`}
          style={{ width: '100px', marginRight: '10px' }}
        />
        <div>
          <p><b>First name:</b> {firstName}</p>
          <p><b>Last name:</b> {lastName}</p>
          <p><b>Gender:</b> {gender}</p>
          <p><b>Height:</b> {height}cm</p>
          <p><b>Birth:</b> {birth}</p>
        </div>
      </div>
    );
  }
  
export default IdCard;

