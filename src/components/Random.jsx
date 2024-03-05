const Random = ({ min, max }) => {
  
    const randomNum= Math.floor(Math.random()*(max-min+1))+min

    return (
      <>
      <h3>{`Random Value between ${min} and ${max} => ${randomNum}`}</h3>
  
      </>
    );
  };
  
  export default Random;
  