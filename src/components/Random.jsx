function Random({ min, max }){

    let number = (math.random() * (max - min + 1)) + min;
    return(
      <div>
       Random value between {min} and {max} → <strong>{number}</strong> 
      </div>  
    )
}

export default Random



