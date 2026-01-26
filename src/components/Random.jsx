function Random ({min, max}) {
    
    const randomNum = Math.floor(Math.random() * max) + 1;
    return (
        <div style={{border:"2px solid purple"}}>
            Random value between {min} and {max} : {randomNum}
        </div>
    )
}

export default Random