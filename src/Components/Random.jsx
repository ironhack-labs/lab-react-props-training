


function Random({ min, max }) {
    const value = Math.floor(Math.random() * (max - min + 1)) + min;
    return <p>Random value between {min} and {max} =&gt; {value}</p>;
  }
  
  export default Random;
  