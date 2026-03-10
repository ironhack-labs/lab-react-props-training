function Random({ min, max }) {

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

    const style = {
        border: "1px solid black",
        padding: "10px",
        marginBottom: "10px"
    }

    return (
        <div style={{style}}>
            <p>Random value between {min} and {max} ={">"} {randomNumber} </p>
        </div>
    )
}

export default Random