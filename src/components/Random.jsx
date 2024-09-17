function Random({ min, max }) {

  // calculates a random number between 2 provided, including both
  const randomValueMinMax = Math.floor(Math.random() * (max - min + 1)) + min
  return (
    <div className="random-value">
      <p>Random value between {min} and {max} =&gt; {randomValueMinMax}</p>
    </div>
  )
}

export default Random