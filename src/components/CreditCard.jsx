import '../assets/css/CreditCard.css';

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
	const expirationDate = `${expirationMonth.toString().padStart(2,'0')}/${expirationYear}`;
	const creditCardNumberSecure = `${number.slice(-4)}`;

	return (
		<div className='credit-card' style={{ backgroundColor: bgColor }}>
			<div className='logo-container'></div>
			<div className='credit-card-number-container'>
				<span>⋅⋅⋅⋅ ⋅⋅⋅⋅ ⋅⋅⋅⋅ </span>
				{creditCardNumberSecure}
			</div>
			<div className='credit-card-info-container'>
				<div className='first-row'>
					<p>{expirationDate}</p>
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
