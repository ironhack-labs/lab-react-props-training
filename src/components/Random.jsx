function Random(props) {

const randomNum = Math.floor(Math.random()*(props.max-props.min)+props.min)
//console.log(randomNum)

  return (
    <>
      <div className="random-container">
       <p>Random value between 1 and 6 = {randomNum}</p>
      </div>
    </>
  );
}

export default Random;
