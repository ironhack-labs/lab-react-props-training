import React from 'react';

export default function BoxColor({ r, g, b }) {
  const rgb = `rgb(${r},${g},${b})`;
  const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
  return (
    <div style={{ backgroundColor: rgb, color: '#000', border: '1px solid #ccc', padding: '20px', marginBottom: '10px', textAlign: 'center' }}>
      <div>{rgb}</div>
      <div>{hex}</div>
    </div>
  );
}
