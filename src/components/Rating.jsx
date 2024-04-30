

function Rating(pro) {    
    let fullStar=""
    let starVoid=""
    
    
    for(let i=0;i<Math.round(pro.children);i++){
        fullStar=fullStar+"★"
    }
    
    for(let i=0;i<(5-Math.round(pro.children));i++){
        starVoid+="☆"
    }

  return (
    <div >{fullStar + starVoid}</div>    
  )
}

export default Rating