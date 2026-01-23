function Random(probs) {
    let random = Math.floor(Math.random() * (probs.max - probs.min) + probs.min)

    return (
        <p className="cards">
            Random value between {probs.min} and {probs.max} is {random}
        </p>
    )
}
export default Random;