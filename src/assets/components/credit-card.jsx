function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }){
  let url;
  switch (type) {
    case "Visa":
      url = "/src/assets/images/visa.png";
      break;
    case "Master Card":
      url = "/src/assets/images/master-card.svg";
      break;
  }

  
  return (
    <div className="CreditCard rounded-1 m-3" style={{backgroundColor: bgColor}}>
      <div className="d-block p-2 d-flex justify-content-end">
        <img src={url} alt={type} />
      </div>
      <div className={`d-flex align-items-center justify-content-center fs-3 text-${color}`}>
        {encryptNumber(number)}
      </div>
      <div className={`d-flex text-${color} ms-4`}>
        <p className="mb-0">{`Expires ${expirationMonth}/${expirationYear}`}<span className="ms-2">{bank}</span></p>
      </div>
      <div className={`d-flex text-${color} ms-4 pb-2`}>
        {owner}
      </div>
    </div>
  );
}


function encryptNumber(digits){
  let secretNumber = "";
  let counter = 0;

  for (let i = 0; i < digits.length; i++) {
    const number = digits[i];

    if(i < 12){
      if (counter === 4){
        secretNumber += " ";
        counter = 0;
      }
      secretNumber += "*";
    } else {
      if (counter === 4){
        secretNumber += " ";
        counter = 0;
      }
      secretNumber += String(number);
    }
    counter++;
  }
  return secretNumber;
}

export default CreditCard;