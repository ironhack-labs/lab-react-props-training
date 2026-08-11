function Random({min, max}){
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    return (
        <p>Your number is {number}</p>
    )
}
export default Random;