export const BoxColor = ({ r, g, b }) => {
	const backgroundColor = `rgb(${r}, ${g}, ${b})`;
	return (
		<div>
			<div style={{ backgroundColor: backgroundColor }}>
				rgb({r}, {g}, {b})
			</div>
		</div>
	);
};
