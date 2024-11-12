import '../assets/css/Random.css';

function Random({ min, max }) {
	const randomNumber = (min, max) =>
		min + Math.floor(Math.random() * (max - min));

	return (
		<p className='random'>
			Random value between {min} and {max} {'=>'} {randomNumber(min, max)}
		</p>
	);
}

export default Random;
