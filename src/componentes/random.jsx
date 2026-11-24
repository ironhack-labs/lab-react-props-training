import "./random.css"

function Random({min,max}) {
    const number = Math.floor( Math.random()*(max-min+1)+min)
return <div className="Random"> Random value between {min} and {max} {"=>"} {number}

</div>    
}
export default Random;