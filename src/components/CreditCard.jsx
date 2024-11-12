import '../assets/css/CreditCard.css';
import visaLogo from '../assets/images/visa.png';
import masterCardLogo from '../assets/images/master-card.svg';

function CreditCard({
	type,
	number,
	expirationMonth,
	expirationYear,
	bank,
	owner,
	bgColor,
	color,
}) {
	// prettier-ignore
	const expirationDate = `${expirationMonth.toString().padStart(2,'0')}/${expirationYear.toString().slice(-2)}`;
	const creditCardNumberSecure = `${number.slice(-4)}`;

	const cardTypeSource = type === 'Visa' ? visaLogo : masterCardLogo;

	return (
		<div className='credit-card' style={{ backgroundColor: bgColor, color }}>
			<div className='card-type-container'>
				<img src={cardTypeSource} alt='' />
			</div>
			<div className='credit-card-number-container'>
				<span>⋅⋅⋅⋅ ⋅⋅⋅⋅ ⋅⋅⋅⋅ </span>
				{creditCardNumberSecure}
			</div>
			<div className='credit-card-info-container'>
				<div className='first-row'>
					<p>Expires {expirationDate}</p>
					<p>{bank}</p>
				</div>
				<div className='second-row'>
					<p>{owner}</p>
				</div>
			</div>
		</div>
	);
}

export default CreditCard;
