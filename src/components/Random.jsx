function Random ({min, max}) {
    let rand = Math.floor(Math.random()*max+ min)

    return(
        <div>
            <p>
                the random number between {max} and {min} is {rand}
            </p>
        </div>
    )
}

export default Random