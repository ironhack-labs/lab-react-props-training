export function DriverCard({ name, rating, img, car }) {
	const cardStyle = {
		display: "flex",
		alignItems: "center",
		backgroundColor: "#455eb5",
		color: "white",
		borderRadius: "10px",
		padding: "20px",
		margin: "10px 0",
		maxWidth: "500px",
	};

	const imgStyle = {
		width: "100px",
		height: "100px",
		borderRadius: "50%",
		objectFit: "cover",
		marginRight: "20px",
	};

	const infoStyle = {
		display: "flex",
		flexDirection: "column",
	};

	// Convert rating to nearest integer and display stars
	const roundedRating = Math.round(rating);
	const stars = Array.from({ length: 5 }, (_, i) =>
		i < roundedRating ? "★" : "☆",
	).join(" ");

	return (
		<div style={cardStyle}>
			<img src={img} alt={name} style={imgStyle} />
			<div style={infoStyle}>
				<h2>{name}</h2>
				<p style={{ fontSize: "1.5em", margin: "5px 0" }}>{stars}</p>
				<p>
					{car.model} - {car.licensePlate}
				</p>
			</div>
		</div>
	);
}
