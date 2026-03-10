function IdCard({lastName, firstName, gender, height, birth, picture}){

    const style = {border: "1px solid black", 
                   display: "flex", 
                   margin: "10px 0", 
                   padding: "10px"}

    return (
        <div className="card-container" style={style}>    
            <img src={picture} alt="user" style={{width:"200px"}}></img>
            <div className="user-data" style={{margin: "0 20px"}}>
                <p>First name: {firstName}</p>
                <p>Last name: {lastName}</p>
                <p>Gender: {gender}</p>
                <p>Heigth: {(height / 100).toFixed(2).replace(".", ",")}</p>
                <p>Birth: {birth.toDateString()}</p>
            </div>
        </div>
    )

}

export default IdCard