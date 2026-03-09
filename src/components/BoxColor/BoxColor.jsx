export function BoxColor({ r, g, b }) {
	const backgroundColor = `rgb(${r}, ${g}, ${b})`;

	const boxStyle = {
		backgroundColor: backgroundColor,
		width: "300px",
		height: "100px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		margin: "10px 0",
		color: r + g + b > 382 ? "black" : "white", // text color contrast
		fontWeight: "bold",
		border: "1px solid #000",
		borderRadius: "8px",
	};

	return <div style={boxStyle}>{backgroundColor}</div>;
}
