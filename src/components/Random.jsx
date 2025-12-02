function Random({min, max}) {
  return (
    <div className="container random">Random value between {min} and {max} =&gt; {Math.floor(Math.random()*(max-min)+min)}</div>
  )
}
export default Random