import React from 'react';

export default function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <img src={picture} alt={firstName} style={{ width: '100px', marginRight: '20px' }} />
      <div>
        <p><strong>First name:</strong> {firstName}</p>
        <p><strong>Last name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {height}m</p>
        <p><strong>Birth:</strong> {birth.toLocaleDateString()}</p>
      </div>
    </div>
  );
}
