import "./Rating.css"

function Rating ({children, className}) {

    const formattedRating = Math.round(children);

    const rating = [];

    for (let i = 0; i < 5; i++){
        if ( i < formattedRating) {
            rating.push("★");
        } else {
            rating.push("☆");
        }
    }

    return (
        <div className={`rating${className}`}> 
          <p>{rating.join("")}</p>
        </div>
      );
}

export default Rating;