function CreditCard (props){
    const cardStyle = {
        backgroundColor: props.bgColor,
        color: props.color,
        padding: '10px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '400px',
        margin: '10px',
        position: 'relative',

        img: {
            width: '50px',
            position: 'absolute',  
            top: '5px',  
            right: '5px', 
          },
        cardNumber: {
            textAlign: 'center',  
            fontSize: '18px',  
            fontWeight: 'bold',  
            marginBottom: '2px',  
          },
        otherInfo: {
            marginBottom: '2px', 
            padding: '0',
            fontSize: '12px',
          },

      };
     
      const cardTypeImage = props.type === 'Visa' ? '/assets/images/visa.png' : '/assets/images/master-card.svgmaster-card.svg';
    
      return (
        <div style={cardStyle}>
            <img src={`${cardTypeImage}`} alt={props.type} style={cardStyle.img} />
            <p style={cardStyle.cardNumber}>**** **** **** {props.number.slice(-4)}</p>
            <p style={cardStyle.otherInfo}>
                Expires {props.expirationMonth.toString().padStart(2, '0')}/{props.expirationYear % 100}
            </p>
            <p style={cardStyle.otherInfo}>{props.bank}</p>
            <p style={cardStyle.otherInfo}>{props.owner}</p>
        </div>
      );

}


export default CreditCard;