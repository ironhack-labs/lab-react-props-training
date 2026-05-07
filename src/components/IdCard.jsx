function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '10px',
      width: '400px',
      backgroundColor: '#fff',
      boxShadow: '2px 2px 6px rgba(0,0,0,0.1)'
    }}>
      <img
        src={picture}
        alt={`${firstName} ${lastName}`}
        style={{ width: '80px', height: '80px', borderRadius: '50%', marginRight: '16px' }}
      />
      <div>
        <p><strong>First Name:</strong> {firstName}</p>
        <p><strong>Last Name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {height} cm</p>
        <p><strong>Birth:</strong> {birth.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>
    </div>
  );
}

export default IdCard;