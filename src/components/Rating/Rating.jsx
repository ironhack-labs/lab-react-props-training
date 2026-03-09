export function Rating({ children }) {
	const roundedRating = Math.round(children);

	const stars = [];
	for (let i = 1; i <= 5; i++) {
		stars.push(i <= roundedRating ? "★" : "☆");
	}
	return (
		<>
			<div style={{ fontSize: "2em" }}>{stars.join(" ")}</div>;
		</>
	);
}
