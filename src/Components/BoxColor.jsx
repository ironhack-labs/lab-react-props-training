const BoxColor = (props) => {
	const boxStyle = {
		backgroundColor: `rgb(${props.red}, ${props.green}, ${props.blue})`,
		width: "200px",
		height: "100px",
		border: "1px solid #000",
		margin: "10px",
	};

	return (
		<div style={boxStyle} className="box">
			<p>
				rgb({props.red},{props.green},{props.blue})
			</p>
		</div>
	);
};

export default BoxColor;
