

function Random({min, max}){

const randomNum = Math.floor(Math.random()* (max - min +1) + min)
    return (<p>{randomNum}</p>);
}

export default Random;