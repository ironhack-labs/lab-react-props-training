import React from 'react';
import PropTypes from 'prop-types';
/**
 * CreditCard Component
 * Exibe um cartão de crédito estilizado.
 */
const CreditCard = React.memo(function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
  const cardLogo = type === 'Visa'
    ? 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png'
    : 'https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png';
  const hiddenNumber = `•••• •••• •••• ${number.slice(-4)}`;
  return (
    <div className="credit-card" style={{ backgroundColor: bgColor, color }} aria-label={`Credit card for ${owner}`}> 
      <div style={{ textAlign: 'right' }}>
        <img src={cardLogo} alt={type + ' logo'} />
      </div>
      <div className="card-number">{hiddenNumber}</div>
      <div>Expires {expirationMonth.toString().padStart(2, '0')}/{expirationYear} &nbsp; {bank}</div>
      <div>{owner}</div>
    </div>
  );
});

CreditCard.propTypes = {
  type: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  expirationMonth: PropTypes.number.isRequired,
  expirationYear: PropTypes.number.isRequired,
  bank: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default CreditCard;
