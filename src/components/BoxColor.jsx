import '../assets/css/BoxColor.css';

function BoxColor({ r, g, b }) {
	const rgbString = `rgb(${r},${g},${b})`;
	const hexString =
		'#' +
		((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase();

	return (
		<div className='box-color' style={{ backgroundColor: rgbString }}>
			<p>{rgbString}</p>
			<p>{hexString}</p>
		</div>
	);
}

export default BoxColor;
