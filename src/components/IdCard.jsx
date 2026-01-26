const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', margin: '20px', padding: '10px', border: '1px solid #ccc' }}>
        <img src={picture} alt={`${firstName} ${lastName}`} style={{ width: '100px', marginRight: '20px' }} />
        <div>
          <p><strong>First name:</strong> {firstName}</p>
          <p><strong>Last name:</strong> {lastName}</p>
          <p><strong>Gender:</strong> {gender}</p>
          <p><strong>Height:</strong> {height}cm</p>
          <p><strong>Birth:</strong> {birth.toDateString()}</p>
        </div>
      </div>
    );
  };
  
  export default IdCard;