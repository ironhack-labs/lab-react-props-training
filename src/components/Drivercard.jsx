import Rating from './Rating';

function DriverCard({ name, rating, img, car }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '16px',
      margin: '10px',
      width: '420px',
      backgroundColor: '#fff',
      boxShadow: '2px 2px 8px rgba(0,0,0,0.1)'
    }}>
      <img
        src={img}
        alt={name}
        style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover', marginRight: '16px' }}
      />
      <div>
        <h3 style={{ margin: '0 0 4px 0' }}>{name}</h3>
        <Rating>{rating}</Rating>
        <p style={{ margin: '4px 0' }}><strong>🚗 {car.model}</strong></p>
        <p style={{ margin: '4px 0', color: '#666' }}>License: {car.licensePlate}</p>
      </div>
    </div>
  );
}

export default DriverCard;