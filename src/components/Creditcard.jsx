function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
  const lastFourDigits = number.slice(-4);
  const formattedMonth = expirationMonth.toString().padStart(2, '0');

  return (
    <div style={{
      backgroundColor: bgColor,
      color: color,
      width: '320px',
      height: '190px',
      borderRadius: '12px',
      padding: '20px',
      margin: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '4px 4px 12px rgba(0,0,0,0.3)',
      fontFamily: 'monospace',
      boxSizing: 'border-box'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{bank}</span>
        <span style={{ fontSize: '22px', fontWeight: 'bold', fontStyle: 'italic' }}>{type}</span>
      </div>

      <div style={{ fontSize: '20px', letterSpacing: '2px' }}>
        **** **** **** {lastFourDigits}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <div style={{ fontSize: '10px', opacity: 0.8 }}>Card Holder</div>
          <div style={{ fontSize: '14px' }}>{owner}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '10px', opacity: 0.8 }}>Expires</div>
          <div style={{ fontSize: '14px' }}>{formattedMonth}/{expirationYear}</div>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;