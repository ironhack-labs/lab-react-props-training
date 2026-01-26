function Random({min, max}) {
    let number = Math.floor(Math.random() * (max - min) + min);
    return <p>Random value between {min} {max} = {number}</p>
  }
  
  export default Random;
  