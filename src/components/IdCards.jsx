function IdCards({lastName,firstName,gender,height,birth,picture}) {
  return (
    <>
    <div class="row">
        <img src={picture}></img>
        <div class="text-container"> 
           <p><span>First name: </span>{firstName}</p>
           <p><span>Last name: </span>{lastName}</p>
           <p><span>Gender: </span>{gender}</p>
           <p><span>Height: </span>{height}</p>
           <p><span>Birth: </span>{birth.toDateString()}</p>

        </div>




    </div>
    
    </>
  )
}
export default IdCards