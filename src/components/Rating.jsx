import React from 'react';

export default function Rating({ children }) {
  const value = Math.round(Number(children));
  const stars = '★'.repeat(value) + '☆'.repeat(5 - value);
  return (
    <div style={{ fontSize: '2em', marginBottom: '10px' }}>{stars}</div>
  );
}
