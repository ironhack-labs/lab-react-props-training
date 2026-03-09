import "./idCard.css";

export function IdCard(props) {
	const { firstName, lastName, gender, height, birth, picture } = props;
	return (
		<>
			<div className="box-container">
				<img src={picture} alt="foto de la persona" />
				<div className="inside-container">
					<p>
						<b>First name:</b> {firstName}
					</p>
					<p>
						<b>Last name :</b> {lastName}
					</p>
					<p>
						<b>Gender :</b> {gender}
					</p>
					<p>
						<b>Height:</b> {height}
					</p>
					<p>
						<b>Birth:</b> {birth.toLocaleDateString()}
					</p>
				</div>
			</div>
		</>
	);
}
