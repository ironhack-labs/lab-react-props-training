import React from 'react';

export default function Random({ min, max }) {
  const value = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      Random value between {min} and {max} => {value}
    </div>
  );
}
