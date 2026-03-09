export function CreditCard({
	type,
	number,
	expirationMonth,
	expirationYear,
	bank,
	owner,
	bgColor,
	color,
}) {
	// Mask all digits except the last 4
	const maskedNumber = `•••• •••• •••• ${number.slice(-4)}`;

	// Format month to always have two digits
	const formattedMonth = expirationMonth.toString().padStart(2, "0");

	// Determine card logo
	const logo =
		type === "Visa"
			? "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
			: "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png";

	const cardStyle = {
		backgroundColor: bgColor,
		color: color,
		width: "350px",
		borderRadius: "15px",
		padding: "20px",
		fontFamily: "Arial, sans-serif",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		margin: "10px 0",
		minHeight: "180px",
		boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
	};

	const topRowStyle = {
		display: "flex",
		justifyContent: "flex-end",
	};

	const bottomRowStyle = {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: "20px",
		fontSize: "0.9em",
	};

	const numberStyle = {
		fontSize: "1.5em",
		letterSpacing: "2px",
		margin: "20px 0",
	};

	return (
		<div style={cardStyle}>
			<div style={topRowStyle}>
				<img src={logo} alt={type} style={{ height: "30px" }} />
			</div>
			<div style={numberStyle}>{maskedNumber}</div>
			<div style={bottomRowStyle}>
				<div>
					Expires {formattedMonth}/{expirationYear.toString().slice(-2)}
				</div>
				<div>{bank}</div>
			</div>
			<div style={{ marginTop: "10px" }}>{owner}</div>
		</div>
	);
}
