const Random = (props) => {
   // For separation of concern, its better to declair the  variable outside the return 
  const { min, max } = props // Deconstructing the element - we do this so that we can freely work with  javascript in  the down code  
  const randomNumber = Math.floor(Math.random() * (max - min +  1)) + min

  return <p className="Random">Random value between {min} and {max} {"=>"} {randomNumber}</p>
}

export default Random;