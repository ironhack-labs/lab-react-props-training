function CreditCard(props) {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;
    const last4Digits = number.slice(-4);
  
    return (
     
      <div style={{
        backgroundColor: bgColor,
        color: color,
        width: '300px',
        height: '180px',
        borderRadius: '10px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'coloumn',
        justifyContent: 'space-between',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <img src={`/${type.toLowerCase()}-logo.png`} alt={type} style={{ width: '50px' }} />
        </div>
  
        <div style={{
          fontSize: '1.2em',
          letterSpacing: '1px',
          fontWeight: 'bold'
        }}>
          **** **** **** {last4Digits}
        </div>
  
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.9em'
        }}>
          <div>
            <span>Expires:</span> {expirationMonth}/{expirationYear}
          </div>
          <div>
            <span>{bank}</span>
          </div>
        </div>
  
        <div style={{
          textAlign: 'right',
          fontSize: '1em',
          fontWeight: 'bold'
        }}>
          {owner}
        </div>
      </div>
    );
  }
  
  
  export default CreditCard;
  