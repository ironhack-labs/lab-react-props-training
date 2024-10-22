import data from "../data/berlin.json";



function IdCard(props) {
  return (
    <div className="IdCard">
        {data.map((person,index)=>{
            return (
                <section className="card" key={index}>
                    <img src={person.img || '../assets/images/dice-empty.png'} className="img"/> 
                    <div className="info">
                        <p>firstname : {person.firstName}</p>
                        <p>lastname : {person.lastName}</p>
                        <p>country : {person.country}</p>
                        <p>Student : {person.isStudent ? "Yes" : "No"}</p>
                    </div>             
                </section>
            )
        })
        }
    </div>
    )
}

export default IdCard;
