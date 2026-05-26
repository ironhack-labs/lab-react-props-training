/*

Bonus: Iteration 5 | Component: CreditCard
Create a CreditCard component that displays a rectangle with the information coming from the props.

The component should take 8 props:

type: A string that can be "Visa" or "Master Card"
number: A string that is the number of the credit card. For security reasons, you should only display the 4 last digits 😉
expirationMonth: A number that represents the month, between 1 and 12
expirationYear: A number that represents the year
bank: A string that represents the name of the bank
owner: A string that represents the name of the owner
bgColor: A string for the background color of the card
color: A string for the text color of the card

*/
import "./CreditCard.css";

const CreditCard = (props) => {
    return (
        <div className="credit-card" style={{ backgroundColor: props.bgColor, color: props.color }}>
            <div className="type">{props.type}</div>
            <div className="number">**** **** **** {props.number.slice(-4)}</div>
            <div className="expiration">Expires {props.expirationMonth}/{props.expirationYear}</div>
            <div className="bank">{props.bank}</div>    
            <div className="owner">{props.owner}</div>
        </div>
    );
};

export default CreditCard;