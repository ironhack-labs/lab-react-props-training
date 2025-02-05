function Idcard(props){


   const { lastName, firstName, gender, height, birth, picture }=props
    return(
        <div className="border Allignment" >
            
            <div>
            <img src={picture} alt="profile" />
            </div>
            <div className="text container">
                <div><p><strong>First Name:</strong> {firstName}</p></div>
                <div>
                <p><strong>Last Name:</strong> {lastName}</p>
                        </div>
                        <div>
                        <strong>Gender:</strong> {gender}
                      </div>
                      <div>
                        <strong>Height:</strong> {height} cm
                      </div>
                      <div>
                        <strong>Birth:</strong> {new Date(birth).toLocaleDateString()}
                      </div>
            </div>
      </div>
    );

}
export default Idcard;