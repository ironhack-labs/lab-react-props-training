
function Rating( {children} ) {
    const filledStars = Math.round(children);
    let stars = "";
    for (let i = 0; i < filledStars; i++) {
        stars += "★";
    }
    return (<div>{stars.padEnd(5, "☆")}</div>);
}

export default Rating;