
function Rating ({children, className = ''}) {

    const formattedRating = Math.round(children);

    const rating = [];

    for (let i = 0; i < 5; i++){
        if ( i < formattedRating) {
            rating.push("&#9733;");
        } else {
            rating.push("&#9734;");
        }
    }

    return (
        <div className={`${className}`} style={{ margin: 0, padding: 0 }}> 
          <span dangerouslySetInnerHTML={{__html: rating.join("")}} />
        </div>
      );
}

export default Rating;