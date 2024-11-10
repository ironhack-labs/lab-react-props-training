import "./Rating.css";

function Rating({children}) {
    const roundedRating = Math.round(children);
    let stars = '';

    for(let i = 0; i < roundedRating; i++) {
        stars += '★';
    }

    for(let i = 0; i < 5 - roundedRating; i++) {
        stars += '☆';
    }

    return (
        <p className="rating">{stars}</p>
    );
}

export default Rating;