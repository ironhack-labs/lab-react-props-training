import React from 'react';

export default function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
  const cardLogo = type === 'Visa'
    ? 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png'
    : 'https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png';
  const hiddenNumber = `•••• •••• •••• ${number.slice(-4)}`;
  return (
    <div style={{ backgroundColor: bgColor, color, borderRadius: '10px', width: '300px', padding: '20px', marginBottom: '10px' }}>
      <div style={{ textAlign: 'right' }}>
        <img src={cardLogo} alt={type} style={{ height: '20px' }} />
      </div>
      <div style={{ fontSize: '1.5em', margin: '10px 0' }}>{hiddenNumber}</div>
      <div>Expires {expirationMonth.toString().padStart(2, '0')}/{expirationYear} &nbsp; {bank}</div>
      <div>{owner}</div>
    </div>
  );
}
