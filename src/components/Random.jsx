function Random({min, max}) {

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

  return(
    <>
    <p className="box">Random value between {min} and {max} = {randomNumber}</p>
    </>
  )
}

export default Random