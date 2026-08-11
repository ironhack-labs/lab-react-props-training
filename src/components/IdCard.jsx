const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {

    const getBirthDate = () => {
        return (
            birth.toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
                year: "numeric"
            }).replace(/,/g, "")
        )
    }

    return (
        <div className="card-container">
            <ul>
                <li className="card">
                    <img src={picture}/>
                    <div className="card-list-item">
                       <p>
                         <b> First name: </b>
                         {firstName}
                       </p>
                        <p>
                         <b> Last name: </b>
                         {lastName}
                       </p>
                        <p>
                         <b> Gender: </b>
                         {gender}
                       </p>
                        <p>
                         <b> Height: </b>
                         {height}
                       </p>
                       <p>
                        <b> Birth: </b>
                        {getBirthDate()}
                       </p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default IdCard