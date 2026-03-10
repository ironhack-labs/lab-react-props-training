function Rating({ children }) {

    const rating = Math.round(children)

    return (
        <p style={{fontSize: "3rem"}}>
            {"★".repeat(rating)}
            {"☆".repeat(5 - rating)}
        </p>
    )

}

export default Rating