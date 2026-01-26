

const Random = ({min,max}) => {
  
    let randomNum = Math.round(Math.random() * (max-min)+min);
  
    return (
    <div>
     <p> Random value between {min} and {max} ={'>'} {randomNum} </p>
    </div>
  )
}

export default Random
