export function RandomNumber({ min, max }) {
	const getRandomInt = () => {
		let integer = Math.floor(Math.random() * (max - min + 1)) + min;
		return integer;
	};

	return (
		<>
			<p>
				Random value between {min} and {max} = {getRandomInt()}
			</p>
		</>
	);
}
