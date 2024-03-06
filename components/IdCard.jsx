export default function IdCard({ propIdCard }) {
	const { lastName, firstName, gender, height, birth, picture } = propIdCard;
	return (
		<div className="containerCard">
			<img
				src="https://randomuser.me/api/portraits/men/44.jpg"
				alt={lastName}
			/>
			<div>
				<li>Fisrt Name: {firstName}</li>
				<li>Last Name: {lastName}</li>
				<li>Gender: {gender}</li>
				<li>Height: {height}</li>
				<li>Birth: {birth.toDateString()}</li>
			</div>
		</div>
	);
}
