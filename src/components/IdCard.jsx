function IdCard({lastName, firstName, gender, height, birth, picture}){

return (
<div className="idCard">
    <div >LastName : {lastName}</div>
    <div >FirstName : {firstName}</div>
    <div >Gender : {gender}</div>
    <div >Height : {height}</div>
    <div>Birth Date : {birth.toSting()}</div>
    <img src={picture} alt={firstName} />

</div>
);
}
export default IdCard;