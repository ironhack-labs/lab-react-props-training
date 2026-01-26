import './CreditCard.css'

const CreditCard = (props) => {
    const type = props.type
    const number = props.number
    const expirationMonth = props.expirationMonth
    const expirationYear = props.expirationYear
    const bank = props.bank
    const owner = props.owner
    const bgColor = props.bgColor
    const color = props.color

    const cardStyle = {
        backgroundColor: bgColor,
        color: color,
    }


    return (
        <article className='credit-card' style={cardStyle}>

            <div className='card-type'>{type}</div>
            <div className='card-number'>{number}  </div>
            <div className='card-details'>
                <div>Expires {expirationMonth} {expirationYear} </div>
                <div>{bank}</div>

            </div>
            <div className='owner'>Cardholder: {owner}  </div>
        </article>
    )

}

export default CreditCard

// type: A string that can be "Visa" or "Master Card"
// number: A string that is the number of the credit card.For security reasons, you should only display the 4 last digits 😉
// expirationMonth: A number that represents the month, between 1 and 12
// expirationYear: A number that represents the year
// bank: A string that represents the name of the bank
// owner: A string that represents the name of the owner
// bgColor: A string for the background color of the card
// color: A string for the text color of the card