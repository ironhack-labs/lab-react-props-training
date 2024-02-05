function Random({min, max}) {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    return (
        <p className="Random">Random value between {min} and {max} = {random}</p>
    )

}

export default Random;