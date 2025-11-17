function Random(props) {
  const { min, max } = props;
  
  // Generate random number between min and max
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  
  return (
    <div className="random">Random value between {min} and {max} =&gt; {randomNum}</div>
  )
}

export default Random;