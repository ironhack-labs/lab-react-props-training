export function Greetings({ lang, children }) {
	const divStyle = {
		border: "3px solid black",
		margin: "15px",
		padding: "20px",
		fontSize: "30px",
	};

	let greeting;

	switch (lang) {
		case "de":
			greeting = "Hallo";
			break;
		case "en":
			greeting = "Hello";
			break;
		case "es":
			greeting = "Hola";
			break;
		case "fr":
			greeting = "Bonjour";
			break;
		default:
			greeting = "Hello";
	}

	return (
		<div style={divStyle}>
			{greeting} {children}
		</div>
	);
}
