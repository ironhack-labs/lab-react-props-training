function Rating(props){
    const ratingInt = Math.round(props.children)
    const emptyStar = '☆'
    const fullStart = '★'
    const rating = `${fullStart.repeat(ratingInt)}${emptyStar.repeat(5-ratingInt)}`

    return (
        <div>{rating}</div>
    )
}

export default Rating