const BoxColor = (props) => {
	const boxStyle = {
		backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
		width: "200px",
		height: "100px",
		border: "1px solid #000",
		margin: "10px",
        textAlign: "center",

	};

	return (
		<div style={boxStyle} className="box">
			<p>
				rgb({props.r},{props.g},{props.b})
			</p>
		</div>
	);
};

export default BoxColor;