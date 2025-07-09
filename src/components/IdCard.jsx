import idData from '../data/berlin.json';
function IdCard (){

    return (
        <div>
            {idData.map( (person,index) => {
                return (
                    <section className = "cardData" key = {index} >

                        <img id="profilePic" src= {person.img} alt= 'Profile Picture'/>
                        <p><strong>First name:</strong> {person.firstName}</p>
                        <p><strong>Last name:</strong> {person.lastName}</p>
                        <p><strong>Gender:</strong> {person.gender}</p>
                        <p><strong>Height:</strong> {person.height}</p>
                        <p><strong>Birth:</strong> {person.birth}</p>
                       
                                                                        
                    </section>
                )
            })}
        </div>
    )
}

export default IdCard;