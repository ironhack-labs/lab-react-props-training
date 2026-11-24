function Rating({ children }) {

    const rating = Math.round(children)

    const filledStars = "★".repeat(rating)

    const emptyStars = "☆".repeat(5 - rating)

    return (
        <div
           className="rating"
           style={{
            fontSize:"30px",
            textAlign:"left",
            margin:"15px 5px"
        }}>

            {filledStars}{emptyStars}
        </div>
    )
}

export default Rating