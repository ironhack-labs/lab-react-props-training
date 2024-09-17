function CreditCard(props) {
  let number = props.number.toString()
  let oculto = number.slice(-4).padStart(number.length, '\u25CF')
  let year = props.expirationYear.toString()
  return (
    <div
      className="creditCard"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <h3>{props.type}</h3>
      </div>
      <h3
        style={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: '30px',
          margin: '0',
          alignItems: 'center',
        }}
      >
        {oculto}
      </h3>
      <p style={{ display: 'flex', gap: '20px', margin: '0' }}>
        <span>
          Expires {props.expirationMonth}/{year.slice(-2)}
        </span>

        <span>{props.bank}</span>
      </p>
      <p style={{ margin: '0' }}>{props.owner}</p>
    </div>
  )
}

export default CreditCard
