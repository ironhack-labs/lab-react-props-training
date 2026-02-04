import React from 'react';
import Rating from './Rating';

export default function DriverCard({ name, rating, img, car }) {
  return (
    <div style={{ backgroundColor: '#455EB5', color: 'white', borderRadius: '10px', display: 'flex', alignItems: 'center', padding: '20px', marginBottom: '10px' }}>
      <img src={img} alt={name} style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginRight: '20px' }} />
      <div>
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <div>{car.model} - {car.licensePlate}</div>
      </div>
    </div>
  );
}
