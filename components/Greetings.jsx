export const Greetings = (props) => {
	const greetings = {
		en: "Hello",
		fr: "Bonjour",
		de: "Hallo",
		es: "Hola",
	};
	return (
		<div className="greeting">
			{`${greetings[props.lang]} ${props.children}`}
		</div>
	);
};
