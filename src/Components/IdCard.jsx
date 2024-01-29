const IdCard = (props) => {
	return (
		<div className="id-card">
			<div className="id-card-header">
				<img
					src={props.picture}
					alt={`${props.firstName} ${props.lastName}`}
				/>
			</div>
			<div className="id-card-details">
				<p>
					<strong>Name:</strong> {props.firstName} {props.lastName}
				</p>
				<p>
					<strong>Gender:</strong> {props.gender}
				</p>
				<p>
					<strong>Height:</strong> {props.height} cm
				</p>
				<p>
					<strong>Birth:</strong> {props.birth.toDateString()}
				</p>
			</div>
		</div>
	);
};

export default IdCard;
