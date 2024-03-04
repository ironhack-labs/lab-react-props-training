const IdCard = ({lastName, firstName, gender, height, birth, picture}) =>{
return (
    <>
    
   <img src={picture} alt="Img"/>
   <p>Fisrt Name : {firstName}</p>
   <p>Last Name : {lastName}</p>
   <p>Gender : {gender}</p>
   <p>Height : {height}</p>
   <p>Birth : {birth.toDateString( )}</p>
   
  </>
)
}
export default IdCard;
