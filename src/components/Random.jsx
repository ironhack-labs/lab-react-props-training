function Random ({min, max}) {
    const randNumber = Math.floor(Math.random() * max + min);

    return (
        <div className="random">Random value between {min} and {max} &rArr; {randNumber}</div>
    )
}

export default Random;