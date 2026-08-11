function CreditCard(props){

    let maskedCreditCard = maskCardNumber(props.number);

    return(
        <div style={{ backgroundColor: props.bgColor, borderRadius: '10px' , width: '320px', padding: '15px', marginBottom: '10px', marginLeft: '10px'}}>
            <p className="no-margin" style={{textAlign: 'end'}}>{props.type}</p>
            <h1 className="no-margin" style={{textAlign: 'center', fontWeight: '500'}}>{maskedCreditCard}</h1>
            <p className="no-margin" style={{fontSize: '14px', marginTop: '10px'}}>Expires {String(props.expirationMonth).padStart(2, '0')}/{props.expirationYear}   {props.bank} </p>
            <p className="no-margin" style={{fontSize: '14px'}}>{props.owner}</p>
        </div>
    );
}

function maskCardNumber(str) {
  let result = '';
  const length = str.length;

  for (let i = 0; i < length; i++) {
    // Si on a déjà écrit un paquet de 4 caractères, on ajoute un espace
    if (i > 0 && i % 4 === 0) {
      result += ' ';
    }

    // Si on fait partie des 4 derniers caractères, on garde le chiffre, sinon '•'
    if (i >= length - 4) {
      result += str[i];
    } else {
      result += '•';
    }
  }

  return result;
}

export default CreditCard;