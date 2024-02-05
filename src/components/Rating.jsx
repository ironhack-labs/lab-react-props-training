function Rating(props) {
    let starSentence = ""
    for (let i = 0; i < Math.round(props.children); i++) {
        starSentence += "★"
    }

    while (starSentence.length < 5) {
        starSentence += "☆"
    }

    return(
        <div>
            <p>{starSentence}</p>
        </div>
    );
}

export default Rating;