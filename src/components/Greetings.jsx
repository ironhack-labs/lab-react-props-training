import '../assets/css/Greetings.css';

function Greetings({ lang, children }) {
	let localGreeting = '';

	switch (lang) {
		case 'de':
			localGreeting = `Hallo ${children}!`;
			break;

		case 'en':
			localGreeting = `Hello ${children}!`;
			break;

		case 'es':
			localGreeting = `¡Hola ${children}!`;
			break;

		case 'fr':
			localGreeting = `Bonjour ${children}!`;
			break;
	}

	return <p className='greetings'>{localGreeting}</p>;
}

export default Greetings;
