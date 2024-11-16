function Rating (props) {
    const roundedNote = Math.round(props.children)
    return (
        <>
        <p>{"★".repeat(roundedNote) + "☆".repeat(5-roundedNote)}</p>
        </>
    )
}

export default Rating;